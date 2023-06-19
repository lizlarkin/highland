const Quote = require("../models/quotesModel");
const Product = require("../models/productModel");
const nodemailer = require("nodemailer");

module.exports = {
    newQuote: async (req, res) => {
        try {
            const newQuote = new Quote({
                date: req.body.date,
                products: req.body.products,
                userId: req.user,
            });
            const successSave = await newQuote.save();
            res.json(successSave);
            // successSave.products.map((productArr)=> (
            //     productArr.map((product)=>(
            //         product.acc.map((prod)=> (
            //             Object.entries(prod).map((pro) => (
            //                 console.log(pro[0] + " (Quantity: " + pro[1] + ")")
            //             ))
            //         ))
            //     ))
            // ))
            
    // GET AND STORE USER DATA
    const userData = await User.findById(req.user);

    // GET AND STORE PRODUCT DATA
        // Create array of products 
        const modelArr = []
        newQuote.products.map((productArr) => (
            productArr.map((products) => (
                modelArr.push(products.prod.split("-")[0])
            ))
        ))

        // Get Product Name, Configuration, and Accessory Data
        const productNames = await Product.find({ model:modelArr }, { model: 1, name: 1, _id:0})
        const productConfig = await Product.find({ model:modelArr }, { model: 1, versions: 1, _id:0})
        const productAccessories = await Product.find({ model:modelArr }, { model: 1, accessories: 1, _id:0})

    // SEND EMAILS

        // Email From
        const transporter = nodemailer.createTransport({
            service: "Outlook365",
            auth: {
                user: "no-reply@highlandtechnology.com",
                pass: process.env.EPASS,
            },
        });

        // Email To Client
            const mailOptions = {
                from: 'Highland Technology <no-reply@highlandtechnology.com>',
                to: userData.email,
                subject: `Quote Request Confirmation from Highland Technology`,
                text: 
`
Hi ${userData.first + " " + userData.last},
                
A member of our sales department will respond to your quote request shortly. 
                
The following is a copy of your request:

${successSave.products.map((productArr) => (
    productArr.map((product) => (
    "Product: "
    +product.prod
    +" "
    +productNames.find(n => n.model === product.prod.split("-")[0]).name
    +"\n"
    +"Quantity: "
    +product.qty
    +"\n"
    +(productConfig.find(n => n.model === product.prod.split("-")[0]).versions[productConfig.find(n => n.model === product.prod.split("-")[0]).versions.findIndex(search => search.includes(parseInt(product.prod.split("-")[1])))][2].join(", ")?
    "Configuration: "+productConfig.find(n => n.model === product.prod.split("-")[0]).versions[productConfig.find(n => n.model === product.prod.split("-")[0]).versions.findIndex(search => search.includes(parseInt(product.prod.split("-")[1])))][2].join(", ")
    +"\n"
    :"")
    +(product.acc.length>0?
    "Accessories: "
    +product.acc.map((accessories) => (
        Object.entries(accessories).map((accessory) => (
            accessory[0] 
            + ": "
            + productAccessories.find(n => n.model === product.prod.split("-")[0]).accessories[productAccessories.find(n => n.model === product.prod.split("-")[0]).accessories.findIndex(a => a.includes(accessory[0]))][1]
            + " (Quantity: " 
            + accessory[1] 
            + ")"
        )).join(", ")
    ))
    +"\n"
    :"")
    +"\n"
    )).join("")))}
For additional or immediate help, feel free to contact our sales department directly at 415-551-1700.
                
Thank you,
Highland Technology
`
};

    // Email To Sales
        const emailSales = {
            from: "no-reply@highlandtechnology.com",
            to: "lizlarkin@highlandtechnology.com",
            subject: `Quote Request From Website`,
            text: 
                `
Name: ${userData.first + " " + userData.last}
Email: ${userData.email}
Organization: ${userData.org}
Phone: ${userData.phone}
City, State: ${userData.city + ", " + userData.state}
Country: ${userData.country}

Requested Products: 

${successSave.products.map((productArr, index) => (
    productArr.map((product, idx) => (
    "Product: "
    +product.prod
    +"\n"
    +"Quantity: "
    +product.qty
    +"\n"
    +(product.acc.length>0?
        "Accessories: "
        +product.acc.map((accessories) => (
            Object.entries(accessories).map((accessory) => (
                accessory[0] 
                + " (Quantity: " 
                + accessory[1] 
                + ")"
            )).join(", ")
        ))
        +"\n"
        :"")
    +"\n"
    )).join("")))}
`
}

        // Transporters
            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    console.log(error);
                } else {
                    console.log("Quote Email Sent to Customer");
                }
            });

            transporter.sendMail(emailSales, (error, info) => {
                if (error) {
                    console.log(error);
                } else {
                    console.log("Quote Email Sent to Highland Sales");
                }
            });

        } catch (error) {
            res.send(error)
        }
    },
    getAllQuotes: async (req, res) => {
        console.log('hit getAllQuotes first', req.params.showNum)
        try {
            const allQuotes = await Quote.find({ userId: req.user }).sort({date:-1}).limit(parseInt(req.params.showNum));
            res.json(allQuotes)
        } catch (error) {
            res.send(error)
        }
    },
};