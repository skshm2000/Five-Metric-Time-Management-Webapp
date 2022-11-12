import { Box, Button, Heading, Image } from '@chakra-ui/react';
import React from 'react';
import pricingfooter from "../assets/pricingfooter.png"
import styles from "../Styles/PricingFooter.module.css"
const PricingFooter = () => {
    return (
        <Box>          
                <Image className={styles.footerPriceImage} width={'100%'} src={pricingfooter}/>
                <Heading className={styles.footerPriceHeading}>Make time work for you!</Heading>
                <Button colorScheme={'blue'} className={styles.footerPriceButton}>Start Free Trial</Button>
        </Box>
    );
}

export default PricingFooter;
