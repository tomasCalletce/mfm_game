import { Box,Heading,Text } from '@chakra-ui/react'

// react 
import { useState } from 'react'

// components
import Header from '../components/header'
import Footer from '../components/footer'
import Game from '../components/game'


export default function Home() {

  // 0 = normal 
  // 1 = guide 
  // 2 = stats
  // 3 = settings 
  const[gameState,setGameState] = useState(0)

  if(gameState === 0){
    return (
      <Box w="100%" h="100vh" display="flex" flexDirection="column" alignItems="center" justifyContent="space-between">
        <Header chnageState={setGameState} state={gameState} />
        <Game/>
        <Footer/>
      </Box>
    )
  }else if(gameState === 1){
    return (
      <Box w="100%" h="100vh" display="flex" flexDirection="column" alignItems="center" justifyContent="space-between">
        <Header chnageState={setGameState} state={gameState} />
        <Box w="100%" maxW="500px" padding=".5rem" height="100%">
            <Text>Try to nail the revenue of 10 diffrent companies.</Text>
            <br/>
            <Text>You have 10 seconds to anwer the question.</Text>
            <br/>
            <Text>Share your final score and mybe you too will become <Text fontWeight="bold" as="span">THE DOG 👑</Text>.</Text>
            <br/>
            <Text>Most most economic people get a high score.</Text>
        </Box>
        <Footer/>
      </Box>
    )
  }else if(gameState === 2){

  }else if(gameState === 3){

  }

  
}
