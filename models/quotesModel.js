const mongoose = require("mongoose")

const quotesSchema = new mongoose.Schema({
    date: {
        type: Date,
        required: true,
    },
    quoteNumber: {
        type: String,
        required: true,
    },
    products: {
        product: {
            type: String,
        },
    },
    userId: {
        type: String,
        required: true,
    },
});

module.exports = Quotes = mongoose.model("quotes", quotesSchema);