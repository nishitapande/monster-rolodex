import React from "react";
import "./NavBar.css";

function NavBar(props) {
  return (
    <div className="navbar">
      <div className="nav-bar">
        <div className="logo-box">
          <h1 className="primary-heading">Monster Rolodex </h1>
        </div>
        <div className="search-box">
          <input
            type="search"
            placeholder="Search Monsters"
            className="search-bar"
            onChange={props.onSearchChange}
          />
        </div>
      </div>
    </div>
  );
}

export default NavBar;
