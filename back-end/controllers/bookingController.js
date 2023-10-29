// CONFIGURATIONS FOR BOOKINGS
const express = require("express");
const bookings = express.Router();

// IMPORTING BOOKINGS QUERIES
const {
    getAllBookings,
    getBooking
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
});

// SINGLE BOOKING // SHOW
bookings.get("/:id", async (req, res) => {
    const { id } = req.params;
    const booking = await getBooking(id);
    if (booking) {
        res.json(booking);
    } else {
        res.status(404).json({ error: "An error occured while retrieving booking!" })
    }
});






// EXPORTING BOOKINGS TO APP
module.exports = bookings;