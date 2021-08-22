const router = require('express').Router();
const auth = require("../middleware/auth");
const { 
    newCart, 
    getAllCart, 
    getCartQuantity, 
    deleteOneCart, 
    deleteEntireCart 
} = require("../controllers/CartController")

router.post("/", auth, newCart);
router.get("/", auth, getAllCart);
router.get("/quantity", auth, getCartQuantity)
// need auth middle??
router.delete("/:_id", deleteOneCart);    
router.delete("/", auth, deleteEntireCart);    

module.exports = router;