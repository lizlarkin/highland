const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    model: {
        type: String,
    },
    category: {
        type: String,
    },
    features: [{}],
    description: {
        type: String,
    },
    about: [{}],
    related: [{}],
    specifications: [[],[]],
    optionsRequired: [[]],
    optionsOptional: [[]],
    accessories: [],
    // img: {
    //     data: Buffer,
    //     contentType: String,
    // }
});

// module.exports = Product = mongoose.model("product", productSchema);

var Product = mongoose.model("Product", productSchema);

module.exports = Product