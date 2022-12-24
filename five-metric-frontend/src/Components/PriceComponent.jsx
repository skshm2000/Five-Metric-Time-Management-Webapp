import { Box, Heading, Flex,Text} from '@chakra-ui/react';
import React from 'react';
import styles from "../Styles/PriceChart.module.css"


const PriceComponent = ({value,isChecked}) => {
  
    return (
        <Box className={styles.priceSheetBox}>
             <Box className={styles.individualPriceButtonDiv}>
                <Flex  align={'center'} justifyContent="center">
                <Heading className={styles.designationText}>Business</Heading>
                <div className={styles.iDiv}> <div>i</div></div>
                </Flex>
                <Box  align={'center'} className={styles.priceTag}>
                     {!isChecked ?    ( 
                     <Flex align={'center'} justifyContent='center'>
                        <Text fontSize={'20px'} fontWeight='bold' marginTop={'20px'} marginRight='7px'>$</Text>
                        <Heading 
                      marginTop='20px' _disabled={value>1}> { isChecked ? value *70 : value*7}</Heading>
                      <Text marginTop='25px' marginLeft='10px'>/month</Text></Flex>) 
                      :
                      (
                            <Box>
                                <Flex align={'center'} justifyContent='center'>
                                    <Text fontSize={'20px'} fontWeight='bold' marginTop={'15px'} marginRight='5px'>$</Text>
                                    <Heading _disabled={value>1}>{ isChecked ? value *70 : value*7}</Heading>
                                    <Text marginTop='25px' marginLeft='10px'>/month</Text>
                                </Flex> 
                                <Box className={styles.priceSavingText}>
                                    <h1>You Save $14/ year</h1>    
                                </Box>
                            </Box>                      
                    )}
                </Box>
             </Box>
         {/* ✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂ */}
             <Box className={styles.individualPriceButtonDiv}>
                <Flex  align={'center'} justifyContent="center">
                <Heading className={styles.designationText}>Professional</Heading>
                 <div className={styles.iDiv}><div>i</div></div>
                </Flex>
                <Box className={styles.priceTag}>
                      {!isChecked ?    ( <Flex align={'center'} justifyContent='center'><Text fontSize={'20px'} fontWeight='bold' marginTop={'20px'} marginRight='7px'>$</Text><Heading 
                      marginTop='20px'_disabled={value>1}> { isChecked ? value *50 : value*5}</Heading><Text marginTop='25px' marginLeft='10px'>/month</Text></Flex>) 
                      :(
                            <Box>
                                <Flex align={'center'} justifyContent='center'>
                                    <Text fontSize={'20px'} fontWeight='bold' marginTop={'15px'} marginRight='5px'>$</Text>
                                    <Heading _disabled={value>1}> { isChecked ? value *50 : value*5}</Heading>
                                    <Text marginTop='25px' marginLeft='10px'>/month</Text>
                                </Flex> 
                                <Box className={styles.priceSavingText}>
                                    <h1 style={{textAlign:"center"}}>You Save $10/ year</h1>    
                                </Box>
                            </Box>                      
                    )}
                </Box>
             </Box>
             {/* ✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂✂ */}
             <Box className={styles.individualPriceButtonDiv}>
                <Flex  align={'center'} justifyContent="center">
                <Heading className={styles.designationText}>Free</Heading>
                  <div className={styles.iDiv}> <div>i</div></div>
                </Flex>    
                <Box className={styles.priceTag}>
                    {isChecked ?    ( <Flex align={'center'} justifyContent='center'><Text fontSize={'20px'} fontWeight='bold' marginTop={'20px'} marginRight='7px'>$</Text><Heading 
                    marginTop='15px' _disabled={value>1}> 0</Heading><Text marginTop='25px' marginLeft='10px'>/month</Text></Flex>) :(
                            <Flex align={'center'} justifyContent='center'><Text fontSize={'20px'} fontWeight='bold' marginTop={'20px'} marginRight='7px'>$ </Text><Heading marginTop='15px' _disabled={value>1}> 0</Heading><Text marginTop='25px' marginLeft='10px'>/month</Text></Flex>                       
                    )}        
                </Box>           
            </Box>  
        </Box>
    );
}

export default PriceComponent;
