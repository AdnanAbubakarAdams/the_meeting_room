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

// TEST
// const allBookings = async (room_id) => {
//     try {
//       const allBooked = await db.any(
//         "SELECT * FROM bookings WHERE room_id=$1",
//         room_id
//       );
//       return allBooked;
//     } catch (err) {
//       return err;
//     }
// }

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

// UPDATE A BOOKING
const updateBooking = async (booked, id) => {
    try {
    //   console.log("editing request with the id of " + id);
      const updatedBooking = await db.one(
        "UPDATE booking SET meeting_name=$1, start_date=$2, end_date=$3, attendees=$4, room_id=$5, WHERE id=$6 RETURNING *",
        [
          booked.meeting_name,
          booked.start_date,
          booked.end_date,
          booked.attendees,
          booked.room_id,
          id,
        ]
      );
      return updatedBooking;
    } catch (error) {
      return error;
    }
  };


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
    
    
    
    // QUERY TO RETRIEVE AVAILABLE MEETING ROOM IS AVAILABLE FOR BOOKING
    // const isRoomAvailableForBooking = async (booking) => {
    //     const { room_id, start_date, end_date } = booking;
    //     try {
    //         const roomAvailabilty = await db.any(
    //             "SELECT * FROM booking WHERE room_id = $1 AND ($2, $3) OVERLAPS (start_date, end_date)",
    //             [room_id, start_date, end_date]
    //         );
    //         return roomAvailabilty;
    //     } catch (error) {
    //         return error;
    //     }
    // }



// EXPORTING BOOKING QUERIES TO BOOKING CONTROLLER
module.exports = {
    getAllBookings,
    getBooking,
    createBooking,
    updateBooking,
    cancelBooking,
    // allBookings
    // isRoomAvailableForBooking
    // getASpecificBooking,
   
};

// const meetingRoom = express.Router();
// const bookingsController = require('./bookingsController');
// meetingRoom.use('/:Id/bookings', bookingsController);