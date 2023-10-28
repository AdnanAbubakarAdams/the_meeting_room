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




// EXPORTING BOOKING QUERIES TO BOOKING CONTROLLER
module.exports = {
    getAllBookings
};