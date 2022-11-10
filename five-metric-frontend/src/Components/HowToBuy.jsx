import { Button, Flex, Grid, Heading, Text } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';
import styles from "../Styles/HowToBuy.module.css"

const HowToBuy = () => {
    return (
        <div className={styles.howToBuyGrid}>
            <Heading className={styles.howToBuyMainHead}>How to Buy?</Heading>
            <Flex className={styles.howToFlex}>
                <Button>1</Button>
                <Text className={styles.howtoText}><Link className={styles.LinkColor} to='/login'>Log in</Link> to your Five Metric account. If you don't have one, <Link className={styles.LinkColor} to='/signup'>sign up</Link> now.</Text>
            </Flex>
              <Flex className={styles.howToFlex}>
                <Button>2</Button>
                <Text className={styles.howtoText}>On the main menu, click <Link className={styles.boldText}>Workspace</Link> and select <Link className={styles.boldText}>Subscription</Link>.</Text>
            </Flex>
              <Flex className={styles.howToFlex}>
                <Button>3</Button>
                <Text className={styles.howtoText}>On the subscription page click <Link className={styles.boldText}>Upgrade Now</Link>.</Text>
            </Flex>
              <Flex className={styles.howToFlex}>
                <Button>4</Button>
                <Text className={styles.howtoText}>Enter your team size, select subscription plan, and click <Link className={styles.boldText}>Proceed To Checkout</Link>.</Text>
            </Flex>
              <Flex className={styles.howToFlex}>
                <Button>5</Button>
                <Text className={styles.howtoText}>On the shopping cart page enter your Billing Information and select Payment Options.</Text>
            </Flex>
              <Flex className={styles.howToFlex}>
                <Button>6</Button>
                <Text className={styles.howtoText}>Click <Link className={styles.boldText}>Continue</Link> to place an order.</Text>
            </Flex>
           
        </div>
    );
}

export default HowToBuy;
