import React from "react";
import { IoSearchOutline, IoSettingsOutline } from "react-icons/io5";
import { RxDashboard } from "react-icons/rx";
import { FiBell } from "react-icons/fi";
import "../styles/header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <h3 className="header-heading">Dashboard</h3>
        <div className="header-links">
          <IoSearchOutline />
          <img
            src="https://img.icons8.com/fluency/256/usa_1.png"
            alt="us flag"
            className="usflag"
          />
          <RxDashboard />
          <FiBell />
          <IoSettingsOutline />
          <img
            src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="profile"
            className="header-pic"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
