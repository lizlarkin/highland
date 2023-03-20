require("dotenv").config();
const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const Confirm = require("../models/confirmModel");
const crypto = require("crypto");
const nodemailer = require("nodemailer");

module.exports = {
    register: async (req, res) => {
        try {
            const {
                email, 
                pass, 
                passCheck, 
                first,
                last,
                org,
                phone,
                street,
                city,
                state,
                country,
                optIn, 
                quoteNum,
            } = req.body;
    
                if (!email || !pass || !passCheck || !first || !last || !org || !phone || !street || !city || !state || !city || !state || !country) {
                    return res.status(400).json({ msg: "Please complete all required fields." })
                }
    
                if (passCheck.length < 8) {
                    return res.status(400).json({ msg: "Password must be at least 8 characters." })
                }
    
                if (pass !== passCheck) {
                    return res.status(400).json({ msg: "Passwords do not match." })
                }
    
                const existingUser = await User.findOne({ email: email });
    
                if (existingUser) {
                    return res.status(400).json({ msg: "Email is already registered." })
                }
    
                const salt = await bcrypt.genSalt();
                const passwordHash = await bcrypt.hash(pass, salt);
    
                const newUser = new User({
                    email,
                    pass: passwordHash,
                    first,
                    last,
                    org,
                    phone,
                    street,
                    city,
                    state,
                    country,
                    optIn,
                    quoteNum
                });

                // start confirmation code here
                const confirmationToken = new Confirm({
                    token: crypto.randomBytes(15).toString("hex"),
                    userId: newUser._id,
                });

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
                    from: "no-reply@highlandtechnology.com",
                    to: newUser.email,
                    subject: "Thank you for registering with Highland Technology",
                    text: `Please click link to confirm account: http://localhost:3000/confirm_token/${confirmationToken.token}`,
                }

                // Email To Sales
                const emailSales = {
                    from: "no-reply@highlandtechnology.com",
                    to: "lizlarkin@highlandtechnology.com",
                    subject: "New Website Registration",
                    text: `New registered user: 
                    Name: ${newUser.first + " " + newUser.last}
                    Email: ${newUser.email}
                    Organization: ${newUser.org}
                    Phone: ${newUser.phone}
                    City, State: ${newUser.city + ", " + newUser.state}
                    Country: ${newUser.country}
                    Opt In: ${newUser.optIn}
                    `,
                }

                transporter.sendMail(mailOptions, (error, info) => {
                    if (error) {
                        console.log(error);
                    } else {
                        console.log(`Email was sent with: http://localhost:3000/confirm_token/${confirmationToken.token}`);
                    }
                });

                transporter.sendMail(emailSales, (error, info) => {
                    if (error) {
                        console.log(error);
                    } else {
                        console.log("Registration Email Sent to Highland Sales");
                    }
                });

                // when link is clicked, grab token (req.query)/parameter
                // use parameter to make request back to backend
                // set confirmation to true, send back success, redirect to login

                await confirmationToken.save();
                // end confirmation code here

                const savedUser = await newUser.save();
                res.json(savedUser);
            
        } catch (error) {
            res.status(500).json({ msg: "error here!",  error })
        }
    },

    login: async (req, res) => {
        try {
            const { email, pass } = req.body;  

            if (!email || !pass) {
                return res.status(400).json({ msg: "Required field(s) missing. Please try again or register." })
            }

            const user = await User.findOne({ email: email }) 

            if (!user) {
                return res.status(400).json({ msg: "User not found. Please try again." })
            }

            const isMatch = await bcrypt.compare(pass, user.pass);

            if (!isMatch) {
                return res.status(400).json({ msg: "Password is incorrect. Please try again." })
            }

            if (!user.confirm)
            return res.json({ token: null, user: { confirm: user.confirm } });

            const token = jwt.sign({ id: user._id}, process.env.JWT_SECRET, {
                expiresIn: "24h", 
            });

            res.json({
                token, 
                user: { 
                    id: user._id, 
                    email: user.email,
                    first: user.first, 
                    last: user.last, 
                    org: user.org,
                    phone: user.phone,
                    street: user.street,
                    city: user.city,
                    state: user.state,
                    country: user.country,
                    optIn: user.optIn,
                    confirm: user.confirm,
                    quoteNum: user.quoteNum,
                },
            });

        } catch (error) {
            res.status(500).json({ error: error.message })
        }
    },

    getUser: async (req, res) => {
        try {
            const user = await User.findById(req.user);

            res.json({
                id: user._id, 
                email: user.email,
                first: user.first, 
                last: user.last, 
                org: user.org,
                phone: user.phone,
                street: user.street,
                city: user.city,
                state: user.state,
                country: user.country,
                optIn: user.optIn,
                confirm: user.confirm,
                quoteNum: user.quoteNum,
            });

        } catch (error) {
            res.send(error.response)
        }
    },

    // Update Basic User Data (not for opt-in/out or password)
    updateBasicUser: async (req, res) => {
        try {

            // if (!email || !first || !last || !org || !phone || !street || !city || !state || !city || !state || !country) {
            //     return res.status(400).json({ msg: "Please complete all required fields." })
            // }

            const userToUpdate = await User.updateOne(
                { _id: req.params.id },

                {
                    $set: req.body
                }
            );
            // console.log(req.body)
            res.json(userToUpdate)
        } catch (error) {
            res.send(error.response)
            // res.status(500).json({ error: error.msg })
            // console.log("here", error.message)
        }
    },

    // Update Opt-In User Preference
    updateOpt: async (req, res) => {
        try {
            const userToUpdate = await User.updateOne(
                { _id: req.params.id },
                {
                    $set: {optIn: req.body.optIn}
                }
            );
            res.json(userToUpdate)
        } catch (error) {
            res.send(error.response)
        }
    },

    forgotPass: async (req, res) => {
        try {
            
            // Store email
            const email = req.body.email;

            // Validate that user sent email
            if (!email) {
                return res.status(400).json({ msg: "Please fill in email address." })
            }

            // Validate that email is already in database
            const user = await User.findOne({ email: email }) 
            if (!user) {
                return res.status(400).json({ msg: "Email not found. Please try again." })
            }

            // Send forgot password email 

                // Create token for 'Forgot Password' email
                const forgotPassToken = new Confirm({
                    token: crypto.randomBytes(15).toString("hex"),
                    // userId: newUser._id,
                });

                console.log(forgotPassToken);

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
                    from: "no-reply@highlandtechnology.com",
                    to: email,
                    subject: "Password Reset - Highland Technology",
                    text: `Please click link to reset password: http://localhost:3000/confirm_token/${forgotPassToken.token}`,
                }

            // Reset Password

        } catch (error) {
            res.send(error.response)
        }
    },

    // Update User Password
    updatePass: async (req, res) => {   
        try {
            // Store existing password from database 
            const {pass} = await User.findById(req.params.id);  
            
            // Store existing password as input by user
            const oldPass = req.body.pass.oldPass;
            
            // Store new password to set
            const newPass = req.body.pass.newPass;
            const newSalt = await bcrypt.genSalt();
            const newPassHash = await bcrypt.hash(newPass, newSalt);
            
            // Store password check to make sure password inputs are correct
            const checkPass = req.body.pass.checkPass;
            
            // Check that existing password is correct
            const compare = await bcrypt.compare(oldPass, pass)
            if (!compare) {
                return res.status(400).json({msg: "Existing password is incorrect."})
            };
            
            // Check that new password meets length criteria
            if (newPass.length < 8) {
                return res.status(401).json({ msg: "Password must be at least 8 characters." })
            }
           
            // Check that new password is correctly input
            if (newPass !== checkPass) {
                return res.status(402).json({ msg: "Passwords do not match." })
            }

            // Save new password to database
            const userToUpdate = await User.updateOne(
                { _id: req.params.id },
                {
                    $set: {pass: newPassHash}
                }
            );
            res.json(userToUpdate)

        } catch (error) {  
            res.send(error.response)         
        }
    },

    deleteUser: async (req, res) => {
        try {
            const deletedUser = await User.findByIdAndDelete(req.user);
            res.json(deletedUser);
        } catch (error) {
            res.send(error.response)
        }
    },

    updateQuoteNum: async (req,res) => {
        try {
            const incrementQuote = await User.updateOne(
                req.user,
                { "$inc" : { "quoteNum": 1} 
            })
            res.json(incrementQuote);
        } catch (error) {
            res.send(error.response);
        }
    },

};
