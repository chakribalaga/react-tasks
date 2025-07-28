import React, { use, useState } from "react";
import { Link } from 'react-router-dom';
import './Signup.css';

function Signup() {
 const[step,SetStep]=useState(1);
 const[formData,SetFormData]=useState({
  username: "",
  email: "",
  phone: "",
  password: "",
  confirmPassword: "",
  gender: "",
  hobbies: "",
  country: "",
  state: "",
  comment: "",
 });

  return (
    <div className="signup-container">
      <div className="signup-right">
        
      </div>

      <div className="signup-left">
        <div className="inner-signup-left">
          <h1 className="signup-heading">Sign Up to Get Started</h1>
          <form className="signup-form" method="POST">

            <div className="frm-cont">
              <label htmlFor="Username" className="lab-head">Username</label>
              <input
                className="input-heading"
                type="text"
                id="Username"
                name="Username"
                placeholder="Enter your name"
                autoComplete="name"
                required
              />
            </div>

            <div className="frm-cont">
              <label htmlFor="email" className="lab-head">Email</label>
              <input
                className="input-heading"
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                autoComplete="email"
                required
              />
            </div>
            
            <div className="frm-cont">
              <label htmlFor="phone" className="lab-head">Phone Number</label>
              <div className="phone-wrapper">
                <select className="country-code-select" id="country-code" name="country-code">
                  <option value="+91">+91</option>
                  <option value="+1">+1</option>
                  <option value="+44">+44</option>
                  <option value="+1">+1</option>
                  <option value="+61">+61</option>
                </select>

                <input
                  className="input-heading phone-input"
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="Enter phone number"
                  required
                />
              </div>
            </div>

            <div className="frm-cont">
              <label htmlFor="password" className="lab-head">Password</label>
              <input
                className="input-heading"
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
                autoComplete="current-password"
                required
              />
            </div>

            <div className="frm-cont">
              <label htmlFor="confirm-password" className="lab-head">Confirm Password</label>
              <input
                className="input-heading"
                type="password"
                id="confirm-password"
                name="confirm-password"
                placeholder="Re-enter your password"
                autoComplete="current-password"
                required
              />
            </div>

            <button className="signup-button" type="submit">Next</button>

            <p className="login-link-text">
              Have an account?
              <Link className="login-link" to="/Signin"> Login</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
