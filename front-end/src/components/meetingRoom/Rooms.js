import React from 'react';
import { Link } from 'react-router-dom';

import { SlPeople } from 'react-icons/sl';
import { BsBuilding } from 'react-icons/bs';

const Rooms = ({ room }) => {
  return (
    <>
    
    <div className='rooms-card'>
      <Link to={`/meeting-rooms/${room.id}`} >
        <h1>{room.name}</h1>
        <p><SlPeople /> Capacity: {room.capacity}</p>
        <p><BsBuilding/> Floor: {room.floor}</p>
        </Link>
    </div>
    </>
  )
}

export default Rooms;

// SlPeople