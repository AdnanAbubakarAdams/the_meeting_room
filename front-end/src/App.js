import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { UserProvider } from './Providers/UserProviders';

// Components
// import NavBar from './components/navBar/NavBar';
import Home from './pages/Home';
import MeetingRoom from './components/meetingRoom/MeetingRoom';
import RoomDetails from './components/meetingRoomDetails/RoomDetails';
import Booking from './components/booking/Booking';
import BookingDetails from './components/bookingDetails/BookingDetails';
import NewRoom from './components/newRoomForms/NewRoom';

import PrivateRoute from './components/utils/PrivateRoute';
import { AuthProvider } from './components/utils/AuthContext';
import UserLogin from './pages/UserLogin';
import RegisterUser from './pages/RegisterUser';
import UserProfile from './pages/UserProfile';
import MainNav from './components/mainNav/MainNav';


function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
        <MainNav />
        <Routes>
          <Route path='/login' element={<UserLogin />}/>
          <Route path='/register' element={<RegisterUser />}/>
          <Route element={<PrivateRoute/>}>
          <Route path='/' element={<Home/>}/>
          <Route path='/profile' element={<UserProfile />}/>
          <Route path='/meeting-rooms' element={<MeetingRoom/>} />
          <Route path='/meeting-rooms/:id' element={<RoomDetails />} />
          <Route path='/bookings' element={<Booking />} />
          <Route path='/bookings/:id' element={<BookingDetails/>} />
          <Route path='/rooms/new' element={<NewRoom/>} />
          
          </Route>
        </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
