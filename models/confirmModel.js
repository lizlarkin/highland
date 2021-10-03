const mongoose = require("mongoose");

const confirmSchema = new mongoose.Schema({
    token: {
        type: String,
        required: true,
    },
    userId: {
        type: String,
        required: true,
    },
});

var Confirm = mongoose.model("confirm", confirmSchema);

module.exports = Confirm