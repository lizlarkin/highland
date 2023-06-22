const router = require('express').Router();
const auth = require("../middleware/auth");
const { newQuote, getAllQuotes } = require("../controllers/QuotesController")

router.post("/", auth, newQuote);
// router.get("/:showNum", auth, getAllQuotes);
router.get("/", auth, getAllQuotes);

module.exports = router;