const express = require('express');

//test branch

const app = express();

const PORT = process.env.PORT || 5015;

const path = require("path");

require("./models/connection")

// Middleware: Data in url that need to be able to parse through
app.use(express.urlencoded({extended: true}));
// Middleware: Parse JSON data
app.use(express.json());

// Routes go here
app.use("/users", require("./routes/userRoutes"));
app.use("/quotes", require("./routes/quoteRoutes"));
app.use("/contact", require("./routes/contactRoutes"));
app.use("/cart", require("./routes/cartRoutes"));
app.use("/products", require("./routes/productRoutes"));
app.use("/register", require("./routes/confirmRoutes"));


app.listen(PORT, () => {
    console.log(`Listening at: http://localhost:${PORT}`);
});