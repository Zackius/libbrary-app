import React from "react";
import {Link} from "react-router-dom"
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-link">

        <Link  className="logo" to="/">Soma..</Link>
        <Link to="SignIn">SignIn</Link>
        <Link to="SignUp">SignUp</Link>
      </div>
    </nav>
  );
};

export default Navbar;