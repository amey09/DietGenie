import React, { useState } from "react";
import {
  Button,
  Center,
  Heading,
  Image,
  Input,
  InputGroup,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
export default function MainAppScreen() {
  const [prompt, setPrompt] = useState(undefined);
  const navigate = useNavigate();

  return (
    <Center h={"100vh"} backgroundImage={"/leaf.png"} backgroundSize={"cover"}>
      <VStack>
        <Image src="/pear.png" transform="scale(0.7)" />
        <VStack maxWidth={"400px"} spacing={"1.5rem"}>
          <Heading
            textAlign={"center"}
            fontFamily={"hero"}
            fontWeight={"800"}
            color={"white"}
          >
            Your Perfect Diet Just One click away
          </Heading>
          <InputGroup size="lg" maxWidth={"300px"}>
            <Input
              placeholder={"Search"}
              rounded={"full"}
              fontFamily={"hero"}
              fontWeight={"400"}
              backgroundColor={"white"}
              boxShadow={"0px 0px 4px 4px rgba(234, 234, 234, 0.25)"}
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
            />
          </InputGroup>
          <Text
            textAlign={"center"}
            color={"white"}
            fontFamily={"button"}
            fontWeight={"600"}
          >
            Diet Genie is an AI-powered customised diet plan that tells you
            exactly what to Eat to Breakfast ,Lunch and Dinner. All at the touch
            of a button
          </Text>
          <Button
            rounded={"full"}
            backgroundColor={"black"}
            colorScheme={"blackAlpha"}
            textColor={"white"}
            onClick={() => navigate("/diet-plan")}
          >
            Generate you diet plan now
          </Button>
        </VStack>
      </VStack>
    </Center>
  );
}
