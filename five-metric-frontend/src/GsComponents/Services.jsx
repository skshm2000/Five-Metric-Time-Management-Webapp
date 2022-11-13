import React from 'react'
import "./Services.css"
import gsuite from "../GsAssets/gsuite.png"
import msoffice from "../GsAssets/msoffice.png"
import googlekeep from "../GsAssets/googlekeep.png"
import wrike from "../GsAssets/wrike.png"
import zendesk from "../GsAssets/zendesk.png"
import redmine from "../GsAssets/redmine.png"
import trello from "../GsAssets/trello.png"
import docs from "../GsAssets/docs.png"
import github from "../GsAssets/github.png"
import excel from "../GsAssets/excel.png"
import asana from "../GsAssets/asana.png"
import jira from "../GsAssets/jira.png"
import gitlab from "../GsAssets/gitlab.png"
import { Button, Heading, Stack, Text, Flex } from '@chakra-ui/react'

const Services = () => {
  return (
    <Stack spacing="20px">
      <Heading textAlign={"center"} fontSize="45px">Integrate time tracker tool with 50+ <br/>popular services</Heading>
      <Text textAlign={"center"} fontSize='19px'>5Metric integrates with dozens of services, which lets you measure progress and activity in any tool you use.</Text>
      <Flex alignSelf="center" gap="20px"> 
        <Button variant="solid" colorScheme="blue">Start Free Trial</Button>
        <Text color="rgb(49, 130, 206)">Explore All Integrations</Text>
      </Flex>
      <Flex alignSelf='center'>
      <img src={gsuite} alt="" />
      <img src={msoffice} alt="" />
      <img src={googlekeep} alt="keep" />
      <img src={github} alt="" />
      <img src={excel}alt="" />
      <img src={asana} alt="" />
      <img src={jira} alt="" />
      <img src={gitlab} alt="" />
      </Flex>
      <Flex alignSelf='center'>
      <img src={docs} alt="" />
      <img src={trello} alt="" />
      <img src={redmine} alt="" />
      <img src={zendesk} alt="" />
      <img src={wrike} alt="" />
      </Flex>
      

      
    </Stack>
  )
}

export default Services
