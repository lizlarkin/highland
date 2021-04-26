const router = require('express').Router();
const auth = require("../middleware/auth");
const { newQuote } = require("../controllers/QuotesController")

router.post("/", auth, newQuote);

module.exports = router;