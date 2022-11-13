import { Flex, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { FaStar, FaStarHalf } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import "./Review.css"


const Review = () => {
  return (
    <>
      <div className="review">
        <h1>Read Hundreds of Reviews</h1>
        <Flex w="fit-content" m="auto" alignSelf="center" gap="15px">
          <FaStar color='orange' size={60} />
          <FaStar color='orange' size={60} />
          <FaStar color='orange' size={60} />
          <FaStar color='orange' size={60} />
          <FaStarHalf color='orange' size={60} />
        </Flex>
        <h1>4.5 Customer Rating</h1>
        <Link to="/"><h2>242 Reviews</h2></Link>
      </div>
      <div className='business'>
        <Text fontSize="20px">Used and trusted by 3000+ businesses in the world</Text>
        <Flex gap="20px">
          <img src="https://tmetric.com/media/wlmpffzm/logo_business_endygo.png" alt="" />
          <img src="https://tmetric.com/media/0ddgehbk/logo_business_itsyndicate.png" alt="" />
          <img src="https://tmetric.com/media/rmvok0xh/logo_business_050media.png" alt="" />
          <img src="https://tmetric.com/media/rmvok0xh/logo_business_050media.png" alt="" />
          <img src="https://tmetric.com/media/ccpn231z/logo-business-jot-digi-tal.svg" alt="" />
          <img src="https://tmetric.com/media/z0fhmi1j/logo-business-freshlab.svg" alt="" />
          <img src="https://tmetric.com/media/xjogm2h2/logo-business-mvad.svg" alt="" />
          <img src="https://tmetric.com/media/nvalaok1/logo_business_swaven.png" alt="" />
        </Flex>
      </div>
      
    </>
  )
}

export default Review
