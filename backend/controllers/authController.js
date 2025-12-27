const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const registerUser = async (req, res) => {
    try {
        const { name, email , password } = req.body;

        const userExists = await User.findOne({email});
        if(userExists) {
            return res.status(400).json({error: "User already exists."});
        } 

        const hashedpassword = await bcrypt.hash(password, 10);

        const user = await User.create({
            name, email, password: hashedpassword
        });

        res.status(201).json({
            message: "User successfully registered."
        });

    } catch(error) {
        res.status(400).json({error: error.message});

    }
};

const loginUser = async (req, res) => {

    try {

        const {email, password} = req.body;

        const user = await User.findOne({email});
        if (!user) {
            return res.status(400).json({error: "Invalid"});
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({error: "Invalid"});
        }

        const token = jwt.sign(
            { userId: user._id },
            process.env.JWT_SECRET,
            { expiresIn: "1h" }
        );


        res.json({token});


    } catch(error) {
        res.status(400).json({error: error.message});
    }
    
}

module.exports = {
    registerUser, loginUser
}