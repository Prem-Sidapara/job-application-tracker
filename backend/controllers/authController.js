const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

// REGISTER
const registerUser = async (req, res) => {
  console.log("REGISTER HIT");
console.log("REGISTER BODY:", req.body);

  const { name, email, password } = req.body;

  try {
    if (!name || !email || !password) {
      return res.status(400).json({ message: "All fields required" });
    }

    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: "User already exists" });
    }

    const user = new User({
      name,
      email,
      password,
    });

    await user.save(); // 👈 explicitly save

    return res.status(201).json({
      message: "User registered successfully",
      token: generateToken(user._id),
    });
  } catch (error) {
    console.error("REGISTER ERROR:", error);
    return res.status(400).json({ message: error.meassage });
  }
};

// LOGIN
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    if (!email || !password) {
      return res.status(400).json({ message: "All fields required" });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    return res.json({
      token: generateToken(user._id),
    });
  } catch (error) {
    console.error("LOGIN ERROR:", error);
    return res.status(500).json({ message: "Server error" });
  }
};

module.exports = { registerUser, loginUser };
