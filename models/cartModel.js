const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
    // date: {
    //     type: String,
    //     required: true,
    // },
    model: {
        type: String,
        required: true
    },
    name: {
        type: String
    },
    quantity: {
        type: Number,
        required: true
    }, 
    required: [], 
    optional: [],
    baseModel: {
        type: String
    },
    accessories: [], 
    userId: {
        type: String,
        required: true,
    },
});

var Cart = mongoose.model("Cart", cartSchema);

module.exports = Cart