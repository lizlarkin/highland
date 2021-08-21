const Cart = require("../models/cartModel")

module.exports = {
    newCart: async (req, res) => {
        try {
            const newCart = new Cart({ 
                date: req.body.date,
                model: req.body.model,
                name: req.body.name,
                quantity: req.body.quantity,
                required: req.body.required,
                optional: req.body.optional,
                accessories: req.body.accessories,
                userId: req.user,
            });
            const successSave = await newCart.save();
            res.json(successSave);
        } catch (error) {
            res.send("error saving cart: ", error)
        }
    },
    getAllCart: async (req, res) => {
        try {
            const allCart = await Cart.find({ userId: req.user });
            res.json(allCart)
        } catch (error) {
            res.send("error getting cart", error)
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
                    sum: {$sum: "$quantity"}
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
    }
};