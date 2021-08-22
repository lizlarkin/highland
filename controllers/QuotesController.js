const Quote = require("../models/quotesModel")

module.exports = {
    newQuote: async (req, res) => {
        try {
            const newQuote = new Quote({
                date: req.body.date,
                products: req.body.products,
                userId: req.user,
            });
            const successSave = await newQuote.save();
            res.json(successSave);
        } catch (error) {
            res.send(error)
        }
    },
    getAllQuotes: async (req, res) => {
        try {
            const allQuotes = await Quote.find({ userId: req.user });
            res.json(allQuotes)
        } catch (error) {
            console.log(error)
            res.send(error)
        }
    },
};