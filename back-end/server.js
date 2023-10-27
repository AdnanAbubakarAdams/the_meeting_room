// SERVER DEPENDENCIES - MEETING ROOM BOOKING APP
const app = require("./app.js");

// CONFIGURATIONS 
require("dotenv").config();

// PORT 
const PORT = process.env.PORT;

// LISTENING ON ....
app.listen(PORT, () => {
    console.log(`🎧 Listening on port ${PORT} 🎧`)
})