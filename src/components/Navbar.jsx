import React from 'react'
import { BiSolidPlanet } from "react-icons/bi";
import '../components/navbar.css'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="navbar-container">
        <Link to='/' style={{ textDecoration: "none" }}>
          <div className="navbar-logo">
            <BiSolidPlanet />
            <span>InnoStay</span>
          </div>
        </Link>

        <div>
          <Link to='/hotels'>
            <div>
              <button className="navbar-button">Book Now</button>
            </div></Link>
        </div>
      </div>

    </div>
  )
}

export default Navbar
