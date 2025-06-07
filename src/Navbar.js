import React from 'react'
import './App.css'

function Navbar() {
  return (
    <nav className="navbar">
      <div>
        <h1 className="logo">
          MediCare<span className="logo-highlight">+</span>
        </h1>
      </div>
        <div className="nav-items">
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#service">Service</a></li>
            <li><a href="#products">Products</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <div className="nav-actions">
            <div className="search-container">
              <input type="text" placeholder="Search..." className="search-bar" />
              <span className="search-icon">
                <svg width="16" height="16" fill="#888" viewBox="0 0 24 24">
                  <path d="M10 2a8 8 0 105.293 14.293l4.707 4.707 1.414-1.414-4.707-4.707A8 8 0 0010 2zm0 2a6 6 0 110 12A6 6 0 0110 4z"/>
                </svg>
              </span>
            </div>
            <button className="signup-button">Sign Up</button>
          </div>
        </div>
    </nav>
  )
}

export default Navbar