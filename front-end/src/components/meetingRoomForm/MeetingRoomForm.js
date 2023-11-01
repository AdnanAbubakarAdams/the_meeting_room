import React, { useContext, useState } from 'react'
import { useNavigate } from "react-router-dom";
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
    return (
        <Container maxWidth="xs" className="centered-form">
        <Stack  justify="center" spacing={4} sx={{ width: '380px'}}>
          <Card className="meetingRoom-form">
            <CardContent>
              <h3>Find Available Rooms: </h3>
              <form >
                <Stack container spacing={2}>
                  <Stack>
                    <TextField
                    //   label="StartDate"
                      type="datetime-local"
                      placeholder="2/14/2022 11:00 AM"
                      variant="outlined"
                      id="start"
                      value=""
                      onChange=""
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
                      id="end"
                      helperText="Request Date"
                      value=""
                      onChange=""
                      fullWidth
                      required
                    />
                  </Stack>
                  <Stack>
                    <TextField
                      label="Floor"
                      placeholder="22"
                      variant="outlined"
                      id="description"
                      value=""
                      onChange=""
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
                      value=""
                      onChange=""
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