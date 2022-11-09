import React from 'react'

import { Link } from "react-router-dom";
import logo from "../GsAssets/logo.png"
const Footer = () => {
  return (
    <>
      <div className="logo">
        <Link to="/">
        <img src={logo} alt="logo" />
        </Link>
        </div>
      <div className='application'>
      <h1>Application</h1>
        {/* <Link to="#">
        <h4>
            <FaDesktop size={20}
              style={{ color: "black", marginRight: "2rem" }}
             /> DeskTop
            </h4>
        </Link> */}
      </div>
      <div className='Browser Extensions'>
      <h1>Application</h1>
      </div>
      <div className='Resources'>
      <h1>Application</h1>
      </div>
      <div className='About'>
      <h1>Application</h1>
      </div>
    </>
  )
}

export default Footer
