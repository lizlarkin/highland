const router = require('express').Router();
const auth = require("../middleware/auth");
const { 
    register, 
    login, 
    getUser, 
    deleteUser,
    updateBasicUser,
    updateQuoteNum,
} = require("../controllers/userController");

router.post("/register", register);
router.post("/login", login);
router.get("/", auth, getUser);
router.put("/updateQuoteNum", updateQuoteNum);
router.put("/updateBasicUser/:id", updateBasicUser);
router.delete("/", auth, deleteUser);

module.exports = router;