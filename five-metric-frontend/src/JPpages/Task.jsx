import { Box, Button, Flex, Menu, MenuButton, MenuItem, MenuList, Text } from "@chakra-ui/react"
import { BsChevronDown } from "react-icons/bs";
import { GrFormAdd } from "react-icons/gr";

export const Task=()=>{
    return (
      <>
        <Box>
          <Flex gap={5}>
            <Text fontSize={"26px"}>My Task</Text>
            <Text p={1} color={"lightgrey"} fontSize={"20px"}>
              |
            </Text>
            <Box>
              <Menu>
                <MenuButton
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
          <Box>
            <Button color={"white"} leftIcon={<GrFormAdd color="white" />}>
              New Task
            </Button>
          </Box>
        </Box>
      </>
    );

}