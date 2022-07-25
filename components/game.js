import {  Box, Heading, Text, Input, Button, Link } from '@chakra-ui/react'

// react 
import { useState,useRef,useEffect } from 'react'


async function getServerSideProps(){


    //return { props: { data : parsedData } }
}




function Game() {

    const [score,setScore] = useState(0)
    const [questions,setQuestions] = useState([])
    const [currentQuest,setCurrentQuest] = useState(0)
    const [gameDone,setGameDone] = useState(false)
    const [secondsLeft,setSecondsLeft] = useState(10)
    const [gameLost,setGameLost] = useState(false)
    const [timeIntervalID,setTimeIntervalID] = useState(0)
    const [userAnswers,setUserAnswers] = useState([])

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
            },
            {
                name : "Walmart",
                revenueInBillions : 550
            }
        ])
    },[])

    const checkAttempt = ()=>{
        if(inputVal.current.value != ""){
            const attempt = Number(inputVal.current.value)
            const newGoal = Math.floor((Math.abs(Number(questions[currentQuest].revenueInBillions) - attempt)/questions[currentQuest].revenueInBillions)*100) + score
            setScore(newGoal)
            inputVal.current.value = ""
            clearInterval(timeIntervalID)
            if(currentQuest+1 === questions.length){
                setGameDone(true)
                setUserAnswers(userAnswers => [...userAnswers,attempt])
            }else{
                setUserAnswers(userAnswers => [...userAnswers,attempt])
                setCurrentQuest(currentQuest+1)
                setSecondsLeft(10)
                startTimer()
            }
        }
    }

    const handleKeyPress = (e)=>{
        if(e.code === "Enter" && !gameDone){
            checkAttempt()
        }
    }

    const newGame = ()=>{
        setScore(0)
        setCurrentQuest(0)
        setGameDone(false)
        setGameLost(false)
        setUserAnswers([])
        setSecondsLeft(10)
        setTimeIntervalID(0)
    }

    const startTimer = ()=>{
        const id = setInterval(() => {
            setSecondsLeft((secondsLeft)=> {
                if(secondsLeft === 0){
                    setGameLost(true)
                    clearInterval(id)
                    return 10
                }
                return secondsLeft - 1
            })
        }, 1000,);
        setTimeIntervalID(id)
    }

    const gameSummary = ()=>{
        let index = -1;
        return userAnswers.map((attempt)=>{
            index++;
            return (<Text key={index}>correct : {questions[index].revenueInBillions} --- you : {attempt} </Text>)
        })
    }

    if(gameLost){
        const review = gameSummary()
        return (
            <Box w="100%" maxW="500px" padding=".5rem">
            <Box>
                <Box border="1px" borderColor="#dfb55e" display="flex" flexDirection="column" alignItems="center" justifyContent="ce" borderRadius="2xl" padding=".5rem" marginBottom=".5rem" >
                    <Heading marginBottom=".5rem" fontSize={{ base: '24px', md: '28px', lg: '36px' }}>You Lost</Heading>
                    {review}
                    <Button width="100%" marginBottom=".5rem" bg="#dfb55e" _hover={{ bg: "#ffffff", color:"#dfb55e",border:"1px",borderColor:"#dfb55e" }} onClick={newGame}> new game </Button>
                </Box>
            </Box>
            </Box>
        )
    }else if(!gameDone){
        return (
            <Box w="100%" maxW="500px" padding=".5rem">
            <Box>
                <Box display="flex" flexDirection="column" alignItems="center" marginBottom="1rem" bg="#e4eaf2"  padding=".5rem" borderRadius="2xl" >
                    <Text fontSize={{ base: '18px', md: '20px', lg: '22px' }}> {secondsLeft}:00 <Text as="span" color="#858585">sec left</Text></Text>
                </Box>
                <Box border="1px" borderColor="#dfb55e" display="flex" flexDirection="column" alignItems="center" justifyContent="ce" borderRadius="2xl" padding=".5rem" marginBottom=".5rem" >
                    <Heading marginBottom=".5rem" fontSize={{ base: '24px', md: '28px', lg: '36px' }}>{(questions[currentQuest])?(questions[currentQuest].name):("")}</Heading>
                    <Input ref={inputVal} onKeyPress={handleKeyPress} placeholder={`revenue in billions`} textAlign="center" marginBottom=".5rem" borderColor="gray.200" type="number"></Input>
                    <Button width="100%" marginBottom=".5rem" bg="#dfb55e" _hover={{ bg: "#ffffff", color:"#dfb55e",border:"1px",borderColor:"#dfb55e" }} onClick={()=>{checkAttempt(Number(inputVal.current.value))}} >next</Button>
                    <Text color="#858585" fontSize={{ base: '12px', md: '14px', lg: '16px' }}>{currentQuest} of 9</Text>
                </Box>
            </Box>
            </Box>
        )
    }else{
        const review = gameSummary()
        return (
            <Box w="100%" maxW="500px" padding=".5rem">
            <Box>
                <Box border="1px" borderColor="#dfb55e" display="flex" flexDirection="column" alignItems="center" justifyContent="ce" borderRadius="2xl" padding=".5rem" marginBottom=".5rem" >
                    <Heading marginBottom=".5rem" fontSize={{ base: '24px', md: '28px', lg: '36px' }}>Final score: {score}</Heading>
                    {review}
                    <Text fontWeight="bold" mt=".5rem">the closer you are to 0 the better</Text>
                    <Button width="100%" marginBottom=".5rem" bg="#dfb55e" _hover={{ bg: "#ffffff", color:"#dfb55e",border:"1px",borderColor:"#dfb55e" }} onClick={newGame}> new game </Button>
                </Box>
            </Box>
            </Box>
        )
    }
}

export default Game