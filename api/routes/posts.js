// Import required modules
const router = require("express").Router(); // Express router for handling routes
const User = require("../models/User"); // User model for interacting with user data
const Post = require("../models/Post"); // Post model for interacting with post data

// CREATE POST endpoint
router.post("/", async (req, res) => {
  // Create a new Post instance with the request body
  const newPost = new Post(req.body);
  try {
    // Save the new post to the database
    const savedPost = await newPost.save();
    // Respond with the newly created post
    res.status(200).json(savedPost);
  } catch (err) {
    // Handle any errors that occur during post creation
    res.status(500).json(err);
  }
});

// UPDATE POST endpoint
router.put("/:id", async (req, res) => {
  try {
    // Find the post by its ID
    const post = await Post.findById(req.params.id);
    // Check if the user is authorized to update the post
    if (post.username === req.body.username) {
      try {
        // Update the post with the request body
        const updatedPost = await Post.findByIdAndUpdate(
          req.params.id,
          {
            $set: req.body,
          },
          { new: true }
        );
        // Respond with the updated post
        res.status(200).json(updatedPost);
      } catch (err) {
        // Handle any errors that occur during post update
        res.status(500).json(err);
      }
    } else {
      // Respond with unauthorized error message
      res.status(401).json("You can update only your post!");
    }
  } catch (err) {
    // Handle any errors that occur during post retrieval
    res.status(500).json(err);
  }
});

// DELETE POST endpoint
router.delete("/:id", async (req, res) => {
  try {
    // Find the post by its ID
    const post = await Post.findById(req.params.id);
    // Check if the user is authorized to delete the post
    if (post.username === req.body.username) {
      try {
        // Delete the post
        await post.delete();
        // Respond with success message
        res.status(200).json("Post has been deleted...");
      } catch (err) {
        // Handle any errors that occur during post deletion
        res.status(500).json(err);
      }
    } else {
      // Respond with unauthorized error message
      res.status(401).json("You can delete only your post!");
    }
  } catch (err) {
    // Handle any errors that occur during post retrieval
    res.status(500).json(err);
  }
});

// GET POST endpoint
router.get("/:id", async (req, res) => {
  try {
    // Find the post by its ID
    const post = await Post.findById(req.params.id);
    // Respond with the post
    res.status(200).json(post);
  } catch (err) {
    // Handle any errors that occur during post retrieval
    res.status(500).json(err);
  }
});

// GET ALL POSTS endpoint
router.get("/", async (req, res) => {
  const username = req.query.user;
  const catName = req.query.cat;
  try {
    let posts;
    // Retrieve posts based on query parameters (username or category name)
    if (username) {
      posts = await Post.find({ username });
    } else if (catName) {
      posts = await Post.find({
        categories: {
          $in: [catName],
        },
      });
    } else {
      // If no query parameters provided, retrieve all posts
      posts = await Post.find();
    }
    // Respond with the list of posts
    res.status(200).json(posts);
  } catch (err) {
    // Handle any errors that occur during post retrieval
    res.status(500).json(err);
  }
});

module.exports = router; // Export the router for use in other files
