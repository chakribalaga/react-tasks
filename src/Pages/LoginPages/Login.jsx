import React, { useContext } from "react";
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';
import { useState } from "react";
import { API_URL } from "../../data/docs";
import Mycontext from "../../../Mycontext";

function Login() {
  const navigate = useNavigate();
  const sharedvalue = useContext(Mycontext);
  const [userData,setUserData]= useState({
    email:'',
    password:''
  });

  async function handleSubmitLogin(e){
    e.preventDefault();
    try{
      const res = await fetch(`${API_URL}/users/userlogin`,{
        method:'POST',
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify(userData),
        credentials:'include'
      });
      const resData = await res.json();
      if(resData.success){
        sharedvalue.handleUserData({...resData.user,isAuthed:true});
        alert(resData.message);
        navigate('/profile');
      }else{
        sharedvalue.handleUserData({
          isAuthed:false,
          username: "",
          email: "",
          phone: "",
        });
        alert(resData.message);
      }
    }catch(err){
      alert(err.message);
    }
  }
  return (
    <div className="lg-main">
      <div className="lg-lft">
        <img src="/assets/Login.gif" alt="Signup animation" className="signup-gif" />
      </div>

      <div className="lg-rgt">
        <div className="lg-wrap">
          <h1 className="lg-head">Login to your account</h1>

          <form className="lg-form" onSubmit={(e)=>handleSubmitLogin(e)}>
            <div className="lg-box">
              <label className="lg-lbl" htmlFor="email">Email</label>
              <input
                className="lg-inp"
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                autoComplete="email"
                value={userData.email}
                onChange={(e)=>setUserData(prev=>({
                  ...prev,
                  email:e.target.value
                }))}
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
                value={userData.password}
                onChange={(e)=>setUserData(prev=>({
                  ...prev,
                  password:e.target.value
                }))}
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
