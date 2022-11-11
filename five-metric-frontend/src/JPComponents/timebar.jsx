import { Box,  Flex,  Input,  Text } from "@chakra-ui/react"
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
          <Box mt={2} pb={9}>
            <Box margin={"auto"} height={"15px"} width="90%" bg={"lightgrey"}>
              <Flex gap={"115px"}>
                <Box>
                  <Box
                    bg={"white"}
                     mt={3}
                    title="12:00am"
                    fontSize={"4px"}
                    h={"10px"}
                    width="5px"
                    border="1px solid black"
                  ></Box>
                  <Text ml={"-20px"} fontSize={"9px"} w={12}>
                    12:00 am
                  </Text>{" "}
                </Box>
                <Box>
                  <Box
                    bg={"white"}
                    mt={3}
                    title="1:00am"
                    fontSize={"5px"}
                    h={"10px"}
                    width="5px"
                    border="1px solid black"
                  ></Box>
                  <Text ml={"-20px"} fontSize={"9px"} w={12}>
                    1:00 am
                  </Text>
                </Box>
                <Box>
                  <Box
                    bg={"white"}
                    mt={3}
                    title="2:00am"
                    fontSize={"5px"}
                    h={"10px"}
                    width="5px"
                    border="1px solid black"
                  ></Box>
                  <Text ml="-20px" fontSize={"9px"} w={12}>
                    2:00 am
                  </Text>
                </Box>
                <Box>
                  <Box
                    bg={"white"}
                    mt={3}
                    title="2:00am"
                    fontSize={"5px"}
                    h={"10px"}
                    width="5px"
                    border="1px solid black"
                  ></Box>
                  <Text ml="-20px" fontSize={"9px"} w={12}>
                    3:00 am
                  </Text>
                </Box>
                <Box>
                  <Box
                    bg={"white"}
                    mt={3}
                    title="4:00am"
                    fontSize={"5px"}
                    h={"10px"}
                    width="5px"
                    border="1px solid black"
                  ></Box>
                  <Text ml="-20px" fontSize={"9px"} w={12}>
                    4:00 am
                  </Text>
                </Box>
                <Box>
                  <Box
                    bg={"white"}
                    mt={3}
                    title="5:00am"
                    fontSize={"5px"}
                    h={"10px"}
                    width="5px"
                    border="1px solid black"
                  ></Box>
                  <Text ml="-20px" fontSize={"9px"} w={12}>
                    5:00 am
                  </Text>
                </Box>
                <Box>
                  <Box
                    bg={"white"}
                    mt={3}
                    title="6:00am"
                    fontSize={"5px"}
                    h={"10px"}
                    width="5px"
                    border="1px solid black"
                  ></Box>
                  <Text ml="-20px" fontSize={"9px"} w={12}>
                    6:00 am
                  </Text>
                </Box>
                <Box>
                  <Box
                    bg={"white"}
                    mt={3}
                    title="7:00am"
                    fontSize={"5px"}
                    h={"10px"}
                    width="5px"
                    border="1px solid black"
                  ></Box>
                  <Text ml="-20px" fontSize={"9px"} w={12}>
                    7:00 am
                  </Text>
                </Box>
                <Box>
                  <Box
                    
                  ></Box>
                  <Text ml="-20px" fontSize={"9px"} w={12}>
                  
                  </Text>
                </Box>
              </Flex>
            </Box>
          </Box>
        </Box>
      </>
    );
}