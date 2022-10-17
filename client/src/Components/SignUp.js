import React, { useState } from "react";
import "./SignUp.css";
import { Link } from "react-router-dom";


const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  
  const [errors, setErrors] = useState([]);

  async function handleSubmit(e) {
    e.preventDefault();

    const formData = {
      username,
      email,
      password,
      passwordConfirmation,
    }
    const resp = await fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
   
    const data = await resp.json()
    if (resp.ok) {
      window.location = "/signin"
    } else {
      setErrors(data.errors)
    }
  }
  return (
    <div className="signUp">
      <h3>Sign Up here </h3>
      <form onSubmit={(e) =>handleSubmit(e)}>
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

          {errors.length > 0 && (
            <ul style={{ color: "red" }}>
              {errors.map((error) => (
                <li key={error}>{error}</li>
              ))}
            </ul>
          )}

        </section>
      </form>
    </div>
  );
};

export default SignUp;
