import {
    Button,
    Divider,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Stack,
    useColorModeValue,
    Image,Text,Box
  } from '@chakra-ui/react';
  import {FcGoogle, }from "react-icons/fc"
import {FaMicrosoft }from "react-icons/fa"
import {FaApple }from "react-icons/fa"
import { useState } from 'react';
  
  const Login=()=> {
    const [user,setUser]=useState({
        email:"",
        password:""
    })
    const handleChange=(e)=>{
    const {name,value}=e.target
    setUser({...user,[name]:value})
    }

    console.log(user)
    return (
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack
          spacing={4}
          w={'full'}
          maxW={'md'}
          bg={useColorModeValue('white', 'gray.700')}
          rounded={'xl'}
          border={"1px solid lightgrey"}
          boxShadow={'lg'}
          my={12}>
            
            <Box backgroundColor={"#F2F5FC"} borderRadius="10px" >
            <Image src="https://id.tmetric.com/images/tmetric_logo_and_text.svg" height={"49px"} width={"162px"} marginLeft={"100px"} marginTop={"40px"} backgroundColor={"#F2F5FC"}/>
          <Heading lineHeight={1.1} fontSize={{ base: '2xl', md: '3xl' }} fontWeight={"16px"} color={"black"} backgroundColor={"#F2F5FC"} pb="12px">
          Log into TMetric
          </Heading>
            </Box>
            <Stack p={6}>
          <FormControl  >
            <FormLabel fontSize={"14px"}>Email </FormLabel>
            <Input
              placeholder="johnsmith@gmail.com"
              height={"34px"}
              _placeholder={{ color: 'gray.500' }}
              type="email"
              value={user.email} name="email" onChange={handleChange}
              
            />
          </FormControl>
          <FormControl  >
            <FormLabel fontSize={"14px"}>Password</FormLabel>
            <Input type="password"   placeholder="Enter your password" height={"34px"} value={user.password} name="password" onChange={handleChange}/>
          </FormControl>
          <Stack spacing={6}>
            <Button
              bg={'blue.400'}
              height={"34px"} 
              fontSize={"14px"}
              color={'white'}
              _hover={{
                bg: 'blue.500',
              }}>
              Log In
            </Button>
            <Divider orientation={'horizontal'}/>
            <Stack>
              <Button colorScheme={"none"} border={"1px solid lightgrey"}  leftIcon={<FcGoogle fontSize={"20px"} /> } textColor={"#777E85"} variant={'solid'} height={"34px"} fontSize={"14px"}>
              Sign Up with Google
              </Button>
              <Button colorScheme={"none"} border={"1px solid lightgrey" } marginTop="-80px" leftIcon={<FaMicrosoft  fontSize={"20px"}/>} textColor={"#777E85"} variant={'solid'} height={"34px"} fontSize={"14px"}>
              Sign Up with Microsoft
              </Button>
              <Button colorScheme={"none"} border={"1px solid lightgrey"} leftIcon={<FaApple color={"black"} fontSize={"20px"}/>} textColor={"#777E85"} variant={'solid'} height={"34px"} fontSize={"14px"}>
              Sign Up with Apple
              </Button>
              </Stack>
              <Divider orientation={'horizontal'}  color={"black"}/>
              <Flex justifyContent={"space-between"}>
                <Text color={"#3070F0"} fontSize={"14px"}>Can't Log In?</Text>
                <Text color={"#3070F0"} fontSize={"14px"}>Sign Up</Text>
              </Flex>
          </Stack>
          </Stack>
        </Stack>
      </Flex>
    );
  }

  export default Login