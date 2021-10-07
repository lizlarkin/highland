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
                optIn
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
                    optIn
                });

                // start confirmation code here
                const confirmationToken = new Confirm({
                    token: crypto.randomBytes(15).toString("hex"),
                    userId: newUser._id,
                });

                // console.log(confirmationToken);

                const transporter = nodemailer.createTransport({
                    service: "Outlook365",
                    auth: {
                        user: "lizlarkin@highlandtechnology.com",
                        pass: process.env.EPASS,
                    },
                });

                const mailOptions = {
                    from: "lizlarkin@highlandtechnology.com",
                    to: newUser.email,
                    subject: "Thank you for registering with Highland Technology.",
                    text: `Please click link to confirm account: http://localhost:3000/confirm_token/${confirmationToken.token}`,
                }

                transporter.sendMail(mailOptions, (error, info) => {
                    if (error) {
                        console.log(error);
                    } else {
                        console.log(`Email was sent with: http://localhost:3000/confirm_token/${confirmationToken.token}`);
                    }
                });

                const savedToken = await confirmationToken.save();
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
                res.status(400).json({ msg: "Missing required field(s)." })
            }

            const user = await User.findOne({ email: email }) 

            if (!user) {
                res.status(400).json({ msg: "User not found." })
            }

            const isMatch = await bcrypt.compare(password, user.password);

            if (!isMatch) {
                res.status(400).json({ msg: "Password is incorrect." })
            }

            const token = jwt.sign({ id: user._id}, process.env.JWT_SECRET, {
                expiresIn: "24h", 
            });

            res.json({
                token, 
                user: { 
                    id: user._id, 
                    firstName: user.firstName, 
                    lastName: user.lastName, 
                    organization: user.organization,
                    phone: user.phone,
                    email: user.email,
                    confirmed: user.confirmed},
            });

        } catch (error) {
            res.status(500).json({ msg: "error here 2!",  error })
        }
    },

    getUser: async (req, res) => {
        try {
            const user = await User.findById(req.user);

            res.json({
                firstName: user.firstName,
                lastName: user.lastName,
                id: user._id,
                organization: user.organization,
                email: user.email,
                phone: user.phone,
            });

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
    
    // addCartCount: async (req,res) => {
    //     try {

    //     } catch (error) {
            
    //     }
    // }
};
