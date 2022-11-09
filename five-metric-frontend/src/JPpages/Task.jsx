import { Box, Button, Flex, Menu, MenuButton, MenuItem, MenuList, Text } from "@chakra-ui/react"
import { BsChevronDown } from "react-icons/bs";

export const Task=()=>{
    return (
      <>
        <Box>
          <Flex>
            <Text>My Task</Text>
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
        </Box>
      </>
    );

}