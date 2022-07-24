import {  Box, Button, Heading, Text } from '@chakra-ui/react'

// icons 
import { faCircleQuestion, faSignal, faGear } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Header() {
  return (
    <Box w="100%" maxW="800px" display="flex" justifyContent="space-between" alignItems="center" justifyItems="center" padding=".5rem" borderBottom="1px" borderColor="gray.200">
        <Button color="#858585"><FontAwesomeIcon icon={faCircleQuestion} /></Button>
        <Heading fontSize={{ base: '24px', md: '28px', lg: '36px' }}> The <Text as="span" color="#858585"> MFM </Text> Game </Heading>
        <Box display="flex">
            <Button mr=".5rem" color="#858585"><FontAwesomeIcon icon={faSignal} /></Button>
            <Button color="#858585"><FontAwesomeIcon icon={faGear} /></Button>
        </Box>
    </Box>
  )
}

export default Header