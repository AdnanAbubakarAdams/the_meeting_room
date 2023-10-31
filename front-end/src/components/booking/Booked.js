import React from 'react';

const Booked = ({ book }) => {
  return (
    <>
    <div className='booked-card'>
      <Link to={`/bookings/${room.id}`} >
        <h1>{book.meeting_name}</h1>
        <p>{room.name}</p>
        <p>{book.start_date}</p>
        <p>{book.end_date}</p>
        <p><BsBuilding/> Floor: {room.floor}</p>
        </Link>
    </div>
    </>
  )
}

export default Booked;