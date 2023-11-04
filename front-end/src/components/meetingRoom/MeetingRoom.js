import React, { useState, useEffect } from "react";
import axios from "axios";

import Rooms from "./Rooms";
import Loading from "../loading/Loading";
import MeetingRoomForm from "../meetingRoomForm/MeetingRoomForm";

// STYLE SHEET CSS
import "./MeetingRoom.scss";

// IMPORTING API
const API = process.env.REACT_APP_API_URL;

const MeetingRoom = () => {
  const [meetingRoom, setMeetingRoom] = useState([]);
  const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${API}/meeting-rooms`)
      .then((response) => {
        console.log(response.data)
        setTimeout(() => {
          setMeetingRoom(response.data);
          setLoading(false);
        }, 1000);
      })
      .catch((c) => console.warn("catch", c));
  }, []);

  return (
    <div className="meetingRoom">
      <MeetingRoomForm />
      {/* <div className='seperator'></div> */}
      <hr width="80%" color="black" size="50px" ></hr>
      <ul className="meetingRoom-list">
        {meetingRoom.map((room) => {
          return (
            <li key={room.id}>
              <Rooms  room={room} />
            </li>
          );
        })}
      </ul>
      <Loading loading={loading} />
    </div>
  );
};

export default MeetingRoom;
