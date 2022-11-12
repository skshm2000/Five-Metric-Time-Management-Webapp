import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Checkbox,
  Divider,
  Flex,
  Icon,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Menu,
  MenuButton,
  MenuItem,
  MenuItemOption,
  MenuList,
  MenuOptionGroup,
  Text,
} from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import { MdOutlineAdd } from "react-icons/md";
import { AiOutlineSearch } from "react-icons/ai";
import { MdWork } from "react-icons/md";
import { BsThreeDots } from "react-icons/bs";
import { TbArrowBarToRight } from "react-icons/tb";
import { VscDebugStart } from "react-icons/vsc";
import { VscListSelection } from "react-icons/vsc";
import { AiFillTag } from "react-icons/ai";
import { useState } from "react";
import {AiOutlineCheck} from "react-icons/ai"
import SideBarTrackingComponent from "../JPComponents/SideBarTrackingComponent";

export const Task = () => {
  const [openbox, setOpenbox] = useState(false);
  const [isComplete, setComplete] = useState(false);
  const [task, setTask] = useState([]);
  const [taskname, setTaskName] = useState("");
  const [project, setProject] = useState("");
  const [asignee, setAsignee] = useState("");
  const [date, setDate] = useState();
  const [des, setDes] = useState("");
  const [tag, setTag] = useState("");

  const handleOpenBox2 = () => {
    setOpenbox(true);
  };
  const handleCloseBox2 = () => {
    setOpenbox(false);
  };
  return (
    <>
      <Flex>
        <Box>
          <SideBarTrackingComponent />
        </Box>
        <Box mt={"50px"} ml={"90"} width={"79%"} >
          <Flex gap={5}>
            <Text fontSize={"26px"}>My Task</Text>
            <Text p={1} color={"lightgrey"} fontSize={"20px"}>
              |
            </Text>
            <Box>
              <Menu>
                <MenuButton
                  variant="outline"
                  color={"grey"}
                  as={Button}
                  rightIcon={<BsChevronDown />}
                >
                  Select Assignee
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
          <Flex mt={6} gap={3}>
            {/* client select tag */}
            <Box>
              <Menu closeOnSelect={false}>
                <MenuButton
                  variant="outline"
                  width={"130px"}
                  as={Button}
                  rightIcon={<BsChevronDown />}
                >
                  Client : All
                </MenuButton>
                <MenuList>
                  <MenuOptionGroup w={"200px"} defaultValue="" type="radio">
                    <MenuItem value="client name">
                      {" "}
                      <Box
                        boxSize="2rem"
                        borderRadius="full"
                        bg={"#00ff0f"}
                        mr="12px"
                      />
                      <span>Client name</span>
                    </MenuItem>
                  </MenuOptionGroup>
                </MenuList>
              </Menu>
            </Box>
            {/* Project select tag */}
            <Box>
              <Menu>
                <MenuButton
                  variant="outline"
                  width={"137px"}
                  as={Button}
                  rightIcon={<BsChevronDown />}
                >
                  Project : All
                </MenuButton>
                <MenuList>
                  <MenuItem minH="48px">
                    <Box
                      boxSize="2rem"
                      borderRadius="full"
                      bg={"red"}
                      mr="12px"
                    />
                    <span>Sample Project</span>
                  </MenuItem>
                  <MenuItem minH="40px">
                    <Box
                      boxSize="2rem"
                      borderRadius="full"
                      bg={"red"}
                      mr="12px"
                    />
                    <span>Project Name</span>
                  </MenuItem>
                </MenuList>
              </Menu>
            </Box>
            <Box>
              {/* tag menu */}
              <Menu>
                <MenuButton
                  variant="outline"
                  width={"115px"}
                  as={Button}
                  rightIcon={<BsChevronDown />}
                >
                  Tag : All
                </MenuButton>
                <MenuList>
                  <MenuItem>
                    <Checkbox> </Checkbox>
                    <span> No tag</span>
                  </MenuItem>
                  <MenuItem>
                    <Checkbox> </Checkbox>
                    <span> No work type</span>
                  </MenuItem>
                  <MenuOptionGroup color={"grey"} title="Work type">
                    <MenuItem value="email">
                      <Checkbox> </Checkbox> <MdWork> </MdWork>{" "}
                      <span> Design</span>
                    </MenuItem>
                    <MenuItem value="email">
                      <Checkbox> </Checkbox> <MdWork> </MdWork>{" "}
                      <span> Development</span>
                    </MenuItem>
                    <MenuItem value="email">
                      <Checkbox> </Checkbox> <MdWork> </MdWork>{" "}
                      <span> Implmentation</span>
                    </MenuItem>
                    <MenuItem value="email">
                      <Checkbox> </Checkbox> <MdWork> </MdWork>{" "}
                      <span> Testing</span>
                    </MenuItem>
                  </MenuOptionGroup>
                </MenuList>
              </Menu>
            </Box>
            {/* status select tag */}
            <Box>
              <Menu type="checkbox">
                <MenuButton
                  variant="outline"
                  width={"155px"}
                  as={Button}
                  rightIcon={<BsChevronDown />}
                >
                  Status : Open
                </MenuButton>
                <MenuList>
                  <MenuItem>Open</MenuItem>
                  <MenuItem>Completed</MenuItem>
                  <MenuItem>All</MenuItem>
                </MenuList>
              </Menu>
            </Box>
            {/*  creator select tag */}
            <Box>
              <Menu closeOnSelect={false}>
                <MenuButton
                  variant="outline"
                  width={"150px"}
                  as={Button}
                  rightIcon={<BsChevronDown />}
                >
                  Creator : Any
                </MenuButton>
                <MenuList minWidth="240px">
                  <MenuOptionGroup defaultValue="Any" type="radio">
                    <MenuItemOption value="asc">Any</MenuItemOption>
                  </MenuOptionGroup>

                  <MenuOptionGroup title="Members" type="checkbox">
                    <MenuItemOption value="User 1">User1</MenuItemOption>
                    <MenuItemOption value="User 2">User 2</MenuItemOption>
                    <MenuItemOption value="User 3">User 3</MenuItemOption>
                  </MenuOptionGroup>
                </MenuList>
              </Menu>
            </Box>
          </Flex>
          {/* new task big Box */}
          <Box borderRadius={5} mt={5} border={"1px solid lightgrey"}>
            <Flex p={4} gap={"690px"}>
              <Flex p={2} gap={3}>
                <Box>
                  <Button
                    onClick={handleOpenBox2}
                    p={3.5}
                    _hover={{ bg: "#578fff" }}
                    bg={"#3070f0"}
                    color={"white"}
                    leftIcon={<MdOutlineAdd color="white" />}
                    pr={6}
                  >
                    New Task
                  </Button>
                </Box>
                <Box>
                  <Menu>
                    <MenuButton as={Button} rightIcon={<BsChevronDown />}>
                      Sort: <b color="black">Actions</b>
                    </MenuButton>
                    <MenuList MenuItem>
                      <MenuItem>Estimate</MenuItem>
                      <MenuItem>Due Date</MenuItem>
                      <MenuItem>Last Updated</MenuItem>
                      <MenuItem>Newer First</MenuItem>
                      <MenuItem>Older First</MenuItem>
                    </MenuList>
                  </Menu>
                </Box>
              </Flex>
              {/* SElect tags completed.......................... */}
              {/* search  */}
              <Box p={2}>
                <InputGroup>
                  <InputLeftElement
                    children={<AiOutlineSearch color="grey" />}
                  />
                  <Input type="text" placeholder="Search" />
                </InputGroup>
              </Box>
            </Flex>
            <Divider></Divider>
            {/* adding task form AND TASKS DIV */}
            <Flex>
              {/* box 1 */}

              <Box p="25px" height={"400px"} width={"100%"}>
                <Accordion allowToggle>
                  <AccordionItem>
                    <h2>
                      <AccordionButton>
                        <Box flex="1" textAlign="left">
                          {project}
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      <Flex width={"100%"} gap={"160px"}>
                        <Box>{taskname}</Box>
                        <Box>
                          <Flex gap={"30px"}>
                            <Box>
                              <Flex
                                borderRadius={"15px"}
                                p={1}
                                bg={"lightgrey"}
                                gap={2}
                              >
                                <Text mt={1}>
                                  <MdWork />
                                </Text>
                                {tag}
                              </Flex>
                            </Box>
                            <Box>{asignee}</Box>
                            <Box>
                              <Button variant={"unstyled"}>
                                <VscDebugStart />
                              </Button>
                            </Box>
                            <Box></Box>
                          </Flex>
                        </Box>
                      </Flex>
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
              </Box>
              {/* box 2 */}
              {openbox ? (
                <Box borderLeft={"1px solid lightgrey"} p="25px" width={"100%"}>
                  <Flex gap={"300px"}>
                    <Flex gap={3}>
                      <Button border={"1px soild grey"} borderRadius="47%">
                        <VscDebugStart color="green" />
                      </Button>
                      <Button leftIcon={<AiOutlineCheck />}>
                        Mark as complete
                      </Button>
                    </Flex>
                    <Flex gap={3}>
                      <Box title="Delete task" fontSize={"20px"}>
                        <BsThreeDots />
                      </Box>
                      <Box onClick={handleCloseBox2} fontSize={"25px"}>
                        <TbArrowBarToRight />
                      </Box>
                    </Flex>
                  </Flex>
                  <Input
                    value={taskname}
                    onChange={(e) => setTaskName(e.currentTarget.value)}
                    mt={3}
                    variant={"flushed"}
                    placeHolder="Write a task name here "
                  ></Input>
                  <Box mt={4} w={"300px"} display={"flex"} gap="20px">
                    <label htmlFor="">Project</label>
                    <Input
                      value={project}
                      onChange={(e) => setProject(e.target.value)}
                      variant={"flushed"}
                      type="text"
                      placeHolder="Enter project"
                    />
                  </Box>
                  <Box mt={4} w={"300px"} display={"flex"} gap="15px">
                    <label htmlFor="">Asignee</label>
                    <Input
                      value={asignee}
                      onChange={(e) => setAsignee(e.target.value)}
                      variant={"flushed"}
                      type="text"
                      placeHolder="Enter project"
                    />
                  </Box>
                  <Box mt={4} w={"300px"} display={"flex"} gap="22px">
                    <label htmlFor="">Due Date</label>
                    <Input
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      variant={"flushed"}
                      type="date"
                      placeHolder="Enter project"
                    />
                  </Box>
                  <Divider />
                  <Box mt={"10px"} display={"flex"} gap={3}>
                    <Text mt={3}>
                      <VscListSelection />
                    </Text>
                    <Input
                      value={des}
                      onChange={(e) => setDes(e.target.value)}
                      // leftIcon={<VscListSelection/>}
                      variant="flushed"
                      type="text"
                      ml={0}
                      placeholder="Enter task description"
                    />
                  </Box>
                  <Box>
                    <InputGroup>
                      <InputLeftElement
                        variant="flushed"
                        _hover={{ color: "black" }}
                        pointerEvents="none"
                        children={<AiFillTag color="gray.300" />}
                      />
                      <Input
                        value={tag}
                        onChange={(e) => setTag(e.target.value)}
                        variant="flushed"
                        type="tel"
                        placeHolder="Add tag"
                      />
                    </InputGroup>
                  </Box>
                </Box>
              ) : null}
            </Flex>
          </Box>
        </Box>
      </Flex>
    </>
  );
};
