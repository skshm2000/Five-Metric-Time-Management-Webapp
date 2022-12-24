import { Box, Flex } from "@chakra-ui/react";
import { AiFillYoutube } from "react-icons/ai";
import { BsLinkedin, BsTwitter } from "react-icons/bs";
import { FaFacebookSquare } from "react-icons/fa";

export default function CopyrightSection() {
  let date = new Date();
  return (
    <Box padding="1rem 0">
      <Flex
        alignItems={{
          base: "center",
          xl: "space-between",
          lg: "space-between",
          md: "center",
        }}
        justifyContent={{
          base: "center",
          xl: "space-between",
          lg: "space-between",
          md: "center",
        }}
        flexDirection={{ base: "column", xl: "row", lg: "row", md: "column" }}
        gap="1rem"
      >
        <Box w={{ base: "", xl: "33%", lg: "33%", md: "" }}>
          Copyright &copy; Devart {date.getFullYear()}
        </Box>
        <Box w={{ base: "100%", xl: "33%", lg: "33%", md: "100%" }}>
          <Flex
            justifyContent={{
              base: "center",
              xl: "flex-start",
              lg: "flex-start",
              md: "center",
            }}
            gap="0.75rem"
          >
            <FaFacebookSquare size="1.5rem" fill="gray" />
            <BsTwitter size="1.5rem" fill="gray" />
            <BsLinkedin size="1.5rem" fill="gray" />
            <AiFillYoutube size="1.5rem" fill="gray" />
          </Flex>
        </Box>
        <Box w="10%"></Box>
      </Flex>
    </Box>
  );
}
