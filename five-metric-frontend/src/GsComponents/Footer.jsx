import React from 'react'
import { FaAndroid, FaApple, FaChrome, FaDesktop, FaEdge, FaFirefox, FaOpera, FaSafari } from 'react-icons/fa';
import "./Footer.css"
import { Link } from "react-router-dom";
import {Box, GridItem, Heading, SimpleGrid} from "@chakra-ui/react"

const Footer = () => {
  return (
    <Box className="footer">
      {/* <div className='logo'>
      <Link to="/">
        <img src="" alt="logo"  />
        
      </Link>
      </div> */}
      <SimpleGrid gap={20} columns={[1, 2, 2, 4, 4]}>
        <GridItem >
          <Box className="application">
            <Heading textAlign={"left"} w={"100%"} as="h1">Application</Heading>
            <Link to="#">
              <h4>
                <FaDesktop
                  size={25}
                  style={{ color: "grey", marginRight: "2rem" }}
                />{" "}
                DeskTop
              </h4>
            </Link>
            <Link to="#">
              <h4>
                <FaApple
                  size={30}
                  style={{ color: "grey", marginRight: "2rem" }}
                />{" "}
                iOS
              </h4>
            </Link>
            <Link to="#">
              <h4>
                <FaAndroid
                  size={30}
                  style={{ color: "grey", marginRight: "2rem" }}
                />{" "}
                Android
              </h4>
            </Link>
          </Box>
        </GridItem>
        <GridItem>
          <Box className="browserExtensions">
            <h1>Browser Extensions</h1>
            <Link to="#">
              <h4>
                <FaChrome
                  size={30}
                  style={{ color: "grey", marginRight: "2rem" }}
                />{" "}
                Chrome
              </h4>
            </Link>
            <Link to="#">
              <h4>
                <FaFirefox
                  size={30}
                  style={{ color: "grey", marginRight: "2rem" }}
                />{" "}
                Firefox
              </h4>
            </Link>
            <Link to="#">
              <h4>
                <FaOpera
                  size={30}
                  style={{ color: "grey", marginRight: "2rem" }}
                />{" "}
                Opera
              </h4>
            </Link>
            <Link to="#">
              <h4>
                <FaEdge
                  size={30}
                  style={{ color: "grey", marginRight: "2rem" }}
                />{" "}
                Firefox
              </h4>
            </Link>
            <Link to="#">
              <h4>
                <FaSafari
                  size={30}
                  style={{ color: "grey", marginRight: "2rem" }}
                />{" "}
                Opera
              </h4>
            </Link>
          </Box>
        </GridItem>
        <GridItem>
          <Box className="resources">
            <h1>Resources</h1>
            <h4>Solutions</h4>
            <h4>Integrations</h4>
            <h4>Help</h4>
            <h4>Time Trackers Comparison</h4>
            <h4>Blog</h4>
          </Box>
        </GridItem>
        <GridItem>
          <Box textAlign={"left"} className="about">
            <h1>About</h1>
            <h4>About 5Metric</h4>
            <h4>Term of Services</h4>
            <h4>Privacy Policy</h4>
            <h4>Cookies Policy</h4>
          </Box>
        </GridItem>
      </SimpleGrid>
    </Box>
  );

}

export default Footer;
