import React, { useState } from 'react'
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";


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

const MeetingRoomForm = () => {

  const buttonStyle = {
    backgroundColor: 'black', 
    color: '#fff',
  };
  
  let navigate = useNavigate(); 
  let { id } = useParams()

      const findAMeetingRoom = (findingRoom) => {
        debugger;
        axios
          .post(`${API}/meeting-rooms/${id}/bookings`,findingRoom)
          .then(
            () => {
              navigate("/meeting-rooms");
            },
            (error) => console.error(error)
          )
          .catch((c) => console.warn("catch", c));
      };

      const [find, setFind] = useState({
        start_date: "", 
        end_date: "",
        floor: "", 
        capacity: ""
      });


      const handleTextChanges = (e) => {
        setFind({ ...find, [e.target.id]: e.target.value })
      }

    //   submit method
    const handleSubmit = (e) => {
      e.preventDefault();
      findAMeetingRoom(find);
    };


    return (
        <Container maxWidth="xs" className="centered-form">
        <Stack  justify="center" spacing={4} sx={{ width: '380px'}}>
          <Card className="meetingRoom-form">
            <CardContent>
              <h3>Find Available Rooms: </h3>
              <form onSubmit={handleSubmit}>
                <Stack container spacing={2}>
                  <Stack>
                    <TextField
                    //   label="StartDate"
                      type="datetime-local"
                      placeholder="2/14/2022 11:00 AM"
                      variant="outlined"
                      id="start_date"
                      value={find.start_date}
                      onChange={handleTextChanges}
                      fullWidth
                      required
                    />
                  </Stack>
                  <Stack >
                    <TextField
                    //   label="EndDate"
                      placeholder="2/14/2022 11:00 AM"
                      type="datetime-local"
                      variant="outlined"
                      id="end_date"
                      helperText="Request Date"
                      value={find.end_date}
                      onChange={handleTextChanges}
                      fullWidth
                      required
                    />
                  </Stack>
                  <Stack>
                    <TextField
                      label="Floor"
                      placeholder="22"
                      variant="outlined"
                      id="floor"
                      value={find.floor}
                      onChange={handleTextChanges}
                      fullWidth
                      required
                    />
                  </Stack>
                  <Stack>
                    <TextField
                      label="Capacity"
                      placeholder="4"
                      variant="outlined"
                      id="capacity"
                      value={find.capacity}
                      onChange={handleTextChanges}
                      fullWidth
                      required
                    />
                  </Stack>
                  <Stack>
                      <Button  style={buttonStyle} className="new-button" type="submit" variant="contained" fullWidth>
                        Find
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


export default MeetingRoomForm