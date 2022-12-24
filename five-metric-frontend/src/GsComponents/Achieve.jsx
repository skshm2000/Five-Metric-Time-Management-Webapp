import React from 'react'
import "./Achive.css"
import { Box, Text, Flex, UnorderedList, ListItem, Button, Spacer } from '@chakra-ui/react'

const Achieve = () => {
  return (
    <Flex className='achieve'>
      <Box className='achieveimage'>
        <img src="https://tmetric.com/media/lltfuaaz/img-report-cases-svg.svg" alt="myactivity"/>
      </Box>
     <Spacer></Spacer>
      <Box  className='achieve_box'>
        <Text fontSize="40px" fontWeight="bold" className='achieve_text'>Achieve high profitability by using time tracker</Text>

        <UnorderedList mt='25px' fontSize="18px">
            <ListItem>
            project management
            </ListItem>
            <ListItem>
            project budgeting
            </ListItem>
            <ListItem>
            billing and invoicing
            </ListItem>
           
            <ListItem>
            accurate payroll
            </ListItem>
            
            <ListItem>
            detailed reports
            </ListItem>

        </UnorderedList>
        <Button mt="25px" variant="solid" colorScheme="blue">Start Free Trial</Button>
      </Box>
     
    </Flex>
  )
}

export default Achieve
