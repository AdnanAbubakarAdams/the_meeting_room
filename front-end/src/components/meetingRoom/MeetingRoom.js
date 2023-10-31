import React, { useState, useEffect } from "react";
import axios from "axios";

import Rooms from "./Rooms";
import Loading from "../loading/Loading";

// STYLE SHEET CSS
import "./MeetingRoom.scss";

// IMPORTING API
const API = process.env.REACT_APP_API_URL;

const MeetingRoom = () => {
  const [meetingRoom, setMeetingRoom] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${API}/meeting-rooms`)
      .then((response) => {
        setTimeout(() => {
          setMeetingRoom(response.data);
          setLoading(false);
        }, 1000);
      })
      .catch((c) => console.warn("catch", c));
  }, []);

  return (
    <div className="meetingRoom">
      <div className="meetingRoom__heading">Find available rooms:</div>
      <form>
        <br />
        <label htmlFor="start">
        Start:
        <input
          id="start"
          value=""
          type="text"
          onChange=""
          placeholder="2/14/2022 11:00 AM"
          required
        />
        </label>
        <br />
        <label htmlFor="end">End:</label>
        <br />
        <input
          id="end"
          value=''
          type="datetime-local"
          onChange=''
          placeholder="2/14/2022 11:00 AM"
          required
        />
        <label htmlFor="floor">Floor:</label>
        <br />
        <input
          id="floor"
          value=''
          type="text"
          onChange=''
          placeholder="22"
          required
        />
        <label htmlFor="capacity">Capacity:</label>
        <br />
        <input
          id="capacity"
          value=''
          type="number"
          onChange=''
          placeholder="http://"
          required
        />
        <button>Find</button>
      </form>
      <ul className="meetingRoom-list">
        {meetingRoom.map((room) => {
          return (
            <li>
              <Rooms key={room.id} room={room} />
            </li>
          );
        })}
      </ul>
      <Loading loading={loading} />
    </div>
  );
};

export default MeetingRoom;
