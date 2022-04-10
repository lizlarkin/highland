const router = require("express").Router();
const {
    getProductByModel,
    getAllCategory,
    getCartData,
    postProduct,
} = require("../controllers/productController");

router.get("/:model", getProductByModel);
router.get("/category/:category", getAllCategory);
router.get("/cartData/:model", getCartData);
router.post("/", postProduct);

module.exports = router;