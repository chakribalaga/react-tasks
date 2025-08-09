import React, { useState } from "react";
import './Navbar.css';

function Navbar({ setSearchQuery }) {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    setQuery(e.target.value);
    setSearchQuery(e.target.value);
  };

  return (
    <nav className="nav-bar-container">
      <h1 className="nav-bar-heading">Employees</h1>

      <ul className="nav-bar-ul">
        <li>Home</li>
        <li>About Us</li>
        <li>Careers</li>
        <li>Contact Us</li>
      </ul>

      <div className="nav-right">
        <input
          type="text"
          placeholder="Search..."
          className="nav-search"
          value={query}
          onChange={handleChange}
        />
      </div>
    </nav>
  );
}

export default Navbar;
