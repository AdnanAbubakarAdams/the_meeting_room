import React, { useState, useEffect }from 'react';
import axios from "axios";
import { Link, useParams, useNavigate } from "react-router-dom";

import { SlPeople } from 'react-icons/sl';
import { BsBuilding } from 'react-icons/bs';

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
    <div className='details'>
        <div className='details__info'>
        <h2>{room.name}</h2>
        <p> <SlPeople/> Capacity: {room.capacity}</p>
        <p> <BsBuilding/> Floor: {room.floor}</p>
        </div>
        <div className='details__seperator'></div>
    </div>
  )
}

export default RoomDetails;