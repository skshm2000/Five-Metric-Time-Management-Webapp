import { Box, Heading } from '@chakra-ui/react';
import React from 'react';
import BottomButtonComponent from '../Components/BottomButtonComponent';
import HowToBuy from '../Components/HowToBuy';
import PricingFooter from '../Components/PricingFooter';
import SliderComponent from '../Components/SliderComponent';
import TopHeading from '../Components/TopHeading';
import Navbar from "../GsComponents/Navbar"
import Footer from "../GsComponents/Footer"
import QuestionNdAnswer from "../Components/QuestionNdAnswer"

const Pricing = () => {
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
