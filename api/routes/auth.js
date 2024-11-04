// Import required modules
const router = require("express").Router(); // Express router for handling routes
const User = require("../models/User"); // User model for interacting with user data
const bcrypt = require("bcrypt"); // Library for password hashing

// REGISTER endpoint
router.post("/register", async (req, res) => {
  try {
    // Generate a salt for password hashing
    const salt = await bcrypt.genSalt(10);
    // Hash the user's password using the generated salt
    const hashedPass = await bcrypt.hash(req.body.password, salt);
    // Create a new User instance with hashed password
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPass,
    });

    // Save the new user to the database
    const user = await newUser.save();
    // Respond with the newly created user
    res.status(200).json(user);
  } catch (err) {
    // Handle any errors that occur during registration
    res.status(500).json(err);
  }
});

// LOGIN endpoint
router.post("/login", async (req, res) => {
  try {
    // Find the user by their username
    const user = await User.findOne({ username: req.body.username });
    // If user doesn't exist, respond with error
    !user && res.status(400).json("Wrong credentials!");

    // Compare the provided password with the hashed password stored in the database
    const validated = await bcrypt.compare(req.body.password, user.password);
    // If passwords don't match, respond with error
    !validated && res.status(400).json("Wrong credentials!");

    // If passwords match, remove password from user data and respond with user information
    const { password, ...others } = user._doc;
    res.status(200).json(others);
  } catch (err) {
    // Handle any errors that occur during login
    res.status(500).json(err);
  }
});

module.exports = router; // Export the router for use in other files
