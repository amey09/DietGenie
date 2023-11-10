import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import {
  Button,
  Center,
  Flex,
  Heading,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { SearchIcon } from "@chakra-ui/icons";
import { dietPlanSchema } from "../utils/dietSchema";

export default function MainAppScreen() {
  const [prompt, setPrompt] = useState(undefined);
  const [isClicked, setIsClicked] = useState(false);
  const navigate = useNavigate();
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const BASE_URL = "http://localhost:5000/api";
  const DIET_URL = "diet";

  // const handleSubmit = async () => {
  //     try {
  //         const customPrompt = ${prompt}\nGenerate a high protein rich Dietplan for a day.
  //             Result must be in json format. Each day has 3 meals each meal contains 3 items.
  //             Provide Protein, Carbs, Fats of each food item.
  //             Follow this json: ${JSON.stringify(dietPlanSchema)};
  //
  //         const response = await axios.post(${BASE_URL}/${DIET_URL}/getDietPlan, { prompt: customPrompt });
  //         const dietPlanData = response.data;
  //         dispatch(setDietPlan(dietPlanData));
  //         navigate('/diet-plan')
  //         console.log(dietPlanData);
  //     } catch (error) {
  //         console.log(error);
  //     }
  // }

  const handleSubmit = async () => {
    try {
      const customPrompt = `${prompt}\nGenerate a high protein rich Dietplan for a day.
              Result must be in json format. Each day has 3 meals each meal contains 3 items.
              Provide Protein, Carbs, Fats of each food item.
              Follow this json: ${JSON.stringify(dietPlanSchema)};`;

      const response = await axios.post(`${BASE_URL}/${DIET_URL}/getDietPlan`, {
        prompt: customPrompt,
      });
      const dietPlanData = response.data;

      navigate("/diet-plan");
      console.log(dietPlanData);
    } catch (error) {}

    setIsClicked(true);
    navigate("/diet-plan");

    setTimeout(() => {
      setIsClicked(false);
    }, 300);
  };

  return (
    <Center
      h={"100svh"}
      backgroundImage={"/leaf.png"}
      backgroundSize={"cover"}
      as="main"
    >
      <form onSubmit={handleSubmit}>
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
              onChange={(e) => setPrompt(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSubmit();
                  console.log("Enter Pressed");
                }
              }}
              ref={inputRef}
            />
            <InputRightElement>
              <SearchIcon
                color={"black"}
                cursor={"pointer"}
                onClick={handleSubmit}
                style={{
                  transition: "transform 0.3s ease-in-out",
                  transform: isClicked ? "scale(1.2)" : "scale(1)",
                }}
              />
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
            fontSize={"clamp(14px, 1vw, 24px)"}
            size={"lg"}
            type="submit"
          >
            Generate you diet plan now
          </Button>
        </Flex>
      </form>
    </Center>
  );
}
