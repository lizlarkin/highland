const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    model: {
        type: String,
    },
    category: [],
    features: [{}],
    description: {
        type: String,
    },
    about: [{}],
    related: [{}],
    specifications: [[],[]],
    specificationsTwo: [],
    specificationsMulti: [],
    specificationsNotes: [],
    versions: [],
    accessories: [],
    EOL: [], // last time buy date, end of support date, remaining stock
    ECCN: {
        type: String,
    },
    htsCode: {
        type: String,
    },
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