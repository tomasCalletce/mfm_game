import {  Box, Heading, Text, Input, Button } from '@chakra-ui/react'

// react 
import React, { useState,useRef,useEffect } from 'react'


function Game() {

    const [score,setScore] = useState(0)
    const [questions,setQuestions] = useState([])
    const [currentQuest,setCurrentQuest] = useState(0)
    const [gameDone,setGameDone] = useState(false)
    const [secondsLeft,setSecondsLeft] = useState(10)
    const [gameLost,setGameLost] = useState(false)

    const inputVal = useRef(0);

    useEffect(()=>{
        setQuestions([
            {
                name : "Apple inc.",
                revenueInBillions : 350
            },
            {
                name : "Amazon",
                revenueInBillions : 490
            }
        ])
    },[])

    const checkAttempt = ()=>{
        if(inputVal.current.value != ""){
            const attempt = inputVal.current.value
            const newGoal = ((attempt/questions[currentQuest].revenueInBillions)*100).toFixed(1) + score
            setScore(newGoal)
            inputVal.current.value = ""
            if(currentQuest+1 === questions.length){
                setGameDone(true)
                setCurrentQuest(0)
            }else{
                setCurrentQuest(currentQuest+1)
                setSecondsLeft(10)
            }
            startTimer()
        }
    }

    const handleKeyPress = (e)=>{
        if(e.code === "Enter"){
            checkAttempt()
        }
    }

    const newGame = ()=>{
        // get 10 new questions 
    }

    const startTimer = ()=>{
        const timeLeft = secondsLeft;
        let inter = setInterval(()=>{
            if(timeLeft === 0){
                clearInterval(inter)
                setGameLost(true)
            }else{
                timeLeft--;
                setSecondsLeft(timeLeft)
            }
        },1000);
    }

    if(gameDone && !gameLost){
        return (
            <Box w="100%" maxW="500px" padding=".5rem">
            <Box>
                <Box border="1px" borderColor="#dfb55e" display="flex" flexDirection="column" alignItems="center" justifyContent="ce" borderRadius="2xl" padding=".5rem" marginBottom=".5rem" >
                    <Heading marginBottom=".5rem" fontSize={{ base: '24px', md: '28px', lg: '36px' }}>Final score: {score}</Heading>
                    <Button width="100%" marginBottom=".5rem" bg="#dfb55e" _hover={{ bg: "#ffffff", color:"#dfb55e",border:"1px",borderColor:"#dfb55e" }}> new game </Button>
                </Box>
            </Box>
            </Box>
        )
    }else if(gameLost){
        return (
            <Box w="100%" maxW="500px" padding=".5rem">
            <Box>
                <Box border="1px" borderColor="#dfb55e" display="flex" flexDirection="column" alignItems="center" justifyContent="ce" borderRadius="2xl" padding=".5rem" marginBottom=".5rem" >
                    <Heading marginBottom=".5rem" fontSize={{ base: '24px', md: '28px', lg: '36px' }}>You Lost</Heading>
                    <Button width="100%" marginBottom=".5rem" bg="#dfb55e" _hover={{ bg: "#ffffff", color:"#dfb55e",border:"1px",borderColor:"#dfb55e" }}> new game </Button>
                </Box>
            </Box>
            </Box>
        )
    }else{
        return (
            <Box w="100%" maxW="500px" padding=".5rem">
            <Box>
                <Box display="flex" flexDirection="column" alignItems="center" marginBottom="1rem" bg="#e4eaf2"  padding=".5rem" borderRadius="2xl" >
                    <Text fontSize={{ base: '18px', md: '20px', lg: '22px' }}> {secondsLeft}:00 <Text as="span" color="#858585">sec left</Text></Text>
                </Box>
                <Box border="1px" borderColor="#dfb55e" display="flex" flexDirection="column" alignItems="center" justifyContent="ce" borderRadius="2xl" padding=".5rem" marginBottom=".5rem" >
                    <Heading marginBottom=".5rem" fontSize={{ base: '24px', md: '28px', lg: '36px' }}>{(questions[currentQuest])?(questions[currentQuest].name):("")}</Heading>
                    <Input ref={inputVal} onKeyPress={handleKeyPress} placeholder="revenue of apple in billions" textAlign="center" marginBottom=".5rem" borderColor="gray.200" type="number"></Input>
                    <Button width="100%" marginBottom=".5rem" bg="#dfb55e" _hover={{ bg: "#ffffff", color:"#dfb55e",border:"1px",borderColor:"#dfb55e" }} onClick={()=>{checkAttempt(Number(inputVal.current.value))}} >next</Button>
                    <Text color="#858585" fontSize={{ base: '12px', md: '14px', lg: '16px' }}>{currentQuest} of 9</Text>
                </Box>
            </Box>
            </Box>
        )
    }
}

export default Game