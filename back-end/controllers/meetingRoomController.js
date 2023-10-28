// CONFIGURATIONS FOR MEETING ROOMS
const express = require("express");
const rooms = express.Router();

// IMPORTING QUERIES
const {
    getAllMeetingRooms
} = require("../queries/meetingRoom.js");

// BUILDING ROUTES

// ALL MEETING ROOMS ROUTE
rooms.get("/", async (req, res) => {
    const allMeetingRooms = await getAllMeetingRooms();
    if (allMeetingRooms[0]) {
        res.status(200).json(allMeetingRooms);
    } else {
        res.status(500).json({ error: "An error while retrieving meeting rooms. Please try again!" })
    }
})



// EXPORTING MEETING ROOMS TO APP
module.exports = rooms;