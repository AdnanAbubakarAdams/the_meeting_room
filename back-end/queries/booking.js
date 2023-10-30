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

// QUERY TO CREATE A BOOKING
const createBooking = async (booking) => {
    const { meeting_name, start_date, end_date, attendees, room_id } = booking;
    try {
        const newBooking = await db.one(
            "INSERT INTO booking (meeting_name, start_date, end_date, attendees, room_id) VALUES ($1, $2, $3, $4, $5) RETURNING *",
            [meeting_name, start_date, end_date, attendees, room_id]
        );
        return newBooking;
    } catch (error) {
        return error;
    }
};

// QUERY TO RETRIEVE AVAILABLE MEETING ROOM IS AVAILABLE FOR BOOKING
const isRoomAvailableForBooking = async (booking) => {
    const { room_id, start_date, end_date } = booking;
    try {
        const roomAvailabilty = await db.any(
            "SELECT * FROM booking WHERE room_id = $1 AND NOT ($2 >= end_date OR $3 <= start_date)",
            [room_id, start_date, end_date]
        );
        return roomAvailabilty;
    } catch (error) {
        return error;
    }
}

// CANCEL OR DELETE A BOOKING
const cancelBooking = async (id) => {
    try {
        const deletedBooking = await db.one(
            "DELETE FROM booking WHERE id=$1 RETURNING *", 
            id
        );
        return deletedBooking;
    } catch (error) {
        return error;
    }
}




// EXPORTING BOOKING QUERIES TO BOOKING CONTROLLER
module.exports = {
    getAllBookings,
    getBooking,
    createBooking,
    isRoomAvailableForBooking,
    cancelBooking
};

// const meetingRoom = express.Router();
// const bookingsController = require('./bookingsController');
// meetingRoom.use('/:Id/bookings', bookingsController);