const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
    date: {
        type: Date,
        default: Date.now,
    },
    sub: {
        type: String,
        required: true
    },
    org: {
        type: String,
        required: true
    },
    first: {
        type: String,
        required: true
    },
    last: {
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
    sn: {
        type: String
    },
    model: {
        type: String
    },
    dash: {
        type: String
    },
    userId: {
        type: String,
    },
});

var Contact = mongoose.model("Contact", contactSchema);

module.exports = Contact