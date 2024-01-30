const express = require('express');

const app = express();

const PORT = process.env.PORT || 443;

const path = require("path");

require("./models/connection")

// Middleware: Data in url needed to be able to parse through
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

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Listening at: http://localhost:${PORT}`);
});