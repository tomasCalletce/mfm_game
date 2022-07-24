import { Box } from '@chakra-ui/react'


// components
import Header from '../components/header'
import Footer from '../components/footer'
import Game from '../components/game'


export default function Home() {

  return (
    <Box w="100%" h="100vh" display="flex" flexDirection="column" alignItems="center" justifyContent="space-between">
      <Header/>
      <Game/>
      <Footer/>
    </Box>
  )
}
