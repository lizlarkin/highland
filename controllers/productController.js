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
    postProduct: async (req, res) => {
        try {
            const newProduct = new Product({
                name: req.body.name,
                model: req.body.model,
                about: req.body.about,
                features: req.body.features,
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