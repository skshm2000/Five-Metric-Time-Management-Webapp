import { Box, Button, Flex, Menu, MenuButton, MenuItem, MenuList, Text } from "@chakra-ui/react"
import {BsChevronDown} from "react-icons/bs"
import { TimeBar } from "../JPComponents/timebar";


export const Time=()=>{
    return (
      <>
        <Box>
          <Flex bg={"red"} w={{ md: "50%", lg: "100%" }} gap={"42%"}>
            <Flex w={{ lg: "40%" }} bg={"blue"} gap={6}>
              <Button bg={"#17c22e"}>Start</Button>
              <Button>Stop</Button>
              <Text>My Time </Text>
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
                    <MenuItem>Attend a Workshop</MenuItem>
                  </MenuList>
                </Menu>
              </Box>
            </Flex>
            <Box>
              {/* <Calendar view="month" defaultValue={new Date()} /> */}
              <input type="date" placeholder="Today" />
            </Box>
          </Flex>
          <TimeBar/>
        </Box>
      </>
    );
}