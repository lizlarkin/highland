const mongoose = require ('mongoose');

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/highland", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: true,
}, (err) => {
    if (err) throw err;
    console.log("Connected to MongoDB!")
});

module.exports = mongoose;