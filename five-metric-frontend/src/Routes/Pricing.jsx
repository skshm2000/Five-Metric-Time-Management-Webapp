import { Box, Heading } from '@chakra-ui/react';
import React from 'react';
import BottomButtonComponent from '../Components/BottomButtonComponent';
import HowToBuy from '../Components/HowToBuy';
import PricingFooter from '../Components/PricingFooter';
import SliderComponent from '../Components/SliderComponent';
import TopHeading from '../Components/TopHeading';

const Pricing = () => {
    return (
        <Box>
            <TopHeading/>
            <SliderComponent/>
            <BottomButtonComponent/>
            <HowToBuy/>
            <PricingFooter/>
        </Box>
    );
}

export default Pricing;
