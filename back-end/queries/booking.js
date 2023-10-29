const db = require("../db/dbConfig.js");

// QUERY TO GET ALL BOOKINGS
const getAllBookings = async () => {
    try {
        console.log("listing all bookings");
        const allBookings = await db.any(
            "SELECT * FROM booking"
        );
        return allBookings;
    } catch (error) {
        return error;
    }
};

// QUERY TO RETRIEVE A SINGLE BOOKING
const getBooking = async (id) => {
    try {
        const singleBooking = await db.one("SELECT * FROM booking WHERE id=$1", id);
        return singleBooking;
    } catch (error) {
        return error;
    }
};




// EXPORTING BOOKING QUERIES TO BOOKING CONTROLLER
module.exports = {
    getAllBookings,
    getBooking
};