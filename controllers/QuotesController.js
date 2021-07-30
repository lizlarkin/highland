const Quote = require("../models/quotesModel")

module.exports = {
    newCart: async (req, res) => {
        try {
            const newCart = new Quote({ 
                model: req.body.model,
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
    // newQuote: async (req, res) => {
    //     try {
    //         const newQuote = new Quote({ 
    //             date: req.body.date,
    //             cart: req.body.cart,
    //             products: req.body.products,
    //             userId: req.user,
    //         });
    //         const successSave = await newQuote.save();
    //         res.json(successSave);
    //     } catch (error) {
    //         res.send("error saving quote: ", error)
    //     }
    // },
};