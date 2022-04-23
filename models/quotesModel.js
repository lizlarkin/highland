const mongoose = require("mongoose");

const quotesSchema = new mongoose.Schema({
    date: {
        type: String,
        required: true,
    },
    products: [],
    userId: {
        type: String,
        required: true,
    },
    showNum: {}
});

var Quote = mongoose.model("Quote", quotesSchema);

module.exports = Quote