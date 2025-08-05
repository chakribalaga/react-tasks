import React, { useContext } from "react";
import "./Profile.css";
import { useNavigate } from "react-router-dom";
import Mycontext from "../../../Mycontext";

function Profile(){
    const navigate = useNavigate();
    const sharedvalue = useContext(Mycontext)

    const handleLogout =(e)=>{
        e.preventDefault();
        sharedvalue.handleUserLogout();
        alert('Successfully logged out!!!');
        navigate('/');
    }
return(
    <div className="pro-main-cont">
        <div className="pro-first-cont">
            <h1 className="pro-heading">Employee profile</h1>
            {/* <img className="emp-img" src="/assets/emp-profile.jpg" alt="" /> */}
        </div>
        <div className="pro-second-cont">
            <div className="profile-img-cont">
                <img className="profile-img" src="/assets/profile-img.png" alt="Profile" />
            </div>
            <div className="inf-cont">
                <h1 className="emp-name-heading">
                    {sharedvalue.username}
                 </h1>
                 <h2 className="emp-email-head">
                    Email :   <span>
                          {sharedvalue.email}
                    </span>
                 </h2>
                 <h2 className="emp-email-head">
                    Phone :      
                    <span>
                          {sharedvalue.phone}
                    </span>
                 </h2>
                 <button className="pro-logout-btn" onClick={(e)=>handleLogout(e)}>Logout</button>
            </div>
        </div>
    </div>
)
    
}
export default Profile;