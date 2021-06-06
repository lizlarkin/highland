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
    specifications: [{},{}]
    // specifications: [{
    //     spec: {
    //         type: String,
    //     }
    // }],
    // optionsA: [{
    //     optionA: {
    //         type: String,
    //     }
    // }],
    // optionsB: [{
    //     optionB: {
    //         type: String,
    //     }
    // }],
    // optionsC: [{
    //     optionC: {
    //         type: String,
    //     }
    // }],
    // optionsD: [{
    //     optionD: {
    //         type: String,
    //     }
    // }],
    // optionsE: [{
    //     optionE: {
    //         type: String,
    //     }
    // }],
    // accessories: [{
    //     accessory: {
    //         type: String,
    //     }
    // }],
});

// module.exports = Product = mongoose.model("product", productSchema);

var Product = mongoose.model("Product", productSchema);

module.exports = Product