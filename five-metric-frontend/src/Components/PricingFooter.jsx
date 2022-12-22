import { Box, Button, Heading, Image } from '@chakra-ui/react';
import React from 'react';
import {Link } from "react-router-dom"
import pricingfooter from "../assets/pricingfooter.png"
import styles from "../Styles/PricingFooter.module.css"
const PricingFooter = () => {
       const token = localStorage.getItem("token")
    console.log(token)

    
    return (
        <Box className={styles.pricingFooter}>          
                <Image className={styles.footerPriceImage} width={'100%'} src={pricingfooter}/>
                <Heading className={styles.footerPriceHeading}>Make time work for you!</Heading>
                <Link to={token !== null ? "/time" : "/login"}>
                    <Button colorScheme={'blue'} className={styles.footerPriceButton}>Start Free Trial</Button>
                </Link>
        </Box>
    );
}

export default PricingFooter;
