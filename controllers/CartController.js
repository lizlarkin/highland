const Cart = require("../models/cartModel")

module.exports = {
    newCart: async (req, res) => {
        try {
            const newCart = new Cart({ 
                model: req.body.model,
                name: req.body.name,
                version: req.body.version,
                config: req.body.config,
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