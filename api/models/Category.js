// Importing Mongoose library
const mongoose = require("mongoose");

// Defining the schema for a category
const CategorySchema = new mongoose.Schema(
  {
    name: {
      type: String, // Name of the category
      required: true, // It is required to have a name for a category
    },
  },
  { timestamps: true } // Adding timestamps for createdAt and updatedAt
);

// Exporting the model for the category schema
module.exports = mongoose.model("Category", CategorySchema);
