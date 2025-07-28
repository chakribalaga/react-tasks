import React from "react";
import { Link } from 'react-router-dom';
import './Signin.css';

function Signin() {
  return (
    <div className="signin-container">
      <div className="right-container">
    
      </div>

      <div className="left-container">
        <div className="inner-left-container">
            <h1 className="lft-cnt-heading">Login to your account</h1>
            <form className="form-container" action="" method="POST">
            <div className="frm-cnt">
                <label className="flab-heading" htmlFor="email">Email</label>
                <input
                className="input-box"
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                autoComplete="email"
                required
                />
            </div>

            <div className="frm-cnt">
                <label className="flab-heading" htmlFor="password">Password</label>
                <input
                className="input-box"
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
                autoComplete="current-password"
                required
                />
            </div>
            <p className="forgot-password">Forget Password ?</p>
            <button className="login-button">Login</button>
              <p className="signin-link-para">
                Don’t have an account?{" "}
                <Link className="signup-link" to="/signup">Signup</Link>
                </p>
            </form>
        </div>
      </div>
    </div>
  );
}

export default Signin;
