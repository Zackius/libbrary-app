import "./App.css";
import Navbar from "./Components/Navabar";
import SignUp from "./Components/SignUp";
import SignIn from "./Components/SignIn";
import Books from "./Components/Books";
import Add from "./Components/Add";
import { Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  return (
    <div>
      <Navbar />
      <Routes className="nav-link">
        <Route path="signIn" element={<SignIn setUser={setUser} />} />
        <Route path="SignUp" element={<SignUp />} />
        <Route path="Books" element={<Books user={user} />} />
        <Route path="Add" element={<Add user={user} />} />
      </Routes>
      
    </div>
  );
}

export default App;
