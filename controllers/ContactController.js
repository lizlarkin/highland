const Contact = require("../models/contactModel")
const nodemailer = require("nodemailer");

module.exports = {
    newContact: async (req, res) => {
        try {
            const newContact = new Contact({
                date: req.body.date,
                subject: req.body.subject,
                organization: req.body.organization,
                firstName: req.body.firstName,
                lastName: req.body.lastName, 
                email: req.body.email,
                phone: req.body.phone,
                comments: req.body.comments,
                serialNum: req.body.serialNum,
                model: req.body.model,
                version: req.body.version,
                userId: req.user,
            });
            const successSave = await newContact.save();
            res.json(successSave);

    // SEND EMAILS

    // Email From
        const transporter = nodemailer.createTransport({
            service: "Outlook365",
            auth: {
                user: "lizlarkin@highlandtechnology.com",
                pass: process.env.EPASS,
            },
        });

    // Email To Client
        const mailOptions = {
            from: 'Highland Technology <no-reply@highlandtechnology.com>',
            to: successSave.email,
            subject: `${successSave.subject==="Other"?" Request Received Confirmation":successSave.subject + " Received Confirmation"}`,
            text: `
            Hi ${successSave.firstName + " " + successSave.lastName},

            We have received your ${successSave.subject==="Other"?"request":successSave.subject}. A member of our team will respond shortly. 
            
            For immediate assistance, please contact us at (415) 551-1700.
            
            Highland Technology
            `
        }

    // Email To Sales
        const emailSales = {
            from: "no-reply@highlandtechnology.com",
            // CHANGE HERE FOR WHO GETS INTERNAL EMAIL
            to: "enlarkin@gmail.com",
            subject: `New ${successSave.subject==="Other"?" Request Received":successSave.subject + " Received"}`,
            text: 
                `
                    Subject: ${successSave.subject}
                    Name: ${successSave.firstName + " " + successSave.lastName}
                    Organization: ${successSave.organization}
                    Email: ${successSave.email}
                    Phone: ${successSave.phone}
                    Comments: ${successSave.comments===undefined?"":successSave.comments}
                    ${successSave.subject==="RMA Request"?
                    `Serial Number: ${successSave.serialNum===undefined?"":successSave.serialNum}
                    Model: ${successSave.model===undefined?"":successSave.model}
                    Version: ${successSave.version===undefined?"":successSave.version}`
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