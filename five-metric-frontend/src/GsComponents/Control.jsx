import React from 'react'
import { Link } from 'react-router-dom'
import "./Control.css"
import { Flex, Text, Box, Button, UnorderedList, ListItem } from '@chakra-ui/react'

const Control = () => {
  return (
    <Flex className='control'>
      <Box p="4%" w="50%" className='control_text'>
        <Text fontSize="45px" fontWeight="bold">Take effective control of working time</Text>
        <UnorderedList>
            <ListItem>
                timekeeping
            </ListItem>
            <ListItem>
            sites and apps monitoring
            </ListItem>
            <ListItem>
            activity tracking
            </ListItem>
            <Link to="#" className='blue'>
            <ListItem>
            screenshots capturing
            </ListItem>
            </Link>
            <ListItem>
            task management
            </ListItem>
            <Link to="#" className='blue'>
            <ListItem>
            50+ integrations
            </ListItem>
            </Link>
            <Link to="#" className='blue'>
            <ListItem>
            work schedule
            </ListItem>
            </Link>
        </UnorderedList>
        <Button variant="solid" colorScheme="blue" mt="20px">Start Free Trial</Button>
      </Box>
      <Box pt="3%" w="50%">
        <img src="https://tmetric.com/media/kssowlxe/img-activity-cases.svg" alt="myactivity"/>
      </Box>
    </Flex>
  )
}

export default Control





