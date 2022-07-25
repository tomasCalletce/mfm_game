import {  Box, Text,Link } from '@chakra-ui/react'


function Footer() {
  return (
    <Box w="100%" display="flex" justifyContent="center" padding=".5rem" bg="#dfb55e"  >
       <Text> made by <Link color="blue.400" fontStyle="italic" href='https://twitter.com/ThomsonCalle'>tomas</Link> 👍🏻 </Text> 
    </Box>
  )
}

export default Footer