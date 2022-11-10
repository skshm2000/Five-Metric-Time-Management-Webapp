import {
  Box,
  Button,
  Checkbox,
  Divider,
  Flex,
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

export const Task = () => {
  return (
    <>
      <Box border={"1px solid gray"} width={"79%"} m="auto">
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
        <Box border={"1px solid grey"}>
          <Flex mt={10} gap={"700px"}>
            <Flex gap={3}>
              <Box>
                <Button
                  p={3.5}
                  _hover={{ bg: "#578fff" }}
                  bg={"#3070f0"}
                  color={"white"}
                  leftIcon={<MdOutlineAdd color="white" />}
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
            <Box>
              <InputGroup>
                <InputLeftElement children={<AiOutlineSearch color="grey" />} />
                <Input type="text" placeholder="Search" />
              </InputGroup>
            </Box>
          </Flex>
          <Divider></Divider>
          <Flex>
            <Box border="3px solid yellow" width={"100%"}>
              db
            </Box>
            <Box border="3px solid yellow" width={"100%"}>
              dgb
            </Box>
          </Flex>
        </Box>
      </Box>
    </>
  );
};
