import {
  Box,
  Button,
  Checkbox,
  Divider,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  VisuallyHidden,
  VisuallyHiddenInput,
} from "@chakra-ui/react";
import {
  FormControl,
  FormLabel,
  Input,
  Select,
  Table,
 
  TableContainer,
  Tbody,
  Td,

  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import {VscDebugStart} from "react-icons/vsc"
import {BsFillStopFill} from "react-icons/bs"
import {BiCalendar} from "react-icons/bi"

import { TimeBar } from "../JPComponents/timebar";

export const Time = () => {
  const [Stime, setStartTime] = useState();
  const [etime, setEndTime] = useState();
  const [tTime, setTotalTime] = useState();
  const [add, setAdd] = useState(false);
  const [task, setTask] = useState("");
  const [project, setProject] = useState("");
  const [tag,setTag]=useState("")
  const [addTask,setAddTask]=useState([])

  const handleAddTimeEntry = () => {
    setAdd(true);
  };
  const handleTimeClose = () => {
    setAdd(false);
  };
  const handleSubmit=(e)=>{
    e.preventDefault()
  }
  const handleSelectTask = (e) => {
    setTask(e.target.value);
    
  };
  return (
    <>
    <Box h={5}></Box>
      <Box margin={"auto"} width={"90%"}>
        <Flex w={{ md: "50%", lg: "100%" }} gap={"42%"}>
          <Flex w={{ lg: "40%" }} gap={6}>
            <Button borderRadius={"47%"} bg={"#17c22e"}>
              <VscDebugStart color="white" />
            </Button>
            <Button borderRadius={"47%"}>
              <BsFillStopFill color="grey" />
            </Button>
            <Text fontSize={"21px"}>My Time </Text>
            <Text>|</Text>
            <Box>
              <Menu>
                <MenuButton
                  color={"grey"}
                  as={Button}
                  rightIcon={<BsChevronDown />}
                >
                  Select User or Team
                </MenuButton>
                <MenuList>
                  <MenuItem>Download</MenuItem>
                  <MenuItem>Create a Copy</MenuItem>
                  <MenuItem>Mark as Draft</MenuItem>
                  <MenuItem>Delete</MenuItem>
                </MenuList>
              </Menu>
            </Box>
          </Flex>
          <Box>
            {/* <Calendar view="month" defaultValue={new Date()} /> */}
            <Flex>
              <VisuallyHidden>
                {" "}
                <input type="date" />
              </VisuallyHidden>
              <Text mt={2} fontSize={"20px"}>
                <BiCalendar />
              </Text>
              <Text fontSize={"22px"}>Today</Text>
              <Button borderRadius={"50%"} bg={"white"} title="Previoues day">
                &lt;
              </Button>
              <Button
                title="Today"
                bg={"white"}
                borderRadius={"50%"}
                fontSize={20}
              >
                {" "}
                &sdot;
              </Button>
              <Button
                title="Next Day"
                borderRadius={"50%"}
                bg={"white"}
                isDisabled
              >
                &gt;
              </Button>
            </Flex>
          </Box>
        </Flex>
        <TimeBar />
        <Box borderRadius={5} mt={10} border={"1px solid grey"}>
          <Flex p={"20px"} gap={10}>
            <Checkbox size="lg"></Checkbox>
            <Button onClick={handleAddTimeEntry}>Add time Entry</Button>
            <Button>Add break</Button>
          </Flex>
          <Divider />
          <Flex gap={"50%"}>
            {/* adding task div */}
            <Flex p={"20px"} gap={5}>
              <Checkbox size="lg"></Checkbox>
              <Text>{task}</Text>
            </Flex>
            <Box>
              <Flex p={"20px"} gap={10}>
                <Text>{project}</Text>
                <Text>{tag}</Text>
                <Text>
                  {Stime}-{etime}
                </Text>
                <Text>{tTime}</Text>
                <Button>Start</Button>
              </Flex>
            </Box>
          </Flex>
        </Box>
        {/* Add entry form  */}
        <Box>
          {add ? (
            <Box border={"1px solid grey"}>
              <FormControl onSubmit={handleSubmit}>
                <FormLabel ml={5}>Description</FormLabel>
                <Flex>
                  <Select
                    onChange={handleSelectTask}
                    ml={5}
                    mt={"16px"}
                    w={"800px"}
                    placeholder="Describe your task"
                  >
                    <option value={"Your work"}>Your work</option>
                    <option value={"New work"}>New work</option>
                  </Select>

                  <TableContainer mt={"-40px"}>
                    <Table variant="unstyled">
                      <Thead>
                        <Tr>
                          <Th>Start time</Th>
                          <Th>EndTime</Th>
                          <Th>Duration</Th>
                        </Tr>
                      </Thead>
                      <Tbody>
                        <Tr>
                          <Td>
                            <Input
                              value={Stime}
                              onChange={(e) => setStartTime(e.target.value)}
                              type={"time"}
                            ></Input>
                          </Td>
                          <Td>
                            <Input
                              value={etime}
                              onChange={(e) => setEndTime(e.target.value)}
                              type={"time"}
                            ></Input>
                          </Td>
                          <Td>
                            <Input
                              value={tTime}
                              onChange={(e) => setTotalTime(e.target.value)}
                              type={"time"}
                            ></Input>
                          </Td>
                        </Tr>
                      </Tbody>
                    </Table>
                  </TableContainer>
                </Flex>
                <TableContainer width={"850px"}>
                  <Table variant="unstyled">
                    <Thead>
                      <Tr>
                        <Th>Projects</Th>
                        <Th>Tags</Th>
                      </Tr>
                    </Thead>
                    <Tbody>
                      <Tr>
                        <Td>
                          <Select
                            onChange={(e) => setProject(e.target.value)}
                            w={"350px"}
                            placeholder="Select project"
                          >
                            <option value={"Sample Project"}>Your work</option>
                            <option value={"Demo"}>New work</option>
                          </Select>
                        </Td>
                        <Td>
                          <Input
                            value={tag}
                            onChange={(e) => setTag(e.target.value)}
                            placeholder="Select tags"
                            width={"350px"}
                            type={"text"}
                          ></Input>
                        </Td>
                      </Tr>
                      <Tr>
                        <Td>
                          <Button
                            onClick={handleTimeClose}
                            bg={"blue"}
                            color="white"
                          >
                            Save
                          </Button>
                          <Button onClick={handleTimeClose} ml={5}>
                            Cancel
                          </Button>
                        </Td>
                      </Tr>
                    </Tbody>
                  </Table>
                </TableContainer>
              </FormControl>
            </Box>
          ) : null}
        </Box>
      </Box>
    </>
  );
};
