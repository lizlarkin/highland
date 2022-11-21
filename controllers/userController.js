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
                password, 
                passwordCheck, 
                firstName,
                lastName,
                organization,
                phone,
                street,
                city,
                state,
                country,
                optIn, 
                quoteNum,
            } = req.body;
    
                if (!email || !password || !passwordCheck || !firstName || !lastName || !organization || !phone || !street || !city || !state || !city || !state || !country) {
                    return res.status(400).json({ msg: "Please complete all fields." })
                }
    
                if (passwordCheck.length < 8) {
                    return res.status(400).json({ msg: "Password must be at least 8 characters." })
                }
    
                if (password !== passwordCheck) {
                    return res.status(400).json({ msg: "Passwords do not match." })
                }
    
                const existingUser = await User.findOne({ email: email });
    
                if (existingUser) {
                    return res.status(400).json({ msg: "Email is already registered." })
                }
    
                const salt = await bcrypt.genSalt();
                const passwordHash = await bcrypt.hash(password, salt);
    
                const newUser = new User({
                    email,
                    password: passwordHash,
                    firstName,
                    lastName,
                    organization,
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

                console.log("confirm token from user controller", confirmationToken);

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
                    subject: "Thank you for registering with Highland Technology.",
                    text: `Please click link to confirm account: http://localhost:3000/confirm_token/${confirmationToken.token}`,
                }

                // Email To Sales
                const emailSales = {
                    from: "no-reply@highlandtechnology.com",
                    to: "lizlarkin@highlandtechnology.com",
                    subject: "New Website Registration",
                    text: `New registered user: 
                    Name: ${newUser.firstName + " " + newUser.lastName}
                    Email: ${newUser.email}
                    Organization: ${newUser.organization}
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
            const { email, password } = req.body;  

            if (!email || !password) {
                return res.status(400).json({ msg: "Required field(s) missing. Please try again or register." })
            }

            const user = await User.findOne({ email: email }) 

            if (!user) {
                return res.status(400).json({ msg: "User not found. Please try again." })
            }

            const isMatch = await bcrypt.compare(password, user.password);

            if (!isMatch) {
                return res.status(400).json({ msg: "Password is incorrect. Please try again." })
            }

            if (!user.confirmed)
            return res.json({ token: null, user: { confirmed: user.confirmed } });

            const token = jwt.sign({ id: user._id}, process.env.JWT_SECRET, {
                expiresIn: "24h", 
            });

            res.json({
                token, 
                user: { 
                    id: user._id, 
                    email: user.email,
                    firstName: user.firstName, 
                    lastName: user.lastName, 
                    organization: user.organization,
                    phone: user.phone,
                    street: user.street,
                    city: user.city,
                    state: user.state,
                    country: user.country,
                    optIn: user.optIn,
                    confirmed: user.confirmed,
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
                firstName: user.firstName, 
                lastName: user.lastName, 
                organization: user.organization,
                phone: user.phone,
                street: user.street,
                city: user.city,
                state: user.state,
                country: user.country,
                optIn: user.optIn,
                confirmed: user.confirmed,
                quoteNum: user.quoteNum,
            });

        } catch (error) {
            res.send(error.response)
        }
    },

    // Update Basic User Data (not for opt-in/out or password)
    updateBasicUser: async (req, res) => {
        try {
            const userToUpdate = await User.updateOne(
                { _id: req.params.id },
                {
                    $set: req.body
                }
            );
            res.json(userToUpdate)
        } catch (error) {
            res.send(error.response)
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

    // Update User Password
    updatePass: async (req, res) => {
        console.log('hit', req.body.pass)
        console.log('second', req.body.password)
        
        // try {
        //     // Check that existing password is correct
        //     if (oldPass != password) {
        //         return res.status(400).json({ msg: "Required field(s) missing. Please try again or register." })
        //     }
        //     // Check that new password meets length criteria
        //     if (passwordCheck.length < 8) {
        //         return res.status(400).json({ msg: "Password must be at least 8 characters." })
        //     }
        //     // Check that new password is correctly input
        //     if (password !== passwordCheck) {
        //         return res.status(400).json({ msg: "Passwords do not match." })
        //     }
        // } catch (error) {
        //     res.send(error.response)
        // }
    },

            // try {

            // const existingUser = await User.findOne({ email: req.body.email });
            // console.log('existing user from update: ', existingUser)

            // if (existingUser.email) {
            //     console.log('fail update email')
            //     return res.status(400).json({ msg: "Email is already registered." })
            // }

            // const newPhone = req.body.phone;
            // console.log('new phone from update: ', newPhone)

            // const standardPhone = /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g;

            // if (newPhone.value.match(standardPhone)) {
            //     console.log('ran')
            //     return res.status(400).json({ msg: "Phone is incorrect. Please try again." })
            // }

        //     const userToUpdate = await User.updateOne(
        //         { _id: req.params.id },
        //         {
        //             $set: req.body
        //         }
        //     );
        //     res.json(userToUpdate)
        // } catch (error) {
        //     res.send(error.response)
        // }

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
