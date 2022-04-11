const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
    model: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    version: [],
    config: [],
    qty: {
        type: Number,
        required: true
    }, 
    acc: [], 
    userId: {
        type: String,
        required: true,
    },
});

var Cart = mongoose.model("Cart", cartSchema);

module.exports = Cart