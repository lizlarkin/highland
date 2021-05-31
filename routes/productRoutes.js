const router = require("express").Router();
const {
    getProductByModel,
    getAllCategory,
    postProduct,
} = require("../controllers/productController");

router.get("/:model", getProductByModel);
router.get("/category/:category", getAllCategory);
router.post("/", postProduct);

module.exports = router;