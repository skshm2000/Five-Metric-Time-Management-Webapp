import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Flex,
  Text,
} from "@chakra-ui/react";
import { AiFillAndroid, AiFillApple, AiFillChrome } from "react-icons/ai";
import { FaEdge, FaFirefoxBrowser, FaSafari } from "react-icons/fa";
import { GoDeviceDesktop } from "react-icons/go";
import { ImOpera } from "react-icons/im";

export default function FooterMobileMenu() {
  return (
    <Accordion allowToggle>
      <AccordionItem borderBottom="1px solid lightgray">
        <h2>
          <AccordionButton>
            <Box flex="1" fontWeight="small" textAlign="left">
              Applications
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          {/* <Link href="#"> */}
            <Flex fontSize="1.1rem" mb="10px" alignItems="center" gap="10px">
              <GoDeviceDesktop fill="gray" />
              <Text>Desktop</Text>
            </Flex>
          {/* </Link> */}
          {/* <Link href="#"> */}
            <Flex fontSize="1.1rem" mb="10px" alignItems="center" gap="10px">
              <AiFillApple fill="gray" />
              <Text>iOS</Text>
            </Flex>
          {/* </Link> */}
          {/* <Link href="#"> */}
            <Flex fontSize="1.1rem" mb="10px" alignItems="center" gap="10px">
              <AiFillAndroid fill="gray" />
              <Text>Android</Text>
            </Flex>
          {/* </Link> */}
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem borderBottom="1px solid lightgray">
        <h2>
          <AccordionButton>
            <Box flex="1" fontWeight="medium" textAlign="left">
              Browser Extenstions
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          {/* <Link href="#"> */}
            <Flex fontSize="1.1rem" mb="10px" alignItems="center" gap="10px">
              <AiFillChrome fill="gray" />
              <Text>Chrome</Text>
            </Flex>
          {/* </Link> */}
          {/* <Link href="#"> */}
            <Flex fontSize="1.1rem" mb="10px" alignItems="center" gap="10px">
              <FaFirefoxBrowser fill="gray" />
              <Text>Firefox</Text>
            </Flex>
          {/* </Link> */}
          {/* <Link href="#"> */}
            <Flex fontSize="1.1rem" mb="10px" alignItems="center" gap="10px">
              <ImOpera fill="gray" />
              <Text>Opera</Text>
            </Flex>
          {/* </Link> */}
          {/* <Link href="#"> */}
            <Flex fontSize="1.1rem" mb="10px" alignItems="center" gap="10px">
              <FaEdge fill="gray" />
              <Text>Edge</Text>
            </Flex>
          {/* </Link> */}
          {/* <Link href="#"> */}
            <Flex fontSize="1.1rem" mb="10px" alignItems="center" gap="10px">
              <FaSafari fill="gray" />
              <Text>Safari</Text>
            </Flex>
          {/* </Link> */}
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem borderBottom="1px solid lightgray">
        <h2>
          <AccordionButton>
            <Box flex="1" fontWeight="medium" textAlign="left">
              Resources
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          {/* <Link href="#"> */}
            <Text fontSize="1.1rem">Solutions</Text>
          {/* </Link> */}
          {/* <Link href="#"> */}
            <Text fontSize="1.1rem">Integrations</Text>
          {/* </Link> */}
          {/* <Link href="#"> */}
            <Text fontSize="1.1rem">Help</Text>
          {/* </Link> */}
          {/* <Link href="#"> */}
            <Text fontSize="1.1rem">Time Trackers Comparison</Text>
          {/* </Link> */}
          {/* <Link href="#"> */}
            <Text fontSize="1.1rem">Blog</Text>
          {/* </Link> */}
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem borderBottom="1px solid lightgray">
        <h2>
          <AccordionButton>
            <Box flex="1" fontWeight="medium" textAlign="left">
              About
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          {/* <Link href="#"> */}
            <Text fontSize="1.1rem">About TMetric</Text>
          {/* </Link> */}
          {/* <Link href="#"> */}
            <Text fontSize="1.1rem">Terms of Services</Text>
          {/* </Link> */}
          {/* <Link href="#"> */}
            <Text fontSize="1.1rem">Privacy Policy</Text>
          {/* </Link> */}
          {/* <Link href="#"> */}
            <Text fontSize="1.1rem">Cookies Policy</Text>
          {/* </Link> */}
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
}
