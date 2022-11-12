import { Button, Input, InputGroup, InputLeftAddon } from "@chakra-ui/react";
import React from "react";
import { FaMailBulk } from "react-icons/fa";
import { Link } from "react-router-dom";
import mytime from "../GsAssets/mytime.png";
import getApp from "../GsAssets/getApp.jpg";
import top20 from "../GsAssets/top20.png";
import frontRunner from "../GsAssets/frontRunner.png";
import captera from "../GsAssets/captera.png";
import highPerformer from "../GsAssets/highPerformer.png";
import happiestUser from "../GsAssets/happiestUser.png";
import toprated from "../GsAssets/toprated.png";
import '../GsComponents/Mytime.css';
const MyTime = () => {
  return (
    <> 
    <div className="gssecond">
      <div className="mytime_right">
        <h1>Empower your Team with Time Tracking</h1>
        <p>5Metric streamlines your team work so you can focus on what matters</p>
        <InputGroup className="emailinput" >
          <InputLeftAddon children={<FaMailBulk size={35} color="blue" />} />
          <Input type="email" placeholder="Email" className="emailinput" />
        </InputGroup>
        <div className="getstarted">
            <Button className="getstarted_btn">Get Started</Button>
            <h2>Fully Functional 30-Day Trial</h2>
        </div>
      </div>
      <div className="mytime_left">
        <img src={mytime} alt="" />
      </div>
    </div>
    <div className="apps">
      <Link to="#">
        <img src={top20} alt="" />
      </Link>
      <Link to="#">
        <img src={toprated} alt="" />
      </Link>
      <Link to="#">
        <img src={happiestUser} alt="" />
      </Link>
      <Link to="#">
        <img src={highPerformer} alt="" />
      </Link>
      <Link to="#">
        <img src={captera} alt="" />
      </Link>
      <Link to="#">
        <img src={frontRunner} alt="" />
      </Link>
      <Link to="#">
        <img src={getApp} alt="" />
      </Link>
      </div>
         </>
  );
};

export default MyTime;
