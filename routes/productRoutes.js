const router = require("express").Router();
const {
    getProductByModel,
    postProduct,
} = require("../controllers/productController");

router.get("/:model", getProductByModel);
router.post("/", postProduct);

module.exports = router;