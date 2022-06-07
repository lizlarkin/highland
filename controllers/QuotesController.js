const Quote = require("../models/quotesModel");
const nodemailer = require("nodemailer");

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
            const allQuotes = await Quote.find({ userId: req.user }).sort({date:-1}).limit(parseInt(req.params.showNum));
            res.json(allQuotes)
        } catch (error) {
            console.log(error)
            res.send(error)
        }
    },
};