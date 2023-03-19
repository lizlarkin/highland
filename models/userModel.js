const mongoose = require("mongoose");
const Quote = require("./quotesModel");

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/.+\@.+\..+/, 'Please enter a valid email address'], 
        trim: true,
    },
    pass: {
        type: String,
        required: true,
        minLength: 8,
        trim: true,
    },
    first: {
        type: String,
        required: true,
        trim: true,
    },
    last: {
        type: String,
        required: true,
        trim: true,
    },
    org: {
        type: String,
        required: true,
        trim: true,
    },
    phone: {
        type: String,
        required: true,
        trim: true,
    },
    street: {
        type: String,
        required: true,
        trim: true,
    },
    city: {
        type: String,
        required: true,
        trim: true,
    },
    state: {
        type: String,
        trim: true,
    },
    country: {
        type: String,
        required: true,
        trim: true,
    },
    optIn: {
        type: Boolean,
        required: false,
    },
    confirm: {
        type: Boolean,
        default: false
    },
    quoteNum: {
        type: Number,
        default: 0,
    },
});

userSchema.post("findOneAndDelete", async (user) => {
    console.log(user)
    console.log(user._id)
    try {
        await Quote.deleteMany({userId: user._id});
    } catch (error) {
        console.log(error);
    }
});

module.exports = User = mongoose.model("user", userSchema);