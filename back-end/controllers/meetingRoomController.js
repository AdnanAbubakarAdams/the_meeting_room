// CONFIGURATIONS FOR MEETING ROOMS
const express = require("express");
const rooms = express.Router();
// const bookingController = require("./bookingController.js");


// IMPORTING QUERIES
const {
    getAllMeetingRooms,
    getMeetingRoom,
    createAMeetingRoom,
    getBookingForSpecificRoom,
    isRoomAvailableForBooking
} = require("../queries/meetingRoom.js");


// rooms.use("/:roomId/bookings", bookingController);

// BUILDING ROUTES

// Search for available rooms
rooms.get("/available", async (req, res) => {
    // const {id} = req.params;
    try {
        const roomAvailableForBooking = await isRoomAvailableForBooking(req.body);
        if (roomAvailableForBooking) {
            res.json(roomAvailableForBooking);
        } else {
            res.status(400).json({ error: 'The meeting room is not available for the set time!' })
            return;
        }
        
    } catch (error) {
        res.status(400).json({ error: 'An error occured while checking for rooms available!' })
    }
})
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


// get all the bookings for a specific room
rooms.get("/:id/bookings", async (req, res) => {
    const { id } = req.params
    try {
        const specificRoom = await getBookingForSpecificRoom(id);
        if (specificRoom) {
            res.json(specificRoom);
        }
    } catch (error) {
        res.status(400).json({ error: "Error occured"})
    }
})

// EXPORTING MEETING ROOMS TO APP
module.exports = rooms;