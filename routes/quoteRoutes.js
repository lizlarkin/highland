const router = require('express').Router();
const auth = require("../middleware/auth");
const { newQuote, getAllQuotes } = require("../controllers/QuotesController")

router.post("/quotes", auth, newQuote);
router.get("/quotes", auth, getAllQuotes);

module.exports = router;