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
    getProductsByModelArr: async (req, res) => {
        let modelsArr = req.params.models.split(",")
        try {
            let prodData = []
            const manyProducts = await Product.find({model: {$in: modelsArr }});
            for (let index = 0; index < manyProducts.length; index++) { 
                prodData.push(
                    [manyProducts[index].model, 
                    manyProducts[index].name,
                    manyProducts[index].versions,
                    manyProducts[index].accessories,
                ])
            }
            res.json(prodData);            
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
    getDashNumber: async (req, res) => {
        // console.log('getDashNum')
        try {

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
                config: req.body.config,
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