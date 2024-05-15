import React, { useState } from "react";
import { Link } from "react-router-dom";
import './Navbar.css'

const Navbar = ()=>{

    const [isActive, setIsActive] = useState(false);

  const toggleNavbar = () => {
    setIsActive(!isActive);
  };

    return(
       
      <nav className="navbar">
      <Link to={'/'}><div className="brand-title">CoinSpotlight</div></Link>
      <div className="market">Market</div>
      <button className="toggle-button" onClick={toggleNavbar}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>
      <div className={`navbar-links ${isActive ? 'active' : ''}`}>
        <ul>
          <li><a href="/parallax">Home</a></li>
          <li><a href="/parallax">About</a></li>
          <li><a href="/parallax">Contact</a></li>
        </ul>
      </div>
    </nav>
   
    )
}

export default Navbar