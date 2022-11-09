import {
  Box,
  Button,
  Divider,
  Flex,
  GridItem,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { VscDebugStart } from "react-icons/vsc";
import { MdOutlineTimer } from "react-icons/md";
import { BiCalendar } from "react-icons/bi";

export const Work = () => {
  return (
    <>
      <Box h={5}></Box>
      <Box>
        <Text ml={"70px"} w={"120px"} fontSize="26px">
          My Work
        </Text>
        <SimpleGrid
          columns={[1, 1, 1, 1, 2]}
          rowGap={10}
          gap={"10px"}
          width={"90%"}
          m="auto"
        >
          <GridItem mt={10}>
            <Box
              boxShadow={"rgba(149, 157, 165, 0.2) 0px 8px 24px;"}
              border={"1px solid lightgrey"}
              borderRadius={7}
              p={2}
              w={["100%", "100%", "100%", "100%", "100%"]}
            >
              <Flex w="100%" gap="520px">
                <Text fontSize={"17px"} fontWeight={500}>
                  Current task
                </Text>
                <Button borderRadius={"55%"} bg={"#17c22e"}>
                  <VscDebugStart color="white" />
                </Button>
              </Flex>
              <Text fontSize="14px" color={"grey"} margin="auto">
                You can start tracking your time by click on green button
              </Text>
              <Flex mt={9} w="100%" gap="340px">
                <Text fontSize={"14px"}>Description</Text>
                <Text fontSize={"12px"}>
                  <b>(Total time)</b>
                </Text>
              </Flex>
              <Flex mt={2} w="100%" gap="340px">
                <Text fontSize={"12px"}>Project Name</Text>
                <Text fontSize={"12px"}>
                  <b>
                    {new Date().getHours()}:{new Date().getMinutes()} - now
                  </b>
                </Text>
              </Flex>
            </Box>
          </GridItem>
          <GridItem mt={10}>
            <Box
              boxShadow={"rgba(149, 157, 165, 0.2) 0px 8px 24px;"}
              border={"1px solid lightgrey"}
              borderRadius={7}
              p={2}
              w={"100%"}
            >
              <Flex gap={"560px"}>
                <Text fontSize={"17px"} fontWeight={500}>
                  Overview
                </Text>
                <Text
                  padding={1}
                  borderRadius={"70%"}
                  border={"1px solid lightgrey"}
                >
                  {" "}
                  <MdOutlineTimer />
                </Text>
              </Flex>{" "}
              <Text color={"grey"} mt={3} fontSize={"14px"}>
                We analyze your data based on your tracked time
              </Text>
              <Flex mb={"7px"} mt={"30px"} gap={4}>
                <Box
                  border={"1px solid lightgrey"}
                  borderRadius={5}
                  fontWeight={500}
                  bg="#F7FAFC"
                  w={"150px"}
                >
                  <Text fontSize={"12px"} color="grey">
                    Today
                  </Text>
                  <Text color={"#3070f0"} fontSize={"19px"}>
                    3h 28 min
                  </Text>
                </Box>
                <Box
                  border={"1px solid lightgrey"}
                  borderRadius={5}
                  fontWeight={500}
                  bg="#F7FAFC"
                  w={"150px"}
                >
                  <Text fontSize={"12px"} color="grey">
                    This Week
                  </Text>
                  <Text color={"#3070f0"} fontSize={"19px"}>
                    7h 28 min
                  </Text>
                </Box>
                <Box
                  border={"1px solid lightgrey"}
                  borderRadius={5}
                  fontWeight={500}
                  bg="#F7FAFC"
                  w={"150px"}
                >
                  <Text fontSize={"12px"} color="grey">
                    This Month
                  </Text>
                  <Text color={"#3070f0"} fontSize={"19px"}>
                    7h 28 min
                  </Text>
                </Box>
              </Flex>
            </Box>
          </GridItem>
          <GridItem>
            <Box
              boxShadow={"rgba(149, 157, 165, 0.2) 0px 8px 24px;"}
              border={"1px solid lightgrey"}
              borderRadius={7}
              width={"100%"}
            >
              <Flex width={"100px"} padding={"10px"} gap={"560px"}>
                <Text fontSize={"17px"} fontWeight={500}>
                  Calendar
                </Text>
                <Text
                  padding={1}
                  borderRadius={"70%"}
                  border={"1px solid lightgrey"}
                >
                  <BiCalendar />
                </Text>
              </Flex>
              <Divider />
              <Text
                m={"auto"}
                h={"170px"}
                color={"grey"}
                mt={3}
                fontSize={"14px"}
              >
                Connect calender to track your events
              </Text>
            </Box>
          </GridItem>
          <GridItem>
            <Box
              boxShadow={"rgba(149, 157, 165, 0.2) 0px 8px 24px;"}
              border={"1px solid lightgrey"}
              borderRadius={7}
              width={"100%"}
            >
              <Flex padding={"10px"} gap={"560px"}>
                <Box>
                  <Text fontSize={"17px"} fontWeight={500}>
                    Due tasks
                  </Text>
                </Box>
                <Box>
                  <Text
                    padding={1}
                    borderRadius={"70%"}
                    border={"1px solid lightgrey"}
                  >
                    <BiCalendar />
                  </Text>
                </Box>
              </Flex>
              <Divider />
              <Text
                m={"auto"}
                h={"170px"}
                color={"grey"}
                mt={3}
                fontSize={"14px"}
              >
                Create a task and set a due date
              </Text>
            </Box>
          </GridItem>
        </SimpleGrid>
      </Box>
    </>
  );
};
