import {  Box, Button, Heading, Text } from '@chakra-ui/react'

// icons 
import { faX,faCircleQuestion,faSignal,faGear } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Header({chnageState,state}) {


    if(state === 0){
        return (
            <Box w="100%" maxW="800px" display="flex" justifyContent="space-between" alignItems="center" justifyItems="center" padding=".5rem" borderBottom="1px" borderColor="gray.200">
                <Button color="#858585" onClick={()=>{chnageState(1)}}><FontAwesomeIcon icon={faCircleQuestion} /></Button>
                <Heading fontSize={{ base: '24px', md: '28px', lg: '36px' }}> The <Text as="span" color="#858585"> MFM </Text> Game </Heading>
                {/* <Box display="flex">
                    <Button mr=".5rem" color="#858585" onClick={()=>{chnageState(2)}}><FontAwesomeIcon icon={faSignal} /></Button>
                    <Button color="#858585" onClick={()=>{chnageState(3)}}><FontAwesomeIcon icon={faGear} /></Button>
                </Box> */}
            </Box>
        )
    }else if(state === 1){
        return (
            <Box w="100%" maxW="800px" display="flex" justifyContent="space-between" alignItems="center" justifyItems="center" padding=".5rem" borderBottom="1px" borderColor="gray.200">
                <Heading fontSize={{ base: '24px', md: '28px', lg: '36px' }}> How to play </Heading>
                <Button color="#858585" onClick={()=>{chnageState(0)}}><FontAwesomeIcon icon={faX} /></Button>
            </Box>
        ) 
    }
    
}

export default Header