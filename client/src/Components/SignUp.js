import React, { useState } from "react";
import "./SignUp.css";
import { Link } from "react-router-dom";


const SignUp = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        email,
        password,
        passwordConfirmation,
      }),
    })
      .then((r) => r.json())
      .then(onLogin);
  }
  return (
    <div className="signUp">
      <h3>Sign Up here </h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <label htmlFor="password_confirmation">Confirm Password:</label>
        <input
          type="password"
          id="password_confirmation"
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
        />
        <button className="signupbutton" type="submit">
          Submit
        </button>
        <section>
          <p>All ready sign up?</p>
          <Link to="/signin">
            <h5>Login</h5>
          </Link>
        </section>
      </form>
    </div>
  );
};

export default SignUp;
