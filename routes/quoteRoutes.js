const router = require('express').Router();
const auth = require("../middleware/auth");
const { newCart } = require("../controllers/QuotesController")

router.post("/cart", auth, newCart);
// router.post("/", auth, newQuote);

module.exports = router;