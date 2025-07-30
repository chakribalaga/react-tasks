import React from "react";
import "./Profile.css";

function Profile(){
return(
    <div className="pro-main-cont">
        <div className="pro-first-cont">
            <h1 className="pro-heading">Employ profile</h1>
            {/* <img className="emp-img" src="/assets/emp-profile.jpg" alt="" /> */}
        </div>
        <div className="pro-second-cont">
            <div className="profile-img-cont">
                <img className="profile-img" src="/assets/profile-img.png" alt="Profile" />
            </div>
            <div className="inf-cont">
                <h1 className="emp-name-heading">
                    Balaga Chakradhar Rao
                 </h1>
                 <h2 className="emp-email-head">
                    Email :   <span>
                          Chakribalaga56@gmail.com
                    </span>
                 </h2>
                 <h2 className="emp-email-head">
                    Phone :      
                    <span>
                          1234567980
                    </span>
                 </h2>
                 <button className="pro-logout-btn">Logout</button>
            </div>
        </div>
    </div>
)
    
}
export default Profile;