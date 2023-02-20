// Import required modules
const express = require("express");
const dotenv = require("dotenv").config();
const connectDB = require("./config/db");
const taskRoutes = require("./routes/taskRoutes");
const homeRoutes = require("./routes/homeRoutes");
const app = express();

// Connect to the database
connectDB();

// Set up middleware
app.use(express.json());

// TODO: Decide if this is needed or not
//app.use(express.urlencoded({ extended: false })); 

// Register routes
app.use(taskRoutes);
app.use(homeRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});