import React, { useState } from "react";
import {
  Button,
  Collapse,
  Flex,
  Heading,
  HStack,
  IconButton,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { AiOutlineMenuFold } from "react-icons/ai";

export default function Navbar({ isLoggedIn }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <Flex position={"fixed"} zIndex="999" top="0" left="0" right="0">
      <Flex
        width="100%"
        justify={{ base: "center", md: "space-around" }}
        minHeight={"5rem"}
        alignItems="center"
      >
        {/* <IconButton
          aria-label={"Menu"}
          display={{ sm: "block", md: "none" }}
          icon={<AiOutlineMenuFold />}
          position={"fixed"}
          right={".5rem"}
          isRound={true}
          onClick={toggleMenu}
        /> */}
        <HStack
          display={{ base: "none", sm: "none", md: "flex" }}
          spacing={{ md: "1rem", lg: "4.5rem" }}
          fontFamily="nav_item"
          fontWeight={"900"}
          fontSize="1.1rem"
          color={"white"}
          padding={"0.5rem"}
        >
          <Button variant={"link"} color={"white"}>Home</Button>
          <Button variant={"link"} color={"white"}>About us</Button>
        </HStack>
        <Heading
          fontFamily="heading"
          fontWeight={"900"}
          letterSpacing={{ base: "0.5rem", md: "1rem" }}
          color={"white"}
        >
          DIET GENIE
        </Heading>
        {isLoggedIn ? (
          <>
            {/* <Link to={""}>
              <Button
                textColor={"white"}
                colorScheme={"blackAlpha"}
                varaint={"solid"}
                backgroundColor={"black"}
              >
                Logout
              </Button>
            </Link> */}
          </>
        ) : (
          <>
            <HStack
              display={{ base: "none", sm: "none", md: "flex" }}
              spacing={{ md: "1rem", lg: "1.5rem" }}
              fontFamily="button"
              fontWeight={"400"}
            >
              <Button
                textColor={"white"}
                colorScheme={"blackAlpha"}
                varaint={"solid"}
                backgroundColor={"black"}
              >
                Sign In
              </Button>

              <Button
                textColor={"black"}
                variant={"outline"}
                backgroundColor={"blackAlpha.100"}
              >
                Sign Up
              </Button>
            </HStack>
          </>
        )}

        {/* <Collapse in={isMenuOpen} animateOpacity>
          <Stack
            spacing="1rem"
            backgroundColor="whiteAlpha.600"
            position="absolute"
            top="5rem"
            right="0.5rem"
            p="1rem"
            borderRadius="md"
            boxShadow="lg"
          >
            <Text>Home</Text>
            <Text>About</Text>
            <Link to={"/login"}>
              <Text>Sign Out</Text>
            </Link>
          </Stack>
        </Collapse> */}
      </Flex>
    </Flex>
  );
}
