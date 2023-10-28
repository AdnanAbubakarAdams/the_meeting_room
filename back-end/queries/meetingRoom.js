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


// EXPORTING MEETING ROOM QUERIES TO MEETING ROOM CONTROLLER
module.exports = {
    getAllMeetingRooms
};