// CONFIGURATIONS FOR BOOKINGS
const express = require("express");
const bookings = express.Router();

// IMPORTING BOOKINGS QUERIES
const {
    getAllBookings
} = require("../queries/booking.js");

// BUILDING ROUTES

// ALL BOOKINGS ROUTE // INDEX
bookings.get("/", async (req, res) => {
    const allBookings = await getAllBookings();
    if (allBookings[0]) {
        res.status(200).json(allBookings);
    } else {
        res.status(500).json({ error: "An Error occured while retrieving all bookings!" })
    }
})




// EXPORTING BOOKINGS TO APP
module.exports = bookings;