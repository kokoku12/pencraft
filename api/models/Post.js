// Importing Mongoose library
const mongoose = require("mongoose");

// Defining the schema for a post
const PostSchema = new mongoose.Schema(
  {
    // Title of the post
    title: {
      type: String,
      required: true, // Title is required
      unique: true, // Title should be unique
    },
    // Description of the post
    desc: {
      type: String,
      required: true, // Description is required
    },
    // URL of the post's photo
    photo: {
      type: String,
      required: false, // Photo is not required
    },
    // Username of the post's author
    username: {
      type: String,
      required: true, // Username is required
    },
    // Array of categories the post belongs to
    categories: {
      type: Array,
      required: false, // Categories are not required
    },
  },
  { timestamps: true } // Adding timestamps for createdAt and updatedAt
);

// Exporting the model for the post schema
module.exports = mongoose.model("Post", PostSchema);
