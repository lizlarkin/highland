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
    expiration: {
        type: Date,
        default: Date.now,
        expires: 3600, // 1 hour
    }
});

var Confirm = mongoose.model("confirm", confirmSchema);

module.exports = Confirm