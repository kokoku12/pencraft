// Import necessary modules
const express = require("express"); // Import Express framework
const app = express(); // Initialize Express application
const dotenv = require("dotenv"); // Import dotenv for environment variables
const mongoose = require("mongoose"); // Import mongoose for MongoDB connection
const authRoute = require("./routes/auth"); // Import authentication route
const userRoute = require("./routes/users"); // Import user route
const postRoute = require("./routes/posts"); // Import post route
const categoryRoute = require("./routes/categories"); // Import category route
const multer = require("multer"); // Import multer for file uploads
const path = require("path"); // Import path for file paths

dotenv.config(); // Load environment variables from .env file
app.use(express.json()); // Enable JSON parsing in Express
app.use("/images", express.static(path.join(__dirname, "/images"))); // Serve static files from the 'images' directory

// Connect to MongoDB
mongoose
  .connect(
    "mongodb+srv:user:pass@blog.spbwqh8.mongodb.net/", // MongoDB connection string with username and password
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify:true
    }
  )
  .then(console.log("Connected to MongoDB")) // Log successful connection
  .catch((err) => console.log(err)); // Log any errors that occur during connection

// Multer configuration for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images"); // Destination folder for uploaded files
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name); // Set filename to name specified in request body
  },
});

const upload = multer({ storage: storage }); // Initialize multer with storage configuration
app.post("/api/upload", upload.single("file"), (req, res) => { // Handle file uploads
  res.status(200).json("File has been uploaded"); // Respond with success message
});

// Define routes
app.use("/api/auth", authRoute); // Authentication route
app.use("/api/users", userRoute); // User route
app.use("/api/posts", postRoute); // Post route
app.use("/api/categories", categoryRoute); // Category route

// Start server
app.listen("5000", () => { // Start server on port 5000
  console.log("Backend is running."); // Log server startup message
});
