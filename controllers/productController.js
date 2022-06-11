const Product = require("../models/productModel")

module.exports = {
    getProductByModel: async (req, res) => {
        try {
            const oneProduct = await Product.find({ model: req.params.model });
            res.json(oneProduct);            
        } catch (error) {
            res.send(error);
            console.log(error);
        }
    },
    getAllCategory: async (req, res) => {
        try {
            const allInCategory = await Product.find({ category: req.params.category });
            res.json(allInCategory);
        } catch (error) {
            res.send(error);
            console.log(error);          
        }
    },
    postProduct: async (req, res) => {
        try {
            const newProduct = new Product({
                name: req.body.name,
                model: req.body.model,
                category: req.body.category,
                features: req.body.features,
                description: req.body.description,
                about: req.body.about,
                related: req.body.related,
                specifications: req.body.specifications,
                specificationsTwo: req.body.specificationsTwo,
                specificationsMulti: req.body.specificationsMulti,
                specificationsNotes: req.body.specificationsNotes,
                versions: req.body.versions,
                accessories: req.body.accessories,
                EOL: req.body.EOL,
                ECCN: req.body.ECCN,
                htsCode: req.body.htsCode,
                MTBF: req.body.MTBF,
            });
            const successSave = await newProduct.save();
            res.json(successSave);
            console.log("added Product")
        } catch (error) {
            res.send(error);
            console.log(error); 
        }
    } 
};