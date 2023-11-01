import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";


const NewRoom = () => {

    const buttonStyle = {
        backgroundColor: 'black', 
        color: '#fff',
      };

      const createAmeetingRoom = (meeting) => {
        debugger;
        axios
          .post(`${API}/meeting-rooms`,meeting)
          .then(
            () => {
              navigate("/meeting-rooms");
            },
            (error) => console.error(error)
          )
          .catch((c) => console.warn("catch", c));
      };

      const [meeting, setMeeting] = useState({
        name: "",
        capacity: "", 
        floor: ""
      })

      const handleTextChanges = (e) => {
        setMeeting({ ...meeting, [e.target.id]: e.target.value })
      }

    //   submit method
      const handleSubmit = (e) => {
        e.preventDefault();
        createAmeetingRoom(meeting);
      };


  return (
    <div>
         <Container maxWidth="xs" className="centered-form">
        <Stack  justify="center" spacing={4} sx={{ width: '380px'}}>
          <Card className="meetingRoom-form">
            <CardContent>
              <h3>Create A Room: </h3>
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
                      label="Room Name"
                      placeholder="Boardroom 1"
                    //   type="datetime-local"
                      variant="outlined"
                      id="end"
                    //   helperText="Request Date"
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
                        Sumbit
                      </Button>
                    </Stack>
                </Stack>
              </form>
            </CardContent>
          </Card>
        </Stack>
       </Container>
    </div>
  )
}

export default NewRoom;