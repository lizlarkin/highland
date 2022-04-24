const mongoose = require("mongoose");

const quotesSchema = new mongoose.Schema({
    date: {
        type: Date,
        default: Date.now,
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