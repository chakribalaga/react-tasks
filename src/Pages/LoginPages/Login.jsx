import React from "react";
import { Link } from 'react-router-dom';
import './Login.css';

function Login() {
  return (
    <div className="lg-main">
      <div className="lg-lft">
        <img src="/assets/Login.gif" alt="Signup animation" className="signup-gif" />
      </div>

      <div className="lg-rgt">
        <div className="lg-wrap">
          <h1 className="lg-head">Login to your account</h1>

          <form className="lg-form" method="POST">
            <div className="lg-box">
              <label className="lg-lbl" htmlFor="email">Email</label>
              <input
                className="lg-inp"
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                autoComplete="email"
                required
              />
            </div>

            <div className="lg-box">
              <label className="lg-lbl" htmlFor="password">Password</label>
              <input
                className="lg-inp"
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
                autoComplete="current-password"
                required
              />
            </div>

            <p className="lg-forgot">Forgot Password?</p>

            <button className="lg-btn" type="submit">Login</button>

            <p className="lg-note">
              Don’t have an account?{" "}
              <Link className="lg-link" to="/signup">Signup</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
