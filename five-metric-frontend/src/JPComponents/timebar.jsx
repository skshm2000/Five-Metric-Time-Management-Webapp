import { Box,  Button,  Flex,  Input,  Menu,  MenuButton,  MenuItem,  MenuList,  Text, VisuallyHidden } from "@chakra-ui/react"
import {MdOutlineGraphicEq} from "react-icons/md"
import { useSelector, useDispatch } from "react-redux"
import { useEffect, useRef, useState } from "react"
import { dataGetter, entryAdder, taskAdder, entryDeleter, taskDeleter, entryChanger, taskChanger } from "../redux/User Data/userDataActions"
import { BsChevronDown } from "react-icons/bs";
import { VscDebugStart } from "react-icons/vsc";
import { BsFillStopFill } from "react-icons/bs";
import { BiCalendar } from "react-icons/bi";
export const TimeBar=()=>{
  
  let state = useSelector(state=>state)
  let dispatch = useDispatch()
  // console.log(state)

  useEffect(()=>{
    // let entryAdderType = {
    //   token:"1234@rekha",
    //   id:Date.now(),
    //   title:"Test1",
    //   tags:"Design", 
    //   startTime:"1pm",
    //   endTime:"2pm",
    //   projectName:"5Metric",
    //   duration:"1hr"
    // }

    // let taskAdderType = {
    //   token:"1234@rekha",
    //   id:"1668162698616", 
    //   taskId:Date.now(), 
    //   title:"Test Task 1", 
    //   tags:"Design", 
    //   projectName:"Design", 
    //   desc:"This is a test task", 
    //   dueDate:"today"
    // } 

    // let entryDeleterType = {
    //   token:"1234@rekha",
    //   id:"1668165530283"
    // }

    // let taskDeleterType = {
    //   token:"1234@rekha",
    //   entryId:"1668161408069",
    //   "taskId":"1668161449485"
    // }

    // let taskChangerType = {
    //   token:"1234@rekha",
    //   taskId:"1668162775900",
    //   entryId:"1668162698616"

    // }

    // let entryChangerType = {
    //   token:"1234@rekha",
    //   id:"1668162698616"
    // }


    // dispatch(dataGetter({token:"234@rekha"}))
    // dispatch(taskAdder(taskAdderType))
    // dispatch(entryAdder(entryAdderType))
    // dispatch(entryDeleter(entryDeleterType))
    // dispatch(taskDeleter(taskDeleterType))
    // dispatch(entryChanger(entryChangerType))
    // dispatch(taskChanger(taskChangerType))
  }, [])

  const timeRef = useRef(null);
  const [hours, setHours] = useState(new Date().getHours());
  const [minutes, setMins] = useState(new Date().getMinutes());
  const [seconds, setSecs] = useState(new Date().getSeconds());

   	const startCounting = () => {
      if (!timeRef.current) {
        timeRef.current = window.setInterval(() => {
          setHours(new Date().getHours());
          setMins(new Date().getMinutes());
          setSecs(new Date().getSeconds());
        }, 1000);
      }
    };
    const handleStart=()=>{
   
        startCounting();
      
    }
      const handleStop=()=>{
        clearInterval(timeRef.current)
        timeRef.current=null
      }


    return (
      <>
        <Flex w={{ md: "50%", lg: "100%" }} gap={"30%"}>
          <Flex w={{ lg: "50%" }} gap={6}>
            <Button  p={3} onClick={handleStart} borderRadius={"50%"} bg={"#17c22e"}>
              <Text fontSize={"18px"}>
                <VscDebugStart color="white" />
              </Text>
            </Button>
            <Button p={3} onClick={handleStop} fontSize={"18px"} borderRadius={"50%"}>
              <Text>
                <BsFillStopFill color="#ed1212ad" />
              </Text>
            </Button>
            <Text fontSize={"19px"}> My Time </Text>
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
                  <MenuItem>{state.team}</MenuItem>
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
        <Box p={"20px"} borderRadius={5} mt={10} border={"1px solid grey"}>
          <Box width={"180px"}>
            {" "}
            {/* // time div */}
            <Text>Time</Text>
            <Text>
              {hours}:{minutes}:{seconds}
            </Text>
          </Box>
          {/* time bar */}
          <Box mt={2} pb={9}>
            <Box margin={"auto"} height={"15px"} width="90%" bg={"lightgrey"}>
              <Flex gap={"10.5%"}>
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
                  <Box></Box>
                  <Text ml="-20px" fontSize={"9px"} w={12}></Text>
                </Box>
              </Flex>
            </Box>
          </Box>
        </Box>
      </>
    );
}