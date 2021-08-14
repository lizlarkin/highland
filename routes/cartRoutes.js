const router = require('express').Router();
const auth = require("../middleware/auth");
const { newCart, getAllCart, deleteOneCart } = require("../controllers/CartController")

router.post("/", auth, newCart);
router.get("/", auth, getAllCart);
// need auth middle??
router.delete("/:_id", deleteOneCart);    

module.exports = router;