// Import required modules
const router = require("express").Router(); // Express router for handling routes
const User = require("../models/User"); // User model for interacting with user data
const Post = require("../models/Post"); // Post model for interacting with post data
const bcrypt = require("bcrypt"); // Library for password hashing

// UPDATE endpoint
router.put("/:id", async (req, res) => {
  // Check if the user ID in the request body matches the ID in the route parameters
  if (req.body.userId === req.params.id) {
    // If the request body contains a new password, hash it
    if (req.body.password) {
      const salt = await bcrypt.genSalt(10);
      req.body.password = await bcrypt.hash(req.body.password, salt);
    }
    try {
      // Update the user information in the database
      const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      // Respond with the updated user information
      res.status(200).json(updatedUser);
    } catch (err) {
      // Handle any errors that occur during user update
      res.status(500).json(err);
    }
  } else {
    // Respond with unauthorized error message
    res.status(401).json("You can update only your account!");
  }
});

// DELETE endpoint
router.delete("/:id", async (req, res) => {
  // Check if the user ID in the request body matches the ID in the route parameters
  if (req.body.userId === req.params.id) {
    try {
      // Find the user by ID
      const user = await User.findById(req.params.id);
      try {
        // Delete all posts associated with the user
        await Post.deleteMany({ username: user.username });
        // Delete the user from the database
        await User.findByIdAndDelete(req.params.id);
        // Respond with success message
        res.status(200).json("User has been deleted...");
      } catch (err) {
        // Handle any errors that occur during post deletion
        res.status(500).json(err);
      }
    } catch (err) {
      // Respond with error message if user is not found
      res.status(404).json("User not found!");
    }
  } else {
    // Respond with unauthorized error message
    res.status(401).json("You can delete only your account!");
  }
});

// GET USER endpoint
router.get("/:id", async (req, res) => {
  try {
    // Find the user by ID
    const user = await User.findById(req.params.id);
    // Exclude password from user data
    const { password, ...others } = user._doc;
    // Respond with user information
    res.status(200).json(others);
  } catch (err) {
    // Handle any errors that occur during user retrieval
    res.status(500).json(err);
  }
});

module.exports = router; // Export the router for use in other files
