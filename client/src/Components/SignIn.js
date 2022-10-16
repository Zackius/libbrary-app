import React, { useState } from "react";
import "./SignIn.css";
import { Link, Navigate } from "react-router-dom";

const SignIn = () => {
  const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const { isFetching, error } = useSelector((state) => state.user);

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) =>(user));
        return  <Navigate replace="/landingpage" />;
      } else {
        r.json().then((errorData) => errorData.errors);
      }
    });
  }
  return (
    <div className="signIn">
      <h3>Welcome Back</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button disabled={isFetching} className="signinbutton" type="submit">
          Login
              </button>
              {error && <Error>Something went wrong</Error>}
        <section>
          <p>Do you have an account?</p>
          <Link to="/signup">
            <h5>Register an Account to access free materials</h5>
          </Link>
        </section>
      </form>
    </div>
  );
};

export default SignIn;
