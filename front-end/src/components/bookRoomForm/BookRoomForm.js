import React, { useContext, useState } from 'react'
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { format, parseISO } from 'date-fns';


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
    border: 'none', // Remove the border around the form
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


      // const formatDate = (isoDate) => {
      //   const date = new Date(isoDate);
      //   return format(date, 'YYYY-MM-DDTHH:mm');
      // };

      const formatDate = (isoDate) => {
        if (isoDate) {
          const date = parseISO(isoDate); // Parse ISO date
          return format(date, 'yyyy-MM-dd\'T\'HH:mm'); // Format for input field
          // const formattedTime = format(date, 'h:mm a');
          // return `${formatDate} ${formattedTime}`;
        }
        return ''; // Handle empty values if needed
      };
    
    
      // const handleTextChanges = (e) => {
      //   const { id, value } = e.target;
    
      //   if (id === 'start_date' || id === 'end_date') {
      //     const isoDateTime = new Date(value).toISOString();
      //     setBooked({ ...booked, [id]: isoDateTime });
      //   } else {
      //     setBooked({ ...booked, [id]: value });
      //   }
      // };

      // const handleTextChanges = (e) => {
      //   const { id, value } = e.target;
      
      //   if (id === 'start_date' || id === 'end_date') {
      //     // Ensure that the input value is in the correct format (YYYY-MM-DDTHH:mm)
      //     const isoDateTime = value.replace(' ', 'T');
      //     setBooked({ ...booked, [id]: isoDateTime });
      //   } else {
      //     setBooked({ ...booked, [id]: value });
      //   }
      // };
      


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
                          value={formatDate(booked.start_date)}
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
                          value={formatDate(booked.end_date)}
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