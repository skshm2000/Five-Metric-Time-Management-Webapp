import { Button, Divider, Flex, Grid, Text } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';
import styles from "../Styles/BottomButton.module.css"

const BottomButtonComponent = () => {
    return (
        <div className={styles.buttonText}>
            <Grid className={styles.priceButtonFlex}>
            <Link to="/">
                <Button colorScheme={'blue'} className={styles.priceButton}>Get Started</Button>
            </Link>
                <Text className={styles.priceButtonText}>Fully Functional 30-Day Trial</Text>
            </Grid>
            <Text className={styles.checkoutText}>Check out <Link className={styles.checkoutLink}>detailed plan comparison</Link></Text>
            <Divider className={styles.divider} fontSize={'50px'}/>
        </div>
    );
}

export default BottomButtonComponent;
