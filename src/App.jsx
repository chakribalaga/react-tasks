import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Pages/LoginPages/Login';
import Signup from './Pages/SignupPages/Signup';
import Profile from './Pages/Profile/Profile';
function App() {
  return (
    <>
    {/* <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </Router> */}
    <Profile/>
    </>
  );
}

export default App;
