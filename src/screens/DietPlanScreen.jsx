import React from "react";
import {
  Center,
  Flex,
  Heading,
  ListItem,
  UnorderedList,
} from "@chakra-ui/react";

export default function DietPlanScreen({ dietPlan }) {
  if (!dietPlan || Object.keys(dietPlan).length === 0) {
    return (
      <Center
        height={"100vh"}
        backgroundImage={"/fruits.jpg"}
        backgroundSize={"cover"}
        backgroundPosition={"center top 0"}
        display={"flex"}
        flexDir={"column"}
        alignItems={"center"}
        justifyContent={"center"}
        gap={"2rem"}
      >
        <Heading
          fontFamily={"nav_item"}
          fontWeight={"700"}
          letterSpacing={"1vw"}
          fontSize={"clamp(2rem, 3vw, 8rem)"}
          color={"white"}
        >
          No Diet Plan Available
        </Heading>
        <Heading
          fontFamily={"nav_item"}
          fontWeight={"700"}
          letterSpacing={"0.3vw"}
          fontSize={"clamp(2rem, 1vw, 8rem)"}
          color={"white"}
        >
          Please search again
        </Heading>
      </Center>
    );
  }

  return (
    <>
      <Center
        height={"100vh"}
        backgroundImage={"/fruits.jpg"}
        backgroundSize={"cover"}
        backgroundPosition={"center top 0"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        {Object.keys(dietPlan).map((day, index) => (
          <Flex key={index} flexDir={"column"} gap={"6vh"} color={"white"}>
            {/* Day's Plan Heading */}
            <Heading
              alignSelf={"center"}
              textAlign={"center"}
              fontFamily={"nav_item"}
              fontWeight={"700"}
              letterSpacing={"2.5vw"}
              fontSize={"clamp(2rem, 3vw, 8rem)"}
              marginTop={"4rem"}
            >
              {day}
            </Heading>

            {/* Actual Plan (Breakfast, lunch, dinner) */}
            <Flex
              key={day}
              width={{ base: "90vw", md: "85vw" }}
              marginInline={"auto"}
              borderRadius={"79px"}
              background={"whiteAlpha.400"}
              padding={"4rem 1rem"}
              justifyContent={"center"}
              paddingInline={"1.5rem"}
            >
              <Flex
                justifyContent={{ base: "space-between", md: "space-evenly" }}
                gap={"10vw"}
              >
                {Object.keys(dietPlan[day]).map((meal) => (
                  <UnorderedList
                    key={meal}
                    listStyleType={"none"}
                    display={"flex"}
                    flexDir={"column"}
                    alignItems={"left"}
                    margin={0}
                    justifyContent={"flex-start"}
                    gap={"1.5rem"}
                  >
                    <Heading
                      fontFamily={"nav_item"}
                      fontWeight={"700"}
                      fontSize={"clamp(10px, 2vw, 100px)"}
                      letterSpacing={{ base: "2px", md: "10px" }}
                      paddingBottom={"2rem"}
                      alignSelf={"center"}
                    >
                      {meal}
                    </Heading>
                    {dietPlan[day][meal].map((food, foodIndex) => (
                      <ListItem
                        key={foodIndex}
                        fontFamily={"nav_item"}
                        fontWeight={"400"}
                        fontSize={"clamp(12px, 1.5vw, 58px)"}
                        borderBottom={"1px dotted white"}
                      >
                        {food}
                      </ListItem>
                    ))}
                  </UnorderedList>
                ))}
              </Flex>
            </Flex>
          </Flex>
        ))}
      </Center>
    </>
  );
}
