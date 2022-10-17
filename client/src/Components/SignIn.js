import React, { useState } from "react";
import "./SignIn.css";
import { Link} from "react-router-dom";

const SignIn = ({setUser}) => {
  const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState("");

  async function handleSubmit(e) {
      e.preventDefault();
       
      const formData = {
        username,
        password,
      };
      const resp = await fetch("/login", {
          method: "POST",
          headers: {
              "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
      })

  const  data = await  resp.json()
  if (resp.ok) {
    
    setUser(data);
    setErrors("");
    window.location = "/books";
  } else {
    setErrors(data.error);
  }
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
        <button className="signinbutton" type="submit">
          Login
        </button>

        <section>
          <p>Do you have an account?</p>
          <Link to="/signup">
            <h5>Register an Account to access free materials</h5>
                  </Link>
                  {errors !== "" ? (
            <ul style={{ color: "red" }}>
              <li>{errors}</li>
            </ul>
          ) : (
            ""
          )}
        </section>
      </form>
    </div>
  );
};

export default SignIn;
