require("dotenv").config();
const User = require("../models/userModel")
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");


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
                user: { id: user._id, firstName: user.firstName, lastName: user.lastName},
            });

        } catch (error) {
            res.status(500).json({ msg: "error here 2!",  error })
        }
    },
};
