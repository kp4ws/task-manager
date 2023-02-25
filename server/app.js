// Import required modules
const express = require("express");
const dotenv = require("dotenv").config();
const path = require("path");
const connectDB = require("./config/db");
const taskRoutes = require("./routes/taskRoutes");
const consoleMiddleware = require("./middleware/consoleMiddleware");
const app = express();

// Connect to the database
connectDB();

// Set up middleware
app.use(express.json());
// TODO: Decide if this is needed or not
app.use(express.urlencoded({ extended: false }));
app.use(consoleMiddleware); 

// Register routes
app.use(taskRoutes);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../../client/build", "index.html"));
});

// Start the server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});