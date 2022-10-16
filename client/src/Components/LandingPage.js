import React from "react";
import Navbar from "./Navabar";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import Books from "./Books";
import { Routes, Route } from "react-router-dom";

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <Routes className="nav-link">
        <Route path="signIn" element={<SignIn />} />
        <Route path="SignUp" element={<SignUp />} />
        <Route path="LandingPage" element={<LandingPage />} />
          </Routes>
          <Books/>
    </div>
  );
};

export default LandingPage;
