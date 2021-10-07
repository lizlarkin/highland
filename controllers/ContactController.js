const Contact = require("../models/contactModel")

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