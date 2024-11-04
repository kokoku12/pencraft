// Import required modules
const router = require("express").Router(); // Express router for handling routes
const Category = require("../models/Category"); // Category model for interacting with category data

// POST endpoint to create a new category
router.post("/", async (req, res) => {
  // Create a new Category instance with the request body
  const newCat = new Category(req.body);
  try {
    // Save the new category to the database
    const savedCat = await newCat.save();
    // Respond with the newly created category
    res.status(200).json(savedCat);
  } catch (err) {
    // Handle any errors that occur during category creation
    res.status(500).json(err);
  }
});

// GET endpoint to retrieve all categories
router.get("/", async (req, res) => {
  try {
    // Find all categories in the database
    const cats = await Category.find();
    // Respond with the list of categories
    res.status(200).json(cats);
  } catch (err) {
    // Handle any errors that occur during category retrieval
    res.status(500).json(err);
  }
});

module.exports = router; // Export the router for use in other files
