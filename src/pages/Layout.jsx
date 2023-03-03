import React from "react";
import Header from "../components/Header";
import Profile from "../components/Profile";
import Sidebar from "../components/Sidebar";
import "../styles/layout.css";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Sidebar />
      <div className="main-container">
        <Header />
        <div className="main-content">
          {children}
          <Profile />
        </div>
      </div>
    </div>
  );
};

export default Layout;
