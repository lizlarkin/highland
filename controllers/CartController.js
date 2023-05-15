const Cart = require("../models/cartModel");
const Product = require("../models/productModel");

module.exports = {
    newCart: async (req, res) => {
        try {
            const newCart = new Cart({ 
                prod: req.body.prod,
                qty: req.body.qty,             
                acc: req.body.acc,
                userId: req.user,
            });
            const successSave = await newCart.save();
            res.json(successSave);
        } catch (error) {
            res.send(error)
        }
    },
    getAllCart: async (req, res) => {
        try {
            const allCart = await Cart.find({ userId: req.user });
            // console.log("orig", allCart[0])

            // Generate Array of Models in User's Cart
            let modelArr = []
            allCart.map((models) => (
                modelArr.push(models.prod.split("-")[0])
            ));
            // console.log("modelArr: ", modelArr)

            // Get Product Names from Models and Generate Array of Product Titles
            let prodArr = []
            const productTitles = await Product.find({ model:modelArr })

            for (let index = 0; index < modelArr.length; index++) {
                allCart[index].qty
                // console.log(index, allCart[index])
            }

            // productTitles.map((names, index) => (
            //     prodArr.push([
            //         names.model, 
            //         names.name, 
            //     ])
            //     allCart[0].name=names.name,
            //     console.log("names", names.name)
            // ));
            // console.log("all cart after name", allCart)

            res.json(allCart)

        } catch (error) {
            res.send(error)
        }
    },
    getCartQuantity: async (req, res) => {
        try {
            const cartCount = await Cart.aggregate([
                {
                $match: {
                    userId: req.user
                }
            },
                {
                $group: {
                    _id: null,
                    sum: {$sum: "$qty"}
                    }
            }   
            ]);
            res.json(cartCount)
        } catch (error) {
            res.send(error)
        }
    },
    deleteOneCart: async (req, res) => {
        try {
            const removeOne = await Cart.deleteOne({ _id: req.params._id });
            res.json(removeOne);
        } catch (error) {
            res.send(error)
        }
    },
    deleteEntireCart: async (req, res) => {
        try {
            const removeAll = await Cart.deleteMany({ userId: req.user })
            res.json(removeAll)
        } catch (error) {
            res.send(error)
        }
    }
};