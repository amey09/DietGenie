import React, {useState} from 'react'
import {
    Button,
    Center,
    Heading,
    Image,
    Input,
    InputGroup,
    InputRightElement,
    Text,
    VStack,
} from "@chakra-ui/react";
import {SearchIcon} from "@chakra-ui/icons";
import { useNavigate } from 'react-router-dom'
import axios from "axios";
import { dietPlanSchema } from "../Schemas/dietSchema";
import {useDispatch} from "react-redux";
import {setDietPlan} from "../redux/slices/dietPlanSlice";

const BASE_URL = 'http://localhost:5000'
const DIET_URL = 'api/diet'

export default function MainAppScreen() {

    const [prompt, setPrompt] = useState('');
    const dispatch = useDispatch()
    const navigate = useNavigate()

    // const handleSubmit = async () => {
    //     try {
    //         const customPrompt = `${prompt}\nGenerate a high protein rich Dietplan for a day.
    //             Result must be in json format. Each day has 3 meals each meal contains 3 items.
    //             Provide Protein, Carbs, Fats of each food item.
    //             Follow this json: ${JSON.stringify(dietPlanSchema)}`;
    //
    //         const response = await axios.post(`${BASE_URL}/${DIET_URL}/getDietPlan`, { prompt: customPrompt });
    //         const dietPlanData = response.data;
    //         dispatch(setDietPlan(dietPlanData));
    //         navigate('/diet-plan')
    //         console.log(dietPlanData);
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }

  return (
    <Center h={'100vh'} backgroundImage={'/leaf.png'} backgroundSize={'cover'}>
      <VStack>
        <Image src='/pear.png' transform='scale(0.7)'/>
        <VStack maxWidth={'400px'} spacing={'1.5rem'}>
          <Heading textAlign={'center'} fontFamily={'hero'} fontWeight={'800'} color={'white'}>
            Your Perfect Diet
            Just One click away
          </Heading>
            <InputGroup size="lg" maxWidth={'300px'}>
                <Input placeholder={'Search'} rounded={'full'} fontFamily={'hero'} fontWeight={'400'} backgroundColor={'white'} boxShadow={ '0px 0px 4px 4px rgba(234, 234, 234, 0.25)'} value={prompt} onChange={(e) => setPrompt(e.target.value)}/>
                <InputRightElement>
                    <SearchIcon/>
                </InputRightElement>
            </InputGroup>
          <Text textAlign={'center'} color={'white'} fontFamily={'button'} fontWeight={'600'}>
            Diet Genie is an AI-powered customised diet plan
            that tells you exactly what to Eat to Breakfast ,Lunch and Dinner.
            All at the touch of a button
          </Text>
            <Button rounded={'full'} backgroundColor={'black'} colorScheme={'blackAlpha'} textColor={'white'} onClick={() => navigate('/diet-plan')}>
                Generate you diet plan now
            </Button>
        </VStack>
      </VStack>
    </Center>
  )
}