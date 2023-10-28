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


// EXPORTING MEETING ROOM QUERIES TO MEETING ROOM CONTROLLER
module.exports = {
    getAllMeetingRooms,
    getMeetingRoom,
    createAMeetingRoom
};