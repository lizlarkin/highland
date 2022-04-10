const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
    model: {
        type: String,
        required: true
    },
    version: [],
    quantity: {
        type: Number,
        required: true
    }, 
    accessories: [], 
    userId: {
        type: String,
        required: true,
    },
});

var Cart = mongoose.model("Cart", cartSchema);

module.exports = Cart