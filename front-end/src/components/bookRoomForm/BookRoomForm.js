import React, { useContext, useState } from 'react'
import { useNavigate } from "react-router-dom";
import axios from "axios";
// import { format, parseISO } from 'date-fns';


// MATERIAL UI
import {
//   Grid,
  Container,
  Stack,
  TextField,
  Button,
  Card,
  CardContent,
} from "@mui/material";

// IMPORTING API
const API = process.env.REACT_APP_API_URL;

const BookRoomForm = () => {

  
  const buttonStyle = {
    backgroundColor: 'black', 
    color: '#fff',
  };
  const containerStyle = {
    border: 'none', 
    padding: '15px'
  };

  
  
      let navigate = useNavigate(); 

      const bookARoom = (newBooking) => {
        debugger;
        axios
          .post(`${API}/bookings`,newBooking)
          .then(
            () => {
              navigate("/bookings");
            },
            (error) => console.error(error)
          )
          .catch((c) => console.warn("catch", c));
      };

      const [booked, setBooked] = useState({
        meeting_name: "",
        start_date: "", 
        end_date: "",
        attendees: ""
      });

      const handleTextChanges = (e) => {
        setBooked({ ...booked, [e.target.id]: e.target.value })
      }

    //   submit method
      const handleSubmit = (e) => {
        e.preventDefault();
        bookARoom(booked);
      };


      

        return (
            <Container maxWidth="xs" style={containerStyle} className="bookroom-centered-form">
            <Stack  justify="center" spacing={4} sx={{ width: '400px'}}>
              <Card className="meetingRoom-form">
                <CardContent>
                  <h3>Book Room: </h3>
                  <form onSubmit={handleSubmit}>
                    <Stack container spacing={2}>
                      <Stack>
                        <TextField
                          label="Meeting Name"
                          placeholder="Blackstone"
                          variant="outlined"
                          id="meeting_name"
                          value={booked.meeting_name}
                          onChange={handleTextChanges}
                          fullWidth
                          required
                        />
                      </Stack>
                      <Stack >
                        <TextField
                        //   label=
                          placeholder="2/14/2022 11:00 AM"
                          type="datetime-local"
                          variant="outlined"
                          id="start_date"
                          helperText="Start-Date"
                          value={booked.start_date}
                          onChange={handleTextChanges}
                          fullWidth
                          required
                        />
                      </Stack>
                      <Stack>
                        <TextField
                        //   label="Floor"
                        type='datetime-local'
                          placeholder="22"
                          helperText="End-Date"
                          variant="outlined"
                          id="end_date"
                          value={booked.end_date}
                          onChange={handleTextChanges}
                          fullWidth
                          required
                        />
                      </Stack>
                      <Stack>
                        <TextField
                          label="Attendees"
                          placeholder="adams@blackstone.com"
                          variant="outlined"
                          id="attendees"
                          value={booked.attendees}
                          onChange={handleTextChanges}
                          fullWidth
                          required
                        />
                      </Stack>
                      <Stack>
                          <Button  style={buttonStyle} className="new-button" type="submit" variant="contained" fullWidth>
                            Submit
                          </Button>
                        </Stack>
                    </Stack>
                  </form>
                </CardContent>
              </Card>
            </Stack>
           </Container>
          );
}
export default BookRoomForm;