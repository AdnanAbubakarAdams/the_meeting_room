import React, { useState, useEffect }from 'react';
import axios from "axios";
import { Link, useParams, useNavigate } from "react-router-dom";

import { SlPeople } from 'react-icons/sl';
import { BsBuilding } from 'react-icons/bs';

// components
import BookRoomForm  from '../bookRoomForm/BookRoomForm';
// import Booked from '../booking/Booked';

// CSS 
import "./RoomDetails.css";

const RoomDetails = () => {

    const [room, setRoom] = useState([])
    let { id } = useParams();
    let navigate = useNavigate();

    const API = process.env.REACT_APP_API_URL;

    // Fetching a room detail
    useEffect(() => {
        axios.get(`${API}/meeting-rooms/${id}`)
        .then((response) => {
          setRoom(response.data)
        })
      }, [id, navigate, API])


  return (
    <div>
    <div className='details'>
        <div className='details__info'>
        <h2>{room.name}</h2>
        <p> <SlPeople/> Capacity: {room.capacity}</p>
        <p> <BsBuilding/> Floor: {room.floor}</p>
        </div>
        <div className='details__seperator'></div>
    </div>
    <BookRoomForm />
    <div className='details__seperator'></div>
    {/* <Booked /> */}
    </div>
  )
}

export default RoomDetails;