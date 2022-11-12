import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import {
  FaBars,

  FaChartBar,
  FaClock,

  FaFileInvoice,
  FaFolder,

  FaGithub,


  FaHeadphones,

  FaJira,

  FaList,

  FaMicrosoft,

  FaPowerOff,

  FaRegDotCircle,

  FaTimes,

  FaTshirt,
} from "react-icons/fa";
import logo from "../assets/logo.png";
import {
  Button,
  Menu,
  MenuButton,
  MenuList,
} from "@chakra-ui/react";


const Navbar = ({page=false}) => {
  const [click, setClick] = useState(false);
  const [color, setColor] = useState(false);

  const changeColor = () => {
    if (window.scrollY >= 50) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  const handleClick = () => {
    setClick(!click);
  };
  return (
    <>
      <div className={color ? "navbr navbr-bg" : "navbr"}>
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <div className="header_content">
          <Menu>
            <MenuButton as={Button}>Why 5Metric ▼</MenuButton>
            <MenuList className="list">
              <div className="overview">
                <h1>OverView</h1>
                <div>
                  <h1>Industry</h1>
                  <p>Made for all industries. Check benefits of usage</p>
                </div>
                <div>
                  <h1>Customers</h1>
                  <p>
                    See why business use TMetric for time tracking and workflow
                    management
                  </p>
                </div>
              </div>
              <div className="feature">
                <h1>Features</h1>
                <div className="featuress">
                <div>
                  <h1>
                    <FaClock size={35} color="gray" />
                    Time Tracking
                  </h1>
                  <p>Capture and control every task you work on</p>
                </div>
                <div>
                  <h1>
                    <FaTshirt size={35} color="gray" />
                    Team Management
                  </h1>
                  <p>Moniter productivity and activity level of your team</p>
                </div>
                <div>
                  <h1>
                    <FaFileInvoice size={35} color="gray" />
                    Billing & Invoicing
                  </h1>
                  <p>Set billable rates and eaislt create invoices</p>
                </div>
                <div>
                  <h1>
                    <FaFolder size={35} color="gray" />
                    Project Management
                  </h1>
                  <p>Create projects, set rates and budgets</p>
                </div>
                <div>
                  <h1>
                    <FaChartBar size={35} color="gray" />
                  Task Management</h1>
                  <p>Manage tasks and set up an effective workflow</p>
                </div>
                <div>
                  <h1>
                    <FaPowerOff size={35} color="gray" />
                    Time Off
                  </h1>
                  <p>Simply ask for days off and control teams attendance</p>
                </div>
                <Link to="#"><h2 className="view">View All Integrations ➡</h2></Link>
                </div>
              </div>
            </MenuList>
          </Menu>
          {/* Second DropDown */}
          <Menu>
            <MenuButton as={Button}>Apps & Integrations ▼</MenuButton>
            <MenuList className="list">
              <div className="overview">
                <h1>Apps</h1>
                <div>
                  <h1>Browser Extensions</h1>
                  <p>Simple time tracking extension which helps you be more productive</p>
                </div>
                <div>
                  <h1>Mobile apps</h1>
                  <p>
                  Install TMetric app to your phone or a tablet device. Android and iOS platforms are supported.
                  </p>
                </div>
                <div>
                  <h1>Desktop apps</h1>
                  <p>
                  Download TMetric app for your desktop computer or a laptop
                  </p>
                </div>
              </div>
              <div className="featur">
                <h1>Integrations</h1>
                <div className="featuress">
                <div>
                  <h1>
                    <FaJira size={35} color="gray" />
                    Jira
                  </h1>
                  <p>Capture and control every task you work on</p>
                </div>
                <div>
                  <h1>
                    <FaMicrosoft size={35} color="gray" />
                    MS Office
                  </h1>
                  <p>Moniter productivity and activity level of your team</p>
                </div>
                <div>
                  <h1>
                    <FaRegDotCircle size={35} color="gray" />
                    Asana
                  </h1>
                  <p>Set billable rates and eaislt create invoices</p>
                </div>
                <div>
                  <h1>
                    <FaGithub size={35} color="gray" />
                    GitHub
                  </h1>
                  <p>Create projects, set rates and budgets</p>
                </div>
                <div>
                  <h1>
                    <FaList size={35} color="gray" />
                 Todoist
                 </h1>
                  <p>Manage tasks and set up an effective workflow</p>
                </div>
                <div>
                  <h1>
                    <FaHeadphones size={35} color="gray"  />
                    Time Off
                  </h1>
                  <p>Simply ask for days off and control teams attendance</p>
                </div>
                <Link to="#"><h2 className="view">View All Integrations➡</h2></Link>
                </div>
                
              </div>
              
            </MenuList>
            
          </Menu>
           
          <Link to="/pricing" className="psb">
            <h1>Pricing</h1>
          </Link>
          <Link to="#" className="psb">
            <h1>Support</h1>
          </Link>
          
        </div>
        <div className="entry">
          <Link to='/login'>
            <button className="login">Log In</button>
          </Link>
          <Link to='/signup'>
            <button className="signup">Sign In</button>
          </Link>
        </div>

      </div>
      <div className="menu-icon" onClick={handleClick}>
          {click ? (
            <FaTimes size={25} style={{ color: "black" }} />
          ) : (
            <FaBars size={25} style={{ color: "black" }} />
          )}
        </div>
    </>
  );
};

export default Navbar;
