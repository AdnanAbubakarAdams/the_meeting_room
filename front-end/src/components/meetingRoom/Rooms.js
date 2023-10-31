import React from 'react';

import { SlPeople } from 'react-icons/sl';
import { BsBuilding } from 'react-icons/bs';

const Rooms = ({ room }) => {
  return (
    <>
    
    <div className='rooms-card'>
        <h1>{room.name}</h1>
        <p><SlPeople /> Capacity: {room.capacity}</p>
        <p><BsBuilding/> Floor: {room.floor}</p>
    </div>
    </>
  )
}

export default Rooms;

// SlPeople