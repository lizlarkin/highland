const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
    prod: {
        type: String,
        required: true
    },
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