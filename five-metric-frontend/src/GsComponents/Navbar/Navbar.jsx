import { Box, Flex, Container, useMediaQuery } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import BrandLogo from "./BrandLogo";
import LanguageButton from "./LanguageButton";
import LoginSignupButtons from "./LoginSignupButtons";
import MenuLinks from "./MenuLinks";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  const [maxWidthLargeScreen] = useMediaQuery("(min-width: 950px)");

  return (
    <>
      <Box
        position="sticky"
        top="0"
        left="0"
        backgroundColor="white"
        zIndex="999"
        borderBottom="1px solid lightgray"
      >
        {maxWidthLargeScreen ? (
          <Container padding="0.6rem 0" maxW="8xl">
            <Flex justifyContent="space-evenly" alignItems="center">
              <Flex alignItems="center" gap="1rem">
                <NavLink to="/">
                  <BrandLogo />
                </NavLink>
                <LanguageButton />
              </Flex>
              <Box>
                <MenuLinks />
              </Box>
              <LoginSignupButtons />
            </Flex>
          </Container>
        ) : (
          <MobileMenu />
        )}
      </Box>
    </>
  );
};

export default Navbar;
