import React, { useState } from "react";
import "../auth.form.scss";
import "../../../style/button.scss";
import { useNavigate, Link } from "react-router";
import { useAuth } from "../hooks/useAuth.js";
const SignUp = () => {
  const navigate = useNavigate();
  const { handleSignUp, loading } = useAuth();
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const handleSubmit = async (e) => {
    e.preventDefault();
    await handleSignUp({ email, password, username });
    navigate("/");
  };
  if (loading) {
    return (
      <main>
        <h1>Loading .....</h1>
      </main>
    );
  }
  return (
    <main>
      <div className="form-container">
        <h1>SignUp</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="username">username</label>
            <input
              type="username"
              id="username"
              name="username"
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter username address"
            />
          </div>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email address"
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
            />
          </div>
          <button className="button primary-button">SignUp</button>
        </form>
        <p>
          Already have an account ? <Link to={"/login"}>Login</Link>
        </p>
      </div>
    </main>
  );
};

export default SignUp;
