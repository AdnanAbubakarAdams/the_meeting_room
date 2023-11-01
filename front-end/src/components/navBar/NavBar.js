import React from 'react';
import { NavLink } from "react-router-dom";

// STYLE SHEET CSS
import "./NavBar.css";

const NavBar = () => {
  return (
    <>
          <section>
            <div className="navBar">
              <NavLink exact to="/meeting-rooms" className="nav-link">
                Meeting Rooms
              </NavLink>
              <NavLink to="/bookings" className="nav-link">
                Bookings
              </NavLink>
              <NavLink to="/rooms/new" className="nav-link">
                New Room
              </NavLink>
            </div>
          </section>
        </>
  )
}

export default NavBar;