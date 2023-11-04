import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components
import NavBar from './components/navBar/NavBar';
import Home from './pages/Home';
import MeetingRoom from './components/meetingRoom/MeetingRoom';
import RoomDetails from './components/meetingRoomDetails/RoomDetails';
import Booking from './components/booking/Booking';
import BookingDetails from './components/bookingDetails/BookingDetails';
import NewRoom from './components/newRoomForms/NewRoom';



function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/meeting-rooms' element={<MeetingRoom/>} />
          <Route path='/meeting-rooms/:id' element={<RoomDetails />} />
          <Route path='/bookings' element={<Booking />} />
          <Route path='/bookings/:id' element={<BookingDetails/>} />
          <Route path='/rooms/new' element={<NewRoom/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
