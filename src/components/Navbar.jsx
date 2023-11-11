import React from "react";
import { Flex, Heading } from "@chakra-ui/react";

export default function Navbar() {
  return (
    <Flex
      as={"nav"}
      position={"fixed"}
      zIndex="900"
      width={"100%"}
      alignItems={"center"}
      justifyContent={"center"}
      padding={"clamp(1rem, 1.8vw, 4rem)"}
    >
      <Heading
        fontFamily="heading"
        fontWeight={"900"}
        letterSpacing={{ base: "0.3rem", md: "1rem" }}
        color={"white"}
        fontSize={"clamp(24px, 4vh, 49px)"}
      >
        DIET GENIE
      </Heading>
    </Flex>
  );
}
