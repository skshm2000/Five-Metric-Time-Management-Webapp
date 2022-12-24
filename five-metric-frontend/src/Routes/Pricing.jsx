import { Box, Heading } from '@chakra-ui/react';
import React from 'react';
import BottomButtonComponent from '../Components/BottomButtonComponent';
import HowToBuy from '../Components/HowToBuy';
import PricingFooter from '../Components/PricingFooter';
import SliderComponent from '../Components/SliderComponent';
import TopHeading from '../Components/TopHeading';
import Navbar from '../GsComponents/Navbar/Navbar.jsx';
import Footer from "../GsComponents/Footer/Footer"
import QuestionNdAnswer from "../Components/QuestionNdAnswer"
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';


const Pricing = () => {

    const {pathname} = useLocation()
  
    useEffect(()=>{
        window.scrollTo(0,0)
    }, [pathname])
    
    return (
        <Box>
            <Navbar page="true" />
            <TopHeading/>
            <SliderComponent/>
            <BottomButtonComponent/>
            <HowToBuy/>
            <QuestionNdAnswer />
            <PricingFooter/>
            <Footer/>
        </Box>
    );
}

export default Pricing;
