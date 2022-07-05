const Quote = require("../models/quotesModel");
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

    // GET AND STORE USER DATA
    const userData = await User.findById(req.user);

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
Hi ${userData.firstName + " " + userData.lastName},
                
A member of our sales department will respond to your quote request shortly. 
                
The following is a copy of your request for your records:

${successSave.products.map((productsArr, index) => (
    productsArr.map((product, idx) => (
            product.config.length>0?
            product.model
            +"-"
            +product.version.map((vers, id) => (
                vers
            ))
            +" "
            +product.name
            +"\n"
            +"Quantity: "
            +product.qty 
            +"\n"
            +"Configuration:"    
            +product.config.map((configuration, i) => (
                " "+configuration
            ))
            +"\n"
            +"Accessories:"
            +product.acc.map((acOb, iac) => (
                Object.entries(acOb).map((accessory, i) => (
                    " "+ accessory[0]+": "+accessory[1][0]+" (Quantity "+accessory[1][1]+")"
                ))
            ))
            +"\n"
            +"\n"
            :
            product.model
            +"-"
            +product.version.map((vers, id) => (
                vers
            ))
            +" "
            +product.name
            +"\n"
            +"Quantity: "
            +product.qty 
            +"\n"
            +"Accessories:"
            +product.acc.map((acOb, iac) => (
                Object.entries(acOb).map((accessory, i) => (
                    " "+ accessory[0]+": "+accessory[1][0]+" (Quantity "+accessory[1][1]+")"+"\n"
                ))
            ))
            +"\n"
            +"\n"
        )).join("")
    ))
}
For additional or immediate help, feel free to contact our sales department directly at 415-551-1700.
                
Thank you,
Highland Technology
`
};

    // Email To Sales
        const emailSales = {
            from: "no-reply@highlandtechnology.com",
            to: "sales@highlandtechnology.com",
            subject: `Quote Request From Website`,
            text: 
                `
Name: ${userData.firstName + " " + userData.lastName}
Email: ${userData.email}
Organization: ${userData.organization}
Phone: ${userData.phone}
City, State: ${userData.city + ", " + userData.state}
Country: ${userData.country}

Requested Products: 

${successSave.products.map((productsArr, index) => (
    productsArr.map((product, idx) => (
            "Line "+(idx+1)+":"
            +"\n"
            +"Product: "
            +product.model
            +"-"
            +product.version.map((vers, id) => (
                vers
            ))
            +"\n"
            +"Quantity: "
            +product.qty 
            +"\n"
            +"Accessories:"
            +"\n"
            +product.acc.map((acOb, iac) => (
                Object.entries(acOb).map((accessory, i) => (
                    accessory[0] + " (Quantity "+accessory[1][1]+")"+"\n"
                )).join("")
            ))
            +"\n"
            +"\n"
        )).join("")
    ))}
`}

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
        try {
            const allQuotes = await Quote.find({ userId: req.user }).sort({date:-1}).limit(parseInt(req.params.showNum));
            res.json(allQuotes)
        } catch (error) {
            console.log(error)
            res.send(error)
        }
    },
};