const router = require('express').Router();
const auth = require("../middleware/auth");
const { newContact, getAllContact } = require("../controllers/ContactController")

router.post("/", newContact);
router.get("/", auth, getAllContact);

module.exports = router;