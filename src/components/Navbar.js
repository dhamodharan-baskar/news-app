import React from 'react'
import '../styles/Navbar.css'

const Navbar = (props) => {
  return (
    <div className='navbar-overview sticky-top'>
      <div className="navbar-container">
        <div className='navbar-layout'>
         <div className="logout-view" onClick={() => props.logout()}>
          Logout
         </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar;
