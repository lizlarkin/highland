const Contact = require("../models/contactModel")
const nodemailer = require("nodemailer");

module.exports = {
    newContact: async (req, res) => {
        try {
            const newContact = new Contact({
                date: req.body.date,
                sub: req.body.sub,
                org: req.body.org,
                first: req.body.first,
                last: req.body.last, 
                email: req.body.email,
                phone: req.body.phone,
                comments: req.body.comments,
                sn: req.body.sn,
                model: req.body.model,
                dash: req.body.dash,
                userId: req.body.userId,
            });

            // Check that all required field are filled in
            if (!newContact.org || !newContact.first || !newContact.last || !newContact.email || !newContact.phone) {
                return res.status(400).json({ msg: "Please complete all required fields." });
            };

            // Check that a topic is selected
            if (!newContact.sub || newContact.sub==="Choose Topic") {
                return res.status(400).json({ msg: "Please select a topic." })
            };

            const successSave = await newContact.save();
            res.json(successSave);

    // SEND EMAILS

    // Email From
        const transporter = nodemailer.createTransport({
            service: "Outlook365",
            auth: {
                user: "no-reply@highlandtechnology.com",
                pass: process.env.EPASS,
            },
        });

    // Email To Client
        const mailOptions = {
            from: 'Highland Technology <no-reply@highlandtechnology.com>',
            to: successSave.email,
            subject: `${successSave.sub==="Other"?" Request Received Confirmation":successSave.sub + " Received Confirmation"}`,
            text: `
            Hi ${successSave.first + " " + successSave.last},

            We have received your ${successSave.sub==="Other"?"request":successSave.sub}. A member of our team will respond shortly. 

            The following is a copy of your request for your records:
            Subject: ${successSave.sub}
            Comments: ${successSave.comments===undefined?"":successSave.comments}
            ${successSave.sub==="RMA Request"?
            `Serial Number: ${successSave.sn===undefined?"":successSave.sn}
            Model: ${successSave.model===undefined?"":successSave.model}
            Version: ${successSave.dash===undefined?"":successSave.dash}`
            :" "}
            For immediate assistance, please contact us at (415) 551-1700.
            
            Thank you,
            Highland Technology
            `
        }

    // Email To Sales
        const emailSales = {
            from: "no-reply@highlandtechnology.com",
            // CHANGE HERE FOR WHO GETS INTERNAL EMAIL
            to: "sales@highlandtechnology.com",
            subject: `TEST!!! New ${successSave.sub==="Other"?" Request Received":successSave.sub + " Received"}`,
            text: 
                `
                    Subject: ${successSave.sub}
                    Name: ${successSave.first + " " + successSave.last}
                    Organization: ${successSave.org}
                    Email: ${successSave.email}
                    Phone: ${successSave.phone}
                    Comments: ${successSave.comments===undefined?"":successSave.comments}
                    ${successSave.sub==="RMA Request (Repair/Calibration Services)"?
                    `Serial Number: ${successSave.sn===undefined?"":successSave.sn}
                    Model: ${successSave.model===undefined?"":successSave.model}
                    Version: ${successSave.dash===undefined?"":successSave.dash}`
                    :" "}
                `
        }

    // Transporters
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log(error);
            } else {
                console.log("Contact Email Sent to Customer");
            }
        });

        transporter.sendMail(emailSales, (error, info) => {
            if (error) {
                console.log(error);
            } else {
                console.log("Contact Email Sent to HTI");
            }
        });
        
        } catch (error) {
            res.send(error)
        }
    },

    getAllContact: async (req, res) => {
        try {
            const allContacts = await Contact.find({ userId: req.user });
            res.json(allContacts)
        } catch (error) {
            console.log(error)
            res.send(error)
        }
    },
};