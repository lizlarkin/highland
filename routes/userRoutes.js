const router = require('express').Router();
const auth = require("../middleware/auth");
const { 
    register, 
    login, 
    getUser, 
    deleteUser,
    updateCartActivity
} = require("../controllers/userController");

router.post("/register", register);
router.post("/login", login);

router.get("/", auth, getUser);

router.put("/cartActivity", updateCartActivity);

router.delete("/", auth, deleteUser);

module.exports = router;