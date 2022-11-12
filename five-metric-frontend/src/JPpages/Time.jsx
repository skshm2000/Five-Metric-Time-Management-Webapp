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
  Stack,
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
import { useEffect, useRef, useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import { VscDebugStart } from "react-icons/vsc";
import { BsFillStopFill } from "react-icons/bs";
import { BiCalendar } from "react-icons/bi";

import { TimeBar } from "../JPComponents/timebar";
import { useSelector } from "react-redux";
import SideBarTrackingComponent from "../JPComponents/SideBarTrackingComponent";
import { useDispatch } from "react-redux";
import {
  dataGetter,
  entryAdder,
  entryDeleter,
} from "../redux/User Data/userDataActions";
// import styles from "../Styles/SideBarTrackingComponent.module.css";

let EntryInitState = {
  token: "",
  id: Date.now(),
  title: "",
  tags: "",
  startTime: "",
  endTime: "",
  projectName: "",
  duration: "",
};

//need   asignee and Date..
export const Time = () => {
  const token = localStorage.getItem("token") || "1234@rekha";
  const [add, setAdd] = useState(false);
  const [addTask, setAddTask] = useState(EntryInitState);
  const state = useSelector((state) => state);
  const Dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setAddTask({ ...addTask, [name]: value, token });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // setTask([...task, addTask]);
    // console.log(addTask);
    Dispatch(entryAdder(addTask));
  };
  const handleAddTimeEntry = () => {
    setAdd(true);
  };
  const handleTimeClose = () => {
    setAdd(false);
  };

  useEffect(() => {
    Dispatch(dataGetter({ token: token }));
  }, []);

  const handleDelete = (Delid) => {
    let entryDeleterType = {
      token: token,
      id: Delid,
    };
    Dispatch(entryDeleter(entryDeleterType)).then((res) => {
      console.log(res);
    });
    alert("You sure you want to Delete this entry");
  };

  return (
    <>
      <Flex w="100%" >
        <Box w="12%">
          <SideBarTrackingComponent />
        </Box>
        
        <Box mt={10} ml="100px"  width={"75%"} >
          <TimeBar />
          <Box borderRadius={5} mt={10} border={"1px solid grey"}>
            <Flex p={"20px"} gap={10}>
              
              <Button onClick={handleAddTimeEntry}>Add time Entry</Button>
              <Button>Add break</Button>
            </Flex>
            <Divider />
            {state.entries.map((ele) => (
              <>
                <Flex key={ele.id} gap={"40%"}>
                  {/* adding task div */}

                  <Flex p={"20px"} gap={5}>
                    <Checkbox size="lg"></Checkbox>
                    <Text>{ele.title}</Text>
                  </Flex>
                  <Box>
                    <Flex p={"20px"} gap={10}>
                      <Button onClick={() => handleDelete(ele.id)}>
                        Delete
                      </Button>
                      <Text>{ele.tags}</Text>
                      <Text>{ele.startTime}</Text>
                      <Text>-</Text>
                      <Text>{ele.endTime}</Text>
                      <Button>Start</Button>
                    </Flex>
                  </Box>
                </Flex>
              </>
            ))}
          </Box>
          {/* Add entry form  */}
          <Box>
            {add ? (
              <Box p={5} border={"1px solid grey"}>
                <FormControl onSubmit={handleSubmit}>
                  <FormLabel ml={5}>Description</FormLabel>
                  <Flex>
                    <Input
                      name="title"
                      onChange={handleChange}
                      ml={5}
                      mt={"16px"}
                      w={"400px"}
                      placeholder="Describe your task"
                    ></Input>

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
                                name="startTime"
                                onChange={handleChange}
                                type={"time"}
                              ></Input>
                            </Td>
                            <Td>
                              <Input
                                name="endTime"
                                onChange={handleChange}
                                type={"time"}
                              ></Input>
                            </Td>
                            <Td>
                              <Input
                                name="duration"
                                onChange={handleChange}
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
                              name="projectName"
                              onChange={handleChange}
                              w={"350px"}
                              placeholder="Select project"
                            >
                              <option value={"Sample Project"}>
                                Your work
                              </option>
                              <option value={"Demo"}>New work</option>
                            </Select>
                          </Td>
                          <Td>
                            <Input
                              name="tags"
                              onChange={handleChange}
                              placeholder="Select tags"
                              width={"350px"}
                              type={"text"}
                            ></Input>
                          </Td>
                        </Tr>
                        <Tr>
                          <Td>
                            <Button
                              onClick={handleSubmit}
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
      </Flex>
    </>
  );
};
