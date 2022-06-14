const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
    date: {
        type: Date,
        default: Date.now,
    },
    subject: {
        type: String,
        required: true
    },
    organization: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    comments: {
        type: String
    },
    serialNum: {
        type: String
    },
    model: {
        type: String
    },
    version: {
        type: String
    },
    userId: {
        type: String,
    },
});

var Contact = mongoose.model("Contact", contactSchema);

module.exports = Contact