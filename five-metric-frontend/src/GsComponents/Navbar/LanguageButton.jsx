import { Box, Button, Text, Flex, useDisclosure } from "@chakra-ui/react";
import { TbWorld } from "react-icons/tb";
import { BsCheck } from "react-icons/bs";

 function LanguageButton() {
  const { isOpen, onToggle, onClose } = useDisclosure();
  return (
    <Box position="relative" marginLeft={'-25%'}>
      <Button
        backgroundColor="transparent"
        borderRadius="10px"
        padding="5px 15px"
        border={isOpen ? "5px solid lightgray" : "1px solid lightgray"}
        onClick={onToggle}
        leftIcon={<TbWorld size="1.3rem" />}
      >
        EN
      </Button>
      <Box
        onClick={onClose}
        style={
          isOpen
            ? {
                display: "block",
                position: "absolute",
                backgroundColor: "white",
                padding: "1rem",
                border: "1px solid lightgray",
                borderRadius: "5px",
              }
            : { display: "none" }
        }
      >
        <Flex
          cursor="pointer"
          marginBottom="1rem"
          alignItems="center"
          gap="1rem"
          color="#3070F1"
        >
          <Text fontWeight="medium">English</Text>
          <BsCheck size="25px" />
        </Flex>
        <Flex cursor="pointer" alignItems="center" gap="3rem">
          <Text fontWeight="medium">Deutsh</Text>
        </Flex>
      </Box>
    </Box>
  );
}
export default LanguageButton