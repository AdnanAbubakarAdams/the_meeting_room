// MEETING ROOM ROUTES

// DEPENDENCIES
const cors = require("cors");
const express = require("express");

// CONFIGURATION
const app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.json());


// ROUTES
app.get("/", (req, res) => {
    res.send("Welcome to Adnan's meetingRoom Database!");
  });
  
  // THE CATCH ALL ROUTE // 404 PAGE
  app.get("*", (req, res) => {
    res.status(404).send("Error: Page not found please try again!");
  });
  


// EXPORTS
module.exports = app;
