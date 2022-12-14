import React from 'react'
import "./Improve.css"
import { Flex, UnorderedList, ListItem, Box, Button, Text } from '@chakra-ui/react'

const Improve = () => {
  return (
      <Flex className='improve'>
      <Box  pl="40px" pt="30px" className='improve_text'> 
        <Text fontSize="40px" fontWeight="bold">Improve attendance with time off tracking software</Text>
       
        <UnorderedList mt="25px">
            <ListItem>
            flexible time off policy
            </ListItem>
            <ListItem>
            time off requests management
            </ListItem>
            <ListItem>
            time off calendar
            </ListItem>
            <ListItem>
            pto calculations
            </ListItem>

        </UnorderedList>
        <Button mt="25px" variant="solid" colorScheme="blue">Start Free Trial</Button>
      </Box>
      <Box >
        <img src="https://tmetric.com/media/mlzbtxv5/time-off-calendar-case.svg" alt="myactivity"/>
      </Box>

    </Flex>
  )
}

export default Improve
