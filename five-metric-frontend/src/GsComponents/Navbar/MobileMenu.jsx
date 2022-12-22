import { Box, Flex, useDisclosure } from "@chakra-ui/react";
import { HiMenuAlt1 } from "react-icons/hi";
import { IoCloseSharp } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";
import Accordian from "./Accordian";
import BrandLogo from "./BrandLogo";
import menuItems from "./menuItems.json";

 function MobileMenu() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box>
      <Flex
        alignItems="center"
        justifyContent="space-between"
        padding="0.75rem 2rem"
        position="relative"
      >
        <Box></Box>
        <BrandLogo />
        <Box
          onClick={onToggle}
          as={isOpen ? IoCloseSharp : HiMenuAlt1}
          size="1.6rem"
          transition="0.5s all ease-in"
        />
      </Flex>
      <Box>
        <Box
          display={isOpen ? "block" : "none"}
          transition="all 0.3s ease-in-out"
          padding="1rem 2rem"
          borderTop={isOpen ? "1px solid lightgray" : "0"}
          boxShadow="rgba(149, 157, 165, 0.2) 0px 6px 5px 0px"
          zIndex="1000"
          fontWeight="medium"
          position="absolute"
          width="100%"
          backgroundColor="white"
          paddingBottom="3rem"
        >
          <Accordian
            menuTitle="Why TMetric"
            menuItems={menuItems.tmetric}
            subTitle="Features"
          />
          <Accordian
            menuTitle="Apps & Integrations"
            menuItems={menuItems.appIntegration}
            subTitle="Integrations"
          />
          <Link to='/pricing'>
          <Box padding="0.75rem 1rem" borderBottom="1px solid lightgray">
            Pricing
          </Box></Link>
          <Box padding="0.75rem 1rem" borderBottom="1px solid lightgray">
            Support
          </Box>
          <Box padding="0.75rem 1rem" borderBottom="1px solid lightgray">
            Blog
          </Box>

          <Box marginTop="1rem">
            <NavLink to="/login">
              <Box
                textAlign="center"
                padding="0.35rem 0"
                border="1px solid #e2e7eb"
                borderRadius="5px"
                _hover={{
                  backgroundColor: "#e2e7eb",
                }}
              >
                Log In
              </Box>
            </NavLink>
            <NavLink to="/signup">
              <Box
                textAlign="center"
                padding="0.35rem 0"
                border="1px solid #3070F1"
                borderRadius="5px"
                margin="1rem 0"
                color="#3070F1"
                _hover={{
                  backgroundColor: "#3070F1",
                  color: "white",
                }}
              >
                Sign Up
              </Box>
            </NavLink>
            <Box
              textAlign="center"
              padding="0.35rem 0"
              border="1px solid #e2e7eb"
              borderRadius="5px"
              _hover={{
                backgroundColor: "#e2e7eb",
              }}
            >
              English
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
export default MobileMenu