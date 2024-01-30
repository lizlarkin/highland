const express = require('express');
const fs = require('fs');
const http = require('http');
const https = require('https');
const app = express();
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
    res.send('this works from server.js 2');
});

// Certificate
const privateKey = fs.readFileSync('/etc/letsencrypt/live/dev.highlandtechnology.com/privkey.pem', 'utf8');
const certificate = fs.readFileSync('/etc/letsencrypt/live/dev.highlandtechnology.com/cert.pem', 'utf8');
const ca = fs.readFileSync('/etc/letsencrypt/live/dev.highlandtechnology.com/chain.pem', 'utf8');

const credentials = {
	key: privateKey,
	cert: certificate,
	ca: ca
};

// Starting both http & https servers
const httpServer = http.createServer(app);
const httpsServer = https.createServer(credentials, app);

httpServer.listen(80, () => {
	console.log('HTTP Server running on port 80');
});

httpsServer.listen(443, () => {
	console.log('HTTPS Server running on port 443');
});
