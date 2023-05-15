const router = require("express").Router();
const {
    getProductByModel,
    getProductsByModelArr,
    getAllCategory,
    getDashNumber,
    postProduct,
} = require("../controllers/productController");

router.get("/:model", getProductByModel);
router.get("/models/:models", getProductsByModelArr);
router.get("/category/:category", getAllCategory);
router.get("/dash/:model/:versions", getDashNumber);
router.post("/", postProduct);

module.exports = router;