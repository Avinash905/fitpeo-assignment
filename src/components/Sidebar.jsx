import React, { useState } from "react";
import "../styles/sidebar.css";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { RxDashboard } from "react-icons/rx";
import { CgMenuLeft } from "react-icons/cg";
import { TbPencilMinus } from "react-icons/tb";
import { FiLayers, FiBook, FiShoppingBag } from "react-icons/fi";
import { AiOutlineWifi, AiOutlineMail, AiOutlineMessage } from "react-icons/ai";
import { FaSuitcase } from "react-icons/fa";
import {
  BsBox,
  BsFillPersonCheckFill,
  BsArchiveFill,
  BsCalendar2Event,
} from "react-icons/bs";

const Sidebar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <motion.aside
      className="sidebar"
      initial={{ width: 207.775 }}
      animate={{ width: sidebarOpen ? 207.775 : 0 }}
      transition={{ type: "linear", duration: 0.6 }}
    >
      <CgMenuLeft
        className="nav-link sidebar-menu"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      />
      <motion.div
        className="sidebar-container"
        initial={{ x: 0 }}
        animate={{ x: sidebarOpen ? 0 : -200 }}
        transition={{ type: "linear", duration: 0.6 }}
      >
        <div className="sidebar-box">
          <h6 className="nav-heading">menu</h6>
          <div className="navigation-card">
            <NavLink
              to={"/"}
              className="nav-link dashboard"
            >
              <RxDashboard className="nav-icon" />
              <span>Dashboards</span>
            </NavLink>
          </div>
        </div>
        <div className="sidebar-box">
          <h6 className="nav-heading">applications</h6>
          <div className="navigation-card">
            <NavLink
              to={"/"}
              className="nav-link"
            >
              <BsCalendar2Event className="nav-icon" />
              <span>calendar</span>
            </NavLink>
          </div>
          <div className="navigation-card">
            <NavLink
              to={"/"}
              className="nav-link"
            >
              <AiOutlineMessage className="nav-icon" />
              <span>chat</span>
            </NavLink>
          </div>
          <div className="navigation-card">
            <NavLink
              to={"/"}
              className="nav-link"
            >
              <BsArchiveFill className="nav-icon" />
              <span>file manager</span>
            </NavLink>
          </div>
          <div className="navigation-card">
            <NavLink
              to={"/"}
              className="nav-link"
            >
              <FiShoppingBag className="nav-icon" />
              <span>ecommerce</span>
            </NavLink>
          </div>
          <div className="navigation-card">
            <NavLink
              to={"/"}
              className="nav-link"
            >
              <AiOutlineMail className="nav-icon" />
              <span>email</span>
            </NavLink>
          </div>
          <div className="navigation-card">
            <NavLink
              to={"/"}
              className="nav-link"
            >
              <FiBook className="nav-icon" />
              <span>invoices</span>
            </NavLink>
          </div>
          <div className="navigation-card">
            <NavLink
              to={"/"}
              className="nav-link"
            >
              <FaSuitcase className="nav-icon" />
              <span>projects</span>
            </NavLink>
          </div>
          <div className="navigation-card">
            <NavLink
              to={"/"}
              className="nav-link"
            >
              <AiOutlineWifi className="nav-icon" />
              <span>contacts</span>
            </NavLink>
          </div>
        </div>
        <div className="sidebar-box">
          <h6 className="nav-heading">pages</h6>
          <div className="navigation-card">
            <NavLink
              to={"/"}
              className="nav-link"
            >
              <BsFillPersonCheckFill className="nav-icon" />
              <span>authentication</span>
            </NavLink>
          </div>
          <div className="navigation-card">
            <NavLink
              to={"/"}
              className="nav-link"
            >
              <BsBox className="nav-icon" />
              <span>utility</span>
            </NavLink>
          </div>
        </div>
        <div className="sidebar-box">
          <h6 className="nav-heading">components</h6>
          <div className="navigation-card">
            <NavLink
              to={"/"}
              className="nav-link"
            >
              <FiLayers className="nav-icon" />
              <span>ui elements</span>
            </NavLink>
          </div>
          <div className="navigation-card">
            <NavLink
              to={"/"}
              className="nav-link"
            >
              <TbPencilMinus className="nav-icon" />
              <span>forms</span>
            </NavLink>
          </div>
        </div>
      </motion.div>
    </motion.aside>
  );
};

export default Sidebar;
