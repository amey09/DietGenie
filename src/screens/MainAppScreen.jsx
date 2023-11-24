import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import {
  Button,
  Center,
  Flex,
  Heading,
  IconButton,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { SearchIcon } from "@chakra-ui/icons";
import { dietPlanSchema } from "../utils/dietSchema";

export default function MainAppScreen({ setDietPlan }) {
  const [prompt, setPrompt] = useState(undefined);
  const [isLoading, setIsLoading] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const navigate = useNavigate();
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const BASE_URL = process.env.SERVER_URL;

  const handleSubmit = async () => {
    setIsLoading(true);

    const customPrompt = `${prompt}\nGenerate a high protein rich Dietplan for a day.
      Result must be in json format. Each day has 3 meals each meal contains 3 items.
      Follow this json: ${JSON.stringify(dietPlanSchema)};`;

    try {
      const response = await axios.post(`${BASE_URL}/diet/getDietPlan`, {
        prompt: customPrompt,
      });

      const dietPlanData = response.data;
      setDietPlan(dietPlanData);
      navigate("/diet-plan");
      setIsClicked(false);
    } catch (error) {
      console.error("An error occurred:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Center
      h={"100svh"}
      backgroundImage={"/leaf.png"}
      backgroundSize={"cover"}
      as="main"
    >
      <Flex
        flexDir={"column"}
        alignItems={"center"}
        maxW={"85vw"}
        marginInline={"auto"}
        gap={"clamp(0.5em, 1rem, 3rem)"}
      >
        <Image src="/pear.png" width={"18vh"} height={"18vh"} />

        <Flex flexDir={"column"}>
          <Heading
            textAlign={"center"}
            fontFamily={"hero"}
            fontWeight={"800"}
            color={"white"}
            fontSize={"clamp(26px, 3vw, 48px)"}
          >
            Your Perfect Diet
          </Heading>
          <Heading
            textAlign={"center"}
            fontFamily={"hero"}
            fontWeight={"800"}
            color={"white"}
            fontSize={"clamp(26px, 4vw, 55px)"}
          >
            Just One click away
          </Heading>
        </Flex>
        <InputGroup
          justifyContent={"center"}
          maxW={{ base: "60%", md: "45%" }}
          size={["sm", "md", "lg"]}
        >
          <Input
            placeholder="Search"
            backgroundColor={"hsla(0, 0%, 98%, 1)"}
            borderRadius={"48px"}
            _placeholder={{ color: "hsla(0, 0%, 0%, 1)", fontFamily: "hero" }}
            value={prompt}
            isDisabled={isLoading}
            onChange={(e) => setPrompt(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSubmit();
                console.log("Enter Pressed");
              }
            }}
            ref={inputRef}
            isRequired
          />
          <InputRightElement>
            <IconButton
            variant={"ghost"}
              icon={<SearchIcon />}
              color={"black"}
              cursor={"pointer"}
              onClick={() => {
                handleSubmit();
                setIsClicked(true);
              }}
              isDisabled={isLoading || !prompt}
              style={{
                transition: "transform 0.3s ease-in-out",
                transform: isClicked ? "scale(1.2)" : "scale(1)",
              }}
             aria-label={"Search Icon"}/>
          </InputRightElement>
        </InputGroup>
        <Text
          textAlign={"center"}
          color={"white"}
          fontFamily={"paragraph"}
          fontWeight={"600"}
          letterSpacing={"2px"}
          fontSize={"clamp(13px, 2.9vw, 3vh)"}
        >
          Diet Genie is an AI-powered customised diet plan
          <br />
          that tells you exactly what to Eat Breakfast ,Lunch and Dinner.
          <br />
          All at the touch of a button
        </Text>
        <Button
          rounded={"full"}
          backgroundColor={"black"}
          colorScheme={"black"}
          textColor={"white"}
          fontSize={"clamp(14px, 1.5vw, 24px)"}
          size={"lg"}
          type="submit"
          onClick={handleSubmit}
          isDisabled={isLoading || !prompt}
          isLoading={isLoading}
          loadingText="Cooking..."
          padding={{ xl: "1rem", "2xl": "2.3rem" }}
        >
          Generate you diet plan now
        </Button>
      </Flex>
    </Center>
  );
}
