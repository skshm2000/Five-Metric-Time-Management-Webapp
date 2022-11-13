import { Box, Button, Flex, Heading, Input, InputGroup, InputLeftAddon, Stack, Text, Spacer } from "@chakra-ui/react";
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
    <Flex pt="90px" backgroundColor="#fff0b8" pb="50px" justifyContent="space-around" className="gssecond">
      <Stack w="40%" alignContent="center" justifyContent="center" classname="gssecond_stack">
        <Heading classname="gssecond_heading">Empower your Team with Time Tracking</Heading>
        <Text fontSize="22px" fontWeight="bolder">5Metric streamlines your team work so you can focus on what matters</Text>
        <InputGroup>
          <InputLeftAddon children={<FaMailBulk size={35} color="blue" />} />
          <Input type="email" placeholder="Email" backgroundColor="white"/>
        </InputGroup>
        <Flex alignContent="center" gap="20px">
            <Button variant="solid" colorScheme="blue" className="getstarted_btn">Get Started</Button>
            <h2>Fully Functional 30-Day Trial</h2>
        </Flex>
      </Stack>
      <Box w='45%'>
        <img src="https://tmetric.com/media/nb3imgh0/img-home-heading.svg" alt="" />
      </Box>
    </Flex>
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
