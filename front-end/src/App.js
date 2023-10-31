import './App.css';
// import axios from 'axios';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components
import NavBar from './components/navBar/NavBar';
import Home from './pages/Home';
import MeetingRoom from './components/meetingRoom/MeetingRoom';
import RoomDetails from './components/meetingRoomDetails/RoomDetails';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/meeting-rooms' element={<MeetingRoom/>} />
          <Route path='/meeting-rooms/:id' element={<RoomDetails />} />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
