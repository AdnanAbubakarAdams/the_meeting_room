const db = require("../db/dbConfig.js");

// QUERY TO GET ALL MEETING ROOMS
const getAllMeetingRooms = async () => {
    try {
        console.log("listing all meeting rooms");
        const allRooms = await db.any(
            "SELECT * FROM meeting_room"
        );
        return allRooms;
    } catch (error) {
        return error;
    }
};

// QUERY TO GET A SINGLE MEETING ROOM BY ID
const getMeetingRoom = async (id) => {
    try {
        const singleRoom = await db.one("SELECT * FROM meeting_room WHERE id=$1", id);
        return singleRoom;
    } catch (error) {
        return error;
    }
};

// QUERY TO CREATE A MEETING ROOM
const createAMeetingRoom = async (room) => {
    const { name, capacity, floor } = room;
    try {
        const newMeetingRoom = await db.one(
            "INSERT INTO meeting_room (name, capacity, floor) VALUES ($1, $2, $3) RETURNING *",
            [name, capacity, floor]
        );
        return newMeetingRoom
    } catch (error) {
        return error;
    }
};

// QUERY TO GET THE BOOKING FOR A SPECIFIC ROOM
const getBookingForSpecificRoom = async (id) => {
    try {
        const specificRoom = await db.manyOrNone(
            "SELECT * FROM booking WHERE room_id = $1 AND start_date > NOW()", id
        )
        return specificRoom;
    } catch (error) {
        return error;
    }
}

// available
const isRoomAvailableForBooking = async (booking) => {
    const { room_id, start_date, end_date } = booking;
    try {
        const roomAvailabilty = await db.any(
            "SELECT * FROM booking WHERE room_id = $1 AND ($2, $3) OVERLAPS (start_date, end_date)",
            [room_id, start_date, end_date]
        );
        return roomAvailabilty;
    } catch (error) {
        return error;
    }
}

//  const isRoomAvailableForBooking = async () => {
//     try {
//         const availableRooms = await db.any(
//             "SELECT meeting_room.id, meeting_room.name, meeting_room.capacity, meeting_room.floor FROM meeting_room LEFT JOIN booking ON meeting_room.id = booking.room_id WHERE booking.id IS NULL OR NOT (booking.start_date <= $1 AND booking.end_date >= $2) AND meeting_room.capacity >= $3  AND meeting_room.floor = $4 GROUP BY meeting_room.id"
//         )
//         return availableRooms;
//     } catch (error) {
//         return error;
//     }
//  }

// SELECT *
// FROM events
// WHERE event_time BETWEEN ? AND ?;



// EXPORTING MEETING ROOM QUERIES TO MEETING ROOM CONTROLLER
module.exports = {
    getAllMeetingRooms,
    getMeetingRoom,
    createAMeetingRoom, 
    getBookingForSpecificRoom,
    isRoomAvailableForBooking
};