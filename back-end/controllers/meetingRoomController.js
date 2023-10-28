// CONFIGURATIONS FOR MEETING ROOMS
const express = require("express");
const rooms = express.Router();

// IMPORTING QUERIES
const {
    getAllMeetingRooms,
    getMeetingRoom,
    createAMeetingRoom
} = require("../queries/meetingRoom.js");

// BUILDING ROUTES

// ALL MEETING ROOMS ROUTE // INDEX
rooms.get("/", async (req, res) => {
    const allMeetingRooms = await getAllMeetingRooms();
    if (allMeetingRooms[0]) {
        res.status(200).json(allMeetingRooms);
    } else {
        res.status(500).json({ error: "An error while retrieving meeting rooms. Please try again!" })
    }
});

// SINGLE MEETING ROOM // SHOW 
rooms.get("/:id", async (req, res) => {
    const { id } = req.params;
    const aMeetingRoom = await getMeetingRoom(id);
    if (aMeetingRoom) {
        res.json(aMeetingRoom);
    } else {
        res.status(404).json({ error: "Error in retrieving this room try again!" });
    }
});

// CREATE MEETING ROOM
rooms.post("/", async (req, res) => {
    try {
        const meetingRoom = await createAMeetingRoom(req.body);
        res.json(meetingRoom);
    } catch (error) {
        res.status(400).json({ error: "Error occured while creating a meeting room" });
    }
});





// EXPORTING MEETING ROOMS TO APP
module.exports = rooms;