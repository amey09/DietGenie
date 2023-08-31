import React from 'react'
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
    Flex,
    Box
} from "@chakra-ui/react";
import {SearchIcon} from "@chakra-ui/icons";
import { Link } from 'react-router-dom'

export default function MainAppScreen() {
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
                <Input placeholder={'Search'} rounded={'full'} fontFamily={'hero'} fontWeight={'400'} backgroundColor={'white'} boxShadow={ '0px 0px 4px 4px rgba(234, 234, 234, 0.25)'}/>
                <InputRightElement>
                    <SearchIcon/>
                </InputRightElement>
            </InputGroup>
          <Text textAlign={'center'} color={'white'} fontFamily={'button'} fontWeight={'600'}>
            Diet Genie is an AI-powered customised diet plan
            that tells you exactly what to Eat to Breakfast ,Lunch and Dinner.
            All at the touch of a button
          </Text>
            <Link to={'/diet-plan'}>
                <Button rounded={'full'} backgroundColor={'black'} colorScheme={'blackAlpha'} textColor={'white'}>
                    Generate you diet plan now
                </Button>
            </Link>
        </VStack>
      </VStack>
    </Center>
  )
}