import { Box, Heading,Text } from '@chakra-ui/react';
import React from 'react';
import styles from "../Styles/TopHeading.module.css"
const TopHeading = () => {
    return (
        <Box className={styles.priceHeadingBox}>
                <pattern className={styles.priceHeading}>Pricing</pattern>
                <Text className={styles.priceHeadingText}>All plans include free 30-day trial. No credit card required!</Text>
        </Box>
    );
}

export default TopHeading;
