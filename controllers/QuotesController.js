const Quotes = require("../models/quotesModel")

module.exports = {
    newQuote: async (req, res) => {
        try {
            const newQuote = new Quote({ 
                date: req.body.date,
                quoteNumber: req.body.quoteNumber,
                products: req.body.products,
                userId: req.user,
            });
            const successSave = await newQuote.save();
            res.json(successSave);
        } catch (error) {
            res.send("error saving quote: ", error)
        }
    }
}