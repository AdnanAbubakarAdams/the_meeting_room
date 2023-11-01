import React, { useState, useEffect } from "react";
import axios from "axios";

import Booked from "./Booked";
import Loading from "../loading/Loading";

// style sheet CSS
import "./Booking.scss";

// IMPORTING API
const API = process.env.REACT_APP_API_URL;

const Booking = () => {

  const [booking, setBooking] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${API}/bookings`)
      .then((response) => {
        console.log(response.data)
        setTimeout(() => {
          setBooking(response.data);
          setLoading(false);
        }, 1000);
      })
      .catch((c) => console.warn("catch", c));
  }, []);


  return (
    <div>
      <ul className="booked-list">
        {booking.map((book) => {
          return (
            <li>
              <Booked  key={book.id} book={book} />
            </li>
          );
        })}
      </ul>
      <Loading loading={loading} />
    </div>
  )
}

export default Booking;