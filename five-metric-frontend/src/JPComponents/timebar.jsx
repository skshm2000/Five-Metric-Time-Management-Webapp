import { Box,  Flex,  Text } from "@chakra-ui/react"
import {MdOutlineGraphicEq} from "react-icons/md"

export const TimeBar=()=>{
    return (
      <>
        <Box p={"20px"} borderRadius={5} mt={10} border={"1px solid grey"}>
          <Box width={"180px"}>
            {" "}
            {/* // time div */}
            <Text>Time</Text>
            <Text>0 min</Text>
          </Box>
          {/* time bar */}
          <Box margin={"auto"} height={"15px"} width="90%" bg={"lightgrey"}>
            <Flex gap={"125px"}>
              <Box
                bg={"white"}
                mt={3}
                title="12:00am"
                fontSize={"4px"}
                h={"10px"}
                width="5px"
                border="1px solid black"
              >
                <Text fontSize={"9px"} w={12}>
                  12:00 am
                </Text>
              </Box>

              <Box
                bg={"white"}
                mt={3}
                title="1:00am"
                fontSize={"5px"}
                h={"10px"}
                width="5px"
                border="1px solid black"
              >
                <Text fontSize={"9px"} w={12}>
                  1:00 am
                </Text>
              </Box>
              <Box
                bg={"white"}
                mt={3}
                title="2:00am"
                fontSize={"5px"}
                h={"10px"}
                width="5px"
                border="1px solid black"
              >
                <Text fontSize={"9px"} w={12}>
                  2:00 am
                </Text>
              </Box>
              <Box
                bg={"white"}
                mt={3}
                title="3:00am"
                fontSize={"5px"}
                h={"10px"}
                width="5px"
                border="1px solid black"
              >
                <Text fontSize={"9px"} w={12}>
                  3:00 am
                </Text>
              </Box>
              <Box
                bg={"white"}
                mt={3}
                title="4:00am"
                fontSize={"5px"}
                h={"10px"}
                width="5px"
                border="1px solid black"
              >
                <Text fontSize={"9px"} w={12}>
                  4:00 am
                </Text>
              </Box>
              <Box
                bg={"white"}
                mt={3}
                title="5:00am"
                fontSize={"5px"}
                h={"10px"}
                width="5px"
                border="1px solid black"
              >
                <Text fontSize={"9px"} w={12}>
                  5:00 am
                </Text>
              </Box>
              <Box
                bg={"white"}
                mt={3}
                title="6:00am"
                fontSize={"5px"}
                h={"10px"}
                width="5px"
                border="1px solid black"
              >
                <Text fontSize={"9px"} w={12}>
                  6:00 am
                </Text>
              </Box>
              <Box
                bg={"white"}
                mt={3}
                title="7:00am"
                fontSize={"5px"}
                h={"10px"}
                width="5px"
                border="1px solid black"
              >
                <Text fontSize={"9px"} w={12}>
                  7:00 am
                </Text>
              </Box>
              <Box
                bg={"white"}
                mt={3}
                title="8:00am"
                fontSize={"5px"}
                h={"10px"}
                width="5px"
                border="1px solid black"
              >
                <Text fontSize={"9px"} w={12}>
                  8:00 am
                </Text>
              </Box>
              <Box
                bg={"white"}
                mt={3}
                title="9:00am"
                h={"10px"}
                width="5px"
                border="1px solid black"
              >
                <Text fontSize={"10px"} w={12}>
                  9:00 am
                </Text>
              </Box>
            </Flex>
          </Box>
        </Box>
      </>
    );
}