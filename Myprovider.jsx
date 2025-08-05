import React, { useState } from "react";
import Mycontext from "./Mycontext";

function Myprovider({ children }) {
  const [userData, setUserData] = useState( {
    isAuthed: "",
    username: "",
    email: "",
    phone: "",
  });

  const handleUserData = (user) => {
    setUserData((prev) => ({
      ...prev,
      isAuthed: user.isAuthed,
      username: user.username,
      email: user.email,
      phone: user.phone,
    }));
  };

  const handleUserLogout = ()=>{
    setUserData({
      isAuthed: "",
      username: "",
      email: "",
      phone: "",
    });
  }
  const sharedvalue = {
    isAuthed: userData.isAuthed,
    username: userData.username,
    email: userData.email,
    phone: userData.phone,

    handleUserData,
    handleUserLogout
  };
  return (
    <Mycontext.Provider value={sharedvalue}>{children}</Mycontext.Provider>
  );
}

export default Myprovider;
