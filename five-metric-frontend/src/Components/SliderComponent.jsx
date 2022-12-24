import { 
    Box, 
    Divider, 
    Flex, 
    Heading, 
    Switch, 
    Text } from '@chakra-ui/react';
import React from 'react';
import { useState } from 'react';

import {AiFillStepForward} from "react-icons/ai"
import styles from "../Styles/SliderComponent.module.css"
import CorrectionList from './CorrectionList';
import PriceComponent from './PriceComponent';

const SliderComponent = () => {

    const [value,setValue] = useState(1)
    const [isChecked,setIsChecked] = useState(false)
   


    const handleTeamChange = (e) =>{
         setValue(e.target.value >= 1 && e.target.value <= 200 ? e.target.value : '1')
    }

    const handleSwitch = (e) =>{
        setIsChecked(e.target.checked)
      
    }
    return (
    <div>
        <Box className={styles.sliderComponentMain}>

                <Flex className={styles.switcherFlex}>
                    <Text className={styles.monthlyText}>Monthly</Text>
                    <Switch flexDirection={'row'} id='ischecked' onChange={handleSwitch} className={styles.Switcher} colorScheme='green' size='lg' />
                    <Text className={styles.annuallyText}>Annually</Text>
                    <Divider className={styles.verticalDivider} orientation='vertical'/>
                </Flex>

                <Flex className={styles.countSliderFlex}>
                    <Heading  as='h3' size='md'>Team Size</Heading>
                    <input className={styles.countShowInput} type="number"
                    onChange={handleTeamChange}
                    placeholder={value}
                    />
                    <input
                    placeholder={<AiFillStepForward/>}
                    className={styles.inputRange}
                    onChange={handleTeamChange}
                    value={value}
                    name='range'
                    min='1'
                    max='200'
                    type={'range'}/>
                </Flex>
        </Box>
        <PriceComponent value={value} isChecked={isChecked}/>
        <CorrectionList/>
    </div>
    );
}

export default SliderComponent;
