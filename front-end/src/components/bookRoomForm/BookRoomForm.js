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

const BookRoomForm = () => {
    const buttonStyle = {
        backgroundColor: 'black', 
        color: '#fff',
      };
      const containerStyle = {
        border: 'none', // Remove the border around the form
        padding: '15px'
      };
        return (
            <Container maxWidth="xs" style={containerStyle} className="bookroom-centered-form">
            <Stack  justify="center" spacing={4} sx={{ width: '400px'}}>
              <Card className="meetingRoom-form">
                <CardContent>
                  <h3>Book Room: </h3>
                  <form onSubmit="">
                    <Stack container spacing={2}>
                      <Stack>
                        <TextField
                          label="Meeting Name"
                        //   type="datetime-local"
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
                        //   label=
                          placeholder="2/14/2022 11:00 AM"
                          type="datetime-local"
                          variant="outlined"
                          id="start"
                          helperText="Start-Date"
                          value=""
                          onChange=""
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
                          id="end"
                          value=""
                          onChange=""
                          fullWidth
                          required
                        />
                      </Stack>
                      <Stack>
                        <TextField
                          label="Attendees"
                          placeholder="adams@blackstone.com"
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