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
    specificationsTwoB: [],
    specificationsTwoC: [],
    specificationsTwoD: [],
    specificationsTwoE: [],
    specificationsMulti: [],
    specificationsNotes: [],
    config: [],
    versions: [],
    accessories: [],
    EOL: [], // last time buy date, end of support date, remaining stock, replacement(s)
    ECCN: {
        type: String,
    },
    htsCode: {
        type: String,
    },
    noExport: {
        type: String,
    },
    MTBF: [],
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