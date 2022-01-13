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
    specificationsTwo: [],
    specificationsFour: [],
    specificationsNotes: [],
    optionsRequired: [[]],
    optionsOptional: [[]],
    baseModel: {
        type: String,
    },
    accessories: [],
    // img: {
    //     data: Buffer,
    //     contentType: String,
    // }
    
    // move the below to data model
    // manDownloads: [],
    // dsDownloads: [],
    // softwareClicks: [],
    // otherDownloads: [],
    // quoteRequests: [], 

});

// module.exports = Product = mongoose.model("product", productSchema);

var Product = mongoose.model("Product", productSchema);

module.exports = Product