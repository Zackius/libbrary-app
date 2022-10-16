import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <NavLink to="/">
        <h4 className="logo">
          Soma <span>Plus +++</span>
        </h4>
      </NavLink>

      <button className="navbutton">
        <NavLink className="navLinks" to="/signin">
          SignIn
        </NavLink>
      </button>
      <button className="navbutton">
        <NavLink className="navLinks" to="/signup">
          SignUp
        </NavLink>
      </button>
    </nav>
  );
};

export default Navbar;
