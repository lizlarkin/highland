const router = require('express').Router();
const auth = require("../middleware/auth");
const { newCart, getAllCart, getCartQuantity, deleteOneCart } = require("../controllers/CartController")

router.post("/", auth, newCart);
router.get("/", auth, getAllCart);
// add auth back in when working
router.get("/quantity", auth, getCartQuantity)
// need auth middle??
router.delete("/:_id", deleteOneCart);    

module.exports = router;