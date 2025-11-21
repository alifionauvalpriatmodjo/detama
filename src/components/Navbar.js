// src/components/Navbar.js
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/logo.png'; 

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
          <img src={logo} alt="PT Detama Reka Utama" />
          <span className="logo-text">PT DETAMA REKA UTAMA</span>
        </Link>
        
        {/* Icon Hamburger untuk Mobile */}
        <div className="menu-icon" onClick={handleClick}>
          <div className={click ? "hamburger open" : "hamburger"}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <NavLink 
              to="/" 
              className={({ isActive }) => "nav-links" + (isActive ? " active" : "")}
              onClick={closeMobileMenu}
            >
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink 
              to="/about-us" 
              className={({ isActive }) => "nav-links" + (isActive ? " active" : "")}
              onClick={closeMobileMenu}
            >
              About Us
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink 
              to="/projects" 
              className={({ isActive }) => "nav-links" + (isActive ? " active" : "")}
              onClick={closeMobileMenu}
            >
              Projects
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;