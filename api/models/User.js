// Importing Mongoose library
const mongoose = require("mongoose");

// Defining the schema for a user
const UserSchema = new mongoose.Schema(
  {
    // Username of the user
    username: {
      type: String,
      required: true, // Username is required
      unique: true, // Username should be unique
    },
    // Email of the user
    email: {
      type: String,
      required: true, // Email is required
      unique: true, // Email should be unique
    },
    // Password of the user
    password: {
      type: String,
      required: true, // Password is required
    },
    // URL of the user's profile picture
    profilePic: {
      type: String,
      default: "", // Default profile picture is empty
    },
  },
  { timestamps: true } // Adding timestamps for createdAt and updatedAt
);

// Exporting the model for the user schema
module.exports = mongoose.model("User", UserSchema);
