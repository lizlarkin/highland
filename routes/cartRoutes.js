const router = require('express').Router();
const auth = require("../middleware/auth");
const { newCart, getAllCart } = require("../controllers/CartController")

router.post("/", auth, newCart);
router.get("/", auth, getAllCart);

module.exports = router;