
import {FcGoogle, }from "react-icons/fc"
import {FaMicrosoft }from "react-icons/fa"
import {FaApple }from "react-icons/fa"



import {
    Button,
    Checkbox,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Link,
    Stack,
    Image,
    Divider,
  } from '@chakra-ui/react'
import { useState } from "react"
  // 

const Signup=()=>{

  const [user,setUser]=useState({
    name:"",
    email:"",
    password:""
})
const handleChange=(e)=>{
const {name,value}=e.target
setUser({...user,[name]:value})
}
console.log("bbbb",user)
    return(
      <Stack bg={"#f6f7f8"}>
        <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }} border={"1px solid lightgrey"} w={"85%"} margin="auto" borderRadius={"5px"} marginTop={"5px"} >
        <Flex  flex={1} align={'center'} justify={'center'}  bg={"white"} borderRadius={"5px"}>
          <Stack spacing={4} w={'65%'} maxW={'md'}>
            <Image src="https://id.tmetric.com/images/tmetric_logo_and_text.svg" height={"49px"} width={"162px"} marginLeft={"100px"} marginTop={"40px"}/>
            <Heading fontSize={'1.625rem'} fontWeight={"16px"} color={"black"}>Create Your Account</Heading>
            <FormControl id="name">
              <FormLabel fontSize={"14px"} color={"#777e85"}> User Name</FormLabel>
              <Input type="text" height={"34px"} placeholder={"John Smith"} value={user.name} name="name" onChange={handleChange}/>
            </FormControl>
            <FormControl id="email">
              <FormLabel fontSize={"14px"} color={"#777e85"}>Email </FormLabel>
              <Input type="email"  height={"34px"}  placeholder="johnsmith@gmail.com" value={user.email} name="email" onChange={handleChange}/>
            </FormControl>
            <FormControl id="password">
              <FormLabel fontSize={"14px"} color={"#777e85"}>Password</FormLabel>
              <Input type="password" height={"34px"}  placeholder="Enter your password" value={user.password} name="password" onChange={handleChange}/>
            </FormControl>
            <Stack spacing={6}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}>
                <Checkbox fontSize={"14px"} color={"#777e85"}>I accept <span style={{color:"#3070F0",fontSize:"14px",fontWeight:"600"}}>Terms of Service</span></Checkbox>
              
              </Stack>
              <Button colorScheme={'blue'} variant={'solid'} height={"34px"} fontSize={"14px"}>
                Sign Up
              </Button>
              <Divider orientation={'horizontal'}/>
              <Stack>
              <Button colorScheme={"none"} border={"1px solid lightgrey"}  leftIcon={<FcGoogle fontSize={"20px"} /> } textColor={"#777E85"} variant={'solid'} height={"34px"} fontSize={"14px"}>
              Sign Up with Google
              </Button>
              <Button colorScheme={"none"} border={"1px solid lightgrey" } mt={"-20px"} leftIcon={<FaMicrosoft  fontSize={"20px"}/>} textColor={"#777E85"} variant={'solid'} height={"34px"} fontSize={"14px"}>
              Sign Up with Microsoft
              </Button>
              <Button colorScheme={"none"} border={"1px solid lightgrey"} leftIcon={<FaApple color={"black"} fontSize={"20px"}/>} textColor={"#777E85"} variant={'solid'} height={"34px"} fontSize={"14px"}>
              Sign Up with Apple
              </Button>
              </Stack>
              <Divider orientation={'horizontal'}  color={"black"}/>
              <Heading fontSize={'14px'} fontWeight={"10px"} paddingBottom="20px">Already have an account?<Link to="/login"color="blue"> Login</Link></Heading>
             
            </Stack>
          </Stack>
        </Flex>
        <Flex flex={1}>
          <Image
          backgroundColor={"#f2f5fc"}
            alt={'Login Image'}
            objectFit={'cover'}
            borderRadius={"5px"}
            src={
                'https://id.tmetric.com/images/side_image_register.svg'
            }
          />
           
        </Flex>
      
      
      </Stack>
      </Stack>
    )
}
export default Signup






// <div className="signup_main_box">
//     <div className="signup_main_box1">
//         <h2>Create Your Account</h2>
//         <form>
//         <label>Name</label>
//         <input  type="text"placeholder="name"/>
//         <br></br>
//         <label>Email</label>
//         <input type="text" placeholder="email"/>
//         <br></br>
//         <label>Password</label>
//         <input  type="password"placeholder="password"/>
//         <br></br>
//         <input type="submit" value="Sign Up"/>
//         <input type="checkbox"/>
//         </form>
//         <p>or</p>
//         <button>Signu Up with Google</button>
//         <br></br>
//         <button>Sign Up with Microsoft</button>
//         <br></br>
//         <button>Signu Up with Apple</button>

//         <p>Already have an account? </p>
//         <Link to="/login">Login</Link>
        
     
//     </div>
//     <div className="signup_main_box2"></div>
// </div>