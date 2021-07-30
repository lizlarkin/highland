const mongoose = require("mongoose")

const quotesSchema = new mongoose.Schema({
    model: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    }, 
    required: [], 
    optional: [],
    accessories: [], 
    userId: {
        type: String,
        required: true,
    },
});

module.exports = Quotes = mongoose.model("quotes", quotesSchema);