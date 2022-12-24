import { Flex, Box } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

 function LoginSignupButtons() {
  return (
    <Flex alignItems="center" gap="1rem">
      <NavLink to={"/login"}>
        <Box
          transition="0.15s all ease-in"
          _hover={{
            color: "#3070F1",
          }}
          fontWeight="medium"
        >
          Log In
        </Box>
      </NavLink>
      <NavLink to="/signup">
        <Box
          sx={{
            border: "1px solid #3070F1",
            padding: "6px 15px",
            fontWeight: "medium",
            color: "#3070F1",
            borderRadius: "5px",
            transition: "0.15s all ease-in",
            _hover: {
              backgroundColor: "#3070F1",
              color: "white",
            },
          }}
        >
          Sign Up
        </Box>
      </NavLink>
    </Flex>
  );
}
export default LoginSignupButtons