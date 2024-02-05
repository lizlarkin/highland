const express = require('express');

const app = express();

const path = require("path");

require("./models/connection")

// Middleware: Data in url needed to be able to parse through
app.use(express.urlencoded({extended: true}));
// Middleware: Parse JSON data
app.use(express.json());

// Routes
app.use("/users", require("./routes/userRoutes"));
app.use("/quotes", require("./routes/quoteRoutes"));
app.use("/contact", require("./routes/contactRoutes"));
app.use("/cart", require("./routes/cartRoutes"));
app.use("/products", require("./routes/productRoutes"));
app.use("/register", require("./routes/confirmRoutes"));
 
app.use(express.static('client/build'));

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
});

app.listen(80, () => {
    console.log(`Listening at: http://localhost:80`);
});

app.listen(443, () => {
    console.log(`Listening at: http://localhost:443`);
});
