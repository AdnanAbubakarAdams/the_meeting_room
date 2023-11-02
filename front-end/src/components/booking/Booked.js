import React from 'react';
import { Link } from 'react-router-dom';
import {RxStopwatch} from 'react-icons/rx'




// css
import './Booking.scss';

const Booked = ({ book }) => {

  const formatDate = (d) => {
    return new Date(d).toLocaleString();
  }

  return (
    <>
    <div className='booked-card'>
      <Link to={`/bookings/${book.id}`} >
        <h1>{book.meeting_name}</h1>
        <p><RxStopwatch/> {formatDate(book.start_date)}</p>
        <p><RxStopwatch/> {formatDate(book.end_date)}</p>
        </Link>
    </div>
    </>
  )
}

export default Booked;