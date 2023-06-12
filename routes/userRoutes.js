const router = require('express').Router();
const auth = require("../middleware/auth");
const { 
    register, 
    login, 
    forgotPass,
    getUser, 
    deleteUser,
    updateBasicUser,
    updateQuoteNum,
    updateOpt,
    updatePass,
    resetPass,
} = require("../controllers/userController");

router.post("/register", register);
router.post("/login", login);
router.post("/forgotPass", forgotPass);
router.get("/", auth, getUser);
router.put("/updateQuoteNum/:id", updateQuoteNum);
router.put("/updateBasicUser/:id", updateBasicUser);
router.put("/updateOpt/:id", updateOpt);
router.put("/updatePass/:id", updatePass);
router.put("/resetPass", resetPass);
router.delete("/", auth, deleteUser);

module.exports = router;