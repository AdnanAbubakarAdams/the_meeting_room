import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from "../utils/AuthContext";
import NavBar from '../navBar/NavBar';



const MainNav = () => {
    const navigate = useNavigate()
    const {user, logoutUser} = useAuth()

    const logoutClick = () => {
        navigate('/login')
    }

  return (
    <div className="header">
        <div>
            <Link id="header-logo" to="/">TMR</Link>
        </div>

        <div className="links--wrapper">
            {user ? (
                <>
            
                <NavBar />
           
                <Link to="/" className="header--link">Home</Link>
                <Link to="/profile" className="header--link">Profile</Link>

                <button onClick={logoutUser} className="btn">Logout</button>
            </>
            ):(
 
                <Link className="btn" to="/login">Login</Link>

            )}
            
        </div>
    </div>
  )
}

export default MainNav;
