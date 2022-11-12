import { 
  AccordionButton, 
  AccordionIcon, 
  AccordionItem, 
  AccordionPanel, 
  Box, 
  Button, 
  Flex, 
  Image, 
  Text, 
  Accordion, 
  Container, 
  Stack, 
  Divider } from '@chakra-ui/react';
import React, { useState } from 'react';
import {IoIosArrowBack} from "react-icons/io"
import {IoAtCircleOutline,IoShirtOutline} from "react-icons/io5"
import { Link } from 'react-router-dom';
import logo from "../assets/logo.png"
import {BsClockHistory} from "react-icons/bs"
import {BiCustomize ,BiNotepad,BiGridAlt} from "react-icons/bi"
import { AiOutlineTeam,AiFillSetting,AiOutlineTags,AiOutlineAlignLeft } from 'react-icons/ai';
import {VscGraph} from "react-icons/vsc"
import {BsFolder2,BsBuilding} from 'react-icons/bs';
import { CgNotes} from 'react-icons/cg';
import {GiPalmTree} from "react-icons/gi"
import {HiOutlineUserCircle} from "react-icons/hi"
import {FiClipboard} from "react-icons/fi"
import styles from "../Styles/SideBarTrackingComponent.module.css"
import {CgProfile} from "react-icons/cg"

const SideBarTrackingComponent = () => {

  const [sidebar, setSidebar] = useState(false);
  console.log(sidebar);
  const toggleSideBar = ()=>{
      setSidebar((prev)=>!prev)
  }
    return (

  <>  
        <Button onClick={toggleSideBar}  className={ styles.openIcon}><AiOutlineAlignLeft fontSize={'25px'} /></Button>
        <Box className={sidebar ? styles.sidebarMainBox :styles.sidebarMainBoxOpen}>
         
          <Flex className={styles.topMostflex} align={'center'}>
                <Button onClick={toggleSideBar}  _hover={'white'} bg={'white'} className={styles.toggleButton}>
                  <IoIosArrowBack padding='0px' className={styles.toggleButtonIcon}/>
                  </Button>
                <Image className={styles.logoImage}  width={'150px'} src={logo}/>
            </Flex>

            <Box className={styles.timeWorkMainBox}>
                <Link to='/#' className={styles.timeWorkIndividualLink}>
                    <Flex align={'center'} className={styles.timeWorkIndividualFlex}>
                        <BsClockHistory className={styles.timeWorkIndividualIcon}/>
                        <Text className={styles.timeWorkIndividualText}>Time</Text>
                    </Flex>
                </Link>
                <Link to='/#' className={styles.timeWorkIndividualLink}>
                   <Flex className={styles.timeWorkIndividualFlex} align={'center'}>
                      <BiCustomize className={styles.timeWorkIndividualIcon}/>
                      <Text className={styles.timeWorkIndividualText}>My Work</Text>
                  </Flex>
                </Link>
                <Link to='/#' className={styles.timeWorkIndividualLink}>
                    <Flex className={styles.timeWorkIndividualFlex} align={'center'}>
                      <BiNotepad className={styles.timeWorkIndividualIcon}/>
                      <Text className={styles.timeWorkIndividualText}>Tasks</Text>
                    </Flex>
                </Link>
                <Link to='/#' className={styles.timeWorkIndividualLink}>
                  <Flex className={styles.timeWorkIndividualFlex} align={'center'} >
                      <AiOutlineTeam className={styles.timeWorkIndividualIcon}/>
                      <Text className={styles.timeWorkIndividualText}>Team</Text>
                </Flex>
                </Link>
            </Box>
        <Divider />
        <Box className={styles.accordionBox}>
            <Accordion varient='0px' className={styles.accordion} defaultIndex={[1]}   allowMultiple>
                <Container>
                    <Stack>
                  <AccordionItem>
                 <h2>
                    <AccordionButton width={'100%'} border='0px'>
                            <Box className={styles.accordionHeadingBox} flex='1' 
                             border='0px'
                             textAlign='left'>
                            ANALYZE
                            </Box>
                            <AccordionIcon />
                    </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                   <Flex className={styles.accordionIndividualFlexes}>
                      <VscGraph/>
                      <Text className={styles.accordionSubText}>Reports</Text>
                   </Flex>
                    <Flex className={styles.accordionIndividualFlexes}>
                      <IoAtCircleOutline/>
                      <Text className={styles.accordionSubText}>Activity</Text>
                    </Flex>
                    </AccordionPanel>
                </AccordionItem>
                </Stack>
                </Container>

                  <Container>
                    <Stack>
                  <AccordionItem>
                 <h2>
                    <AccordionButton width={'100%'} >
                            <Box className={styles.accordionHeadingBox} flex='1' textAlign='left'>
                            MANAGE
                            </Box>
                            <AccordionIcon />
                    </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                   <Flex className={styles.accordionIndividualFlexes}><BsFolder2/><Text className={styles.accordionSubText}>Projects</Text></Flex>
                    <Flex className={styles.accordionIndividualFlexes}><BsBuilding/><Text className={styles.accordionSubText}>Clients</Text></Flex>

                      <Flex className={styles.accordionIndividualFlexes}><CgNotes/><Text className={styles.accordionSubText}>Invoices</Text></Flex>
                    <Flex className={styles.accordionIndividualFlexes}><GiPalmTree/><Text className={styles.accordionSubText}>Time Off</Text></Flex>
                    </AccordionPanel>
                </AccordionItem>
                </Stack>
                </Container>

                  <Container>
                    <Stack>
                  <AccordionItem>
                 <h2>
                    <AccordionButton width={'100%'}>
                            <Box className={styles.accordionHeadingBox} flex='1' textAlign='left'>
                            WORKSPACE
                            </Box>
                            <AccordionIcon />
                    </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                   <Flex className={styles.accordionIndividualFlexes}><AiFillSetting/><Text className={styles.accordionSubText}>Settings</Text></Flex>
                    <Flex className={styles.accordionIndividualFlexes}><HiOutlineUserCircle/><Text className={styles.accordionSubText}>Members</Text></Flex>

                      <Flex className={styles.accordionIndividualFlexes}><IoShirtOutline/><Text className={styles.accordionSubText}>Teams</Text></Flex>
                    <Flex className={styles.accordionIndividualFlexes}><AiOutlineTags/><Text className={styles.accordionSubText}>Tags </Text></Flex>
                    
                      <Flex className={styles.accordionIndividualFlexes}><BiGridAlt/><Text className={styles.accordionSubText}>Integrations</Text></Flex>
                    <Flex className={styles.accordionIndividualFlexes}><FiClipboard/><Text className={styles.accordionSubText}>Subscription </Text></Flex>
                    </AccordionPanel>
                </AccordionItem>
                </Stack>
                </Container>
            </Accordion>
            </Box>

        <Box className={styles.userProfileSection}>
            <Flex align={'center'} gap='20px' >
                <CgProfile fontSize={'25px'}/>
                <Text>Name</Text>
              </Flex>
        </Box>
        </Box>

    
  </>
    );
}

export default SideBarTrackingComponent;


