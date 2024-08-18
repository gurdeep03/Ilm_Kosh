import React from 'react';
import logo from "./images/logo_text.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="cont1">
        <img src={logo} alt="Logo" />
      </div>
      <div className="cont2">
        <a href="/">Home</a>
        <a href="/recommended">Recommended</a>
        <a href="/bookshelf">Bookshelf</a>
        <a href="/my-library">My Library</a>
      </div>
      <div className="cont3">
        <a href="/get-started">Get Started</a>
        <a href="/login">Login</a>
      </div>
    </div>
  );
};

export default Navbar;
