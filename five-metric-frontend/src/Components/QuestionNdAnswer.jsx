import { Button, Flex, Grid, Heading, Text } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';
import styles from "../Styles/QuestionNdAnswer.module.css"

const QuestionNdAnswer = () => {
    return (
        <div className={styles.howToBuyGrid}>
            <Heading className={styles.howToBuyMainHead}>Other Questions</Heading>
            <Flex className={styles.howToFlex}>
                <button  className={styles.questions}>Q</button>
                <Text className={styles.questionText}>  Have a large team?</Text>
            </Flex>
              <Flex className={styles.howToFlex}>
                <button className={styles.answers}>A</button>
                <Text className={styles.answerText}>You can save money with our volume discount for teams of 40+ users. Learn more on <Link className={styles.LinkColor}>FAQ</Link>. </Text>
            </Flex>
              <Flex className={styles.howToFlex}>
                <button className={styles.questions}>Q</button>
                <Text className={styles.questionText}>Running a non-profit organization?</Text>
            </Flex>
              <Flex className={styles.howToFlex}>
                <button className={styles.answers}>A</button>
                <Text className={styles.answerText}>We offer special <Link className={styles.LinkColor}>pricing options for non-profit</Link> and education organizations. To apply, please <Link className={styles.LinkColor}>contact</Link> the sales team.</Text>
            </Flex>
              <Flex className={styles.howToFlex}>
                <button className={styles.questions}>Q</button>
                <Text className={styles.questionText}>Have other sales questions?</Text>
            </Flex>
              <Flex className={styles.howToFlex}>
                <button className={styles.answers}>A</button>
                <Text className={styles.answerText}>Please contact our sales department at <Link className={styles.LinkColor}>sales@tmetric.com</Link></Text>
            </Flex>
           
        </div>
    );
}

export default QuestionNdAnswer;
