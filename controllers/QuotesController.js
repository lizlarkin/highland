const Quote = require("../models/quotesModel")

module.exports = {
    newQuote: async (req, res) => {
        try {
            const newQuote = new Quote({ 
                date: req.body.date,
                model: req.body.model,
                name: req.body.name,
                quantity: req.body.quantity,
                required: req.body.required,
                optional: req.body.optional,
                accessories: req.body.accessories,
                userId: req.user,
            });
            const successSave = await newQuote.save();
            res.json(successSave);
        } catch (error) {
            res.send("error saving quote: ", error)
        }
    },
    getAllQuotes: async (req, res) => {
        try {
            const allQuotes = await Quote.find({ userId: req.user });
            res.json(allQuotes)
        } catch (error) {
            console.log(error)
            res.send("cannot get all quotes", error)
        }
    },
};