import React from "react";
import Navbar from "./Navabar";
import SignUp from "./SignUp";
import { Routes, Route } from "react-router-dom"
const LandingPage = () => {
    return (
        <div>
<Navbar/>
    <Routes>
    <Route path="signIn" element={<SignUp />} />
      <Route path="SignUp" element={<SignUp />} />
    </Routes>
        </div>
  );
};

export default LandingPage;
