import React from 'react'
import { FaAndroid, FaApple, FaChrome, FaDesktop, FaEdge, FaFirefox, FaOpera, FaSafari } from 'react-icons/fa';
import "./Footer.css"
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className='footer'>
      {/* <div className='logo'>
      <Link to="/">
        <img src={footer_logo} alt="logo"  />
        
      </Link>
      </div> */}
      <div className='application'>
      <h1>Application</h1>
        <Link to="#">
        <h4>
            <FaDesktop size={30}
              style={{ color: "grey", marginRight: "2rem" }}
             /> DeskTop
            </h4>
        </Link>
        <Link to="#">
        <h4>
            <FaApple size={30}
              style={{ color: "grey", marginRight: "2rem" }}
             /> iOS
            </h4>
        </Link>
        <Link to="#">
        <h4>
            <FaAndroid size={30}
              style={{ color: "grey", marginRight: "2rem" }}
             /> Android
            </h4>
        </Link>
      </div>
      <div className='browserExtensions'>
      <h1>Browser Extensions</h1>
      <Link to="#">
        <h4>
            <FaChrome size={30}
              style={{ color: "grey", marginRight: "2rem" }}
             /> Chrome
            </h4>
        </Link>
        <Link to="#">
        <h4>
            <FaFirefox size={30}
              style={{ color: "grey", marginRight: "2rem" }}
             /> Firefox
            </h4>
        </Link>
        <Link to="#">
        <h4>
            <FaOpera size={30}
              style={{ color: "grey", marginRight: "2rem" }}
             /> Opera
            </h4>
        </Link>
        <Link to="#">
        <h4>
            <FaEdge size={30}
              style={{ color: "grey", marginRight: "2rem" }}
             /> Firefox
            </h4>
        </Link>
        <Link to="#">
        <h4>
            <FaSafari size={30}
              style={{ color: "grey", marginRight: "2rem" }}
             /> Opera
            </h4>
        </Link>
      </div>
      <div className='resources'>
      <h1>Resources</h1>
      <h4>Solutions</h4>
      <h4>Integrations</h4>
      <h4>Help</h4>
      <h4>Time Trackers Comparison</h4>
      <h4>Blog</h4>
      </div>
      <div className='about'>
      <h1>About</h1>
      <h4>About 5Metric</h4>
      <h4>Term of Services</h4>
      <h4>Privacy Policy</h4>
      <h4>Cookies Policy</h4>
      </div>
      
    </div>
   
  )
}

export default Footer;
