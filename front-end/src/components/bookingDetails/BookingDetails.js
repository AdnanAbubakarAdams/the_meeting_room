import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams, useNavigate } from "react-router-dom";

import { RxStopwatch } from "react-icons/rx";
import { Button } from "@mui/material";

import './BookingDetails.css'

const BookingDetails = () => {
  const buttonStyle = {
    backgroundColor: "black",
    color: "#fff",
  };

  const [booked, setBooked] = useState([]);
  let { id } = useParams();
  let navigate = useNavigate();

  const API = process.env.REACT_APP_API_URL;

  // Fetching a room detail
  useEffect(() => {
    axios.get(`${API}/bookings/${id}`).then((response) => {
      setBooked(response.data);
    });
  }, [id, navigate, API]);

  const handleCancel = () => {
    axios
      .delete(`${API}/bookings/${id}`)
      .then(() => navigate("/bookings"))
      .catch((err) => console.error(err));
  };

  return (
    <div className="details-card">
      <h1>{booked.meeting_name}</h1>
      <h3>
        <RxStopwatch /> {booked.start_date}
      </h3>
      <h3>
        <RxStopwatch /> {booked.end_date}
      </h3>
      <div>
        <Button
        onClick={handleCancel}
          style={buttonStyle}
          sx={{ width: "120px" }}
          type="submit"
          variant="contained"
          fullWidth
        >
          Cancel
        </Button>
      </div>
    </div>
  );
};

export default BookingDetails;
