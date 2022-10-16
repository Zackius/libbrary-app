import React from "react";
import Navbar from "./Navabar";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import Books from "./Books";
import Add from "./Add";
import { Routes, Route } from "react-router-dom";

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <Routes className="nav-link">
        <Route path="signIn" element={<SignIn />} />
        <Route path="SignUp" element={<SignUp />} />
        <Route path="LandingPage" element={<LandingPage />} />
        <Route path="Books" element={<Books />} />
        <Route path="Add" element={<Add />} />
      </Routes>
    </div>
  );
};

export default LandingPage;
