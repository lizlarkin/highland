const mongoose = require("mongoose");

const quotesSchema = new mongoose.Schema({
    date: {
        type: String,
        required: true,
    },
    products: [],
    // model: {
    //     type: String,
    //     required: true
    // },
    // name: {
    //     type: String
    // },
    // quantity: {
    //     type: Number,
    //     required: true
    // }, 
    // required: [], 
    // optional: [],
    // accessories: [], 
    userId: {
        type: String,
        required: true,
    },
});

var Quote = mongoose.model("Quote", quotesSchema);

module.exports = Quote