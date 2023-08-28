import React, {useState} from 'react';
import {Button, Collapse, Flex, Heading, HStack, IconButton, Link, Stack, Text} from "@chakra-ui/react";
import {HamburgerIcon} from '@chakra-ui/icons'

export default function Navbar () {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <Flex position={'fixed'} zIndex="999" top="0" left="0" right="0" backgroundColor={'transparent'}>
      <Flex width="100%" justify={{ base:'center', md:'space-around'}} minHeight={'5rem'} alignItems="center">
        <IconButton
            aria-label={'Menu'}
            display={{ sm: 'block', md: "none"}}
            icon={<HamburgerIcon />}
            position={'fixed'}
            right={'.5rem'}
            isRound={true}
            onClick={toggleMenu}
        />
        <HStack display={{ base: 'none', sm: "none", md: 'flex'}} spacing={{ md: '1rem', lg: '4.5rem' }} fontFamily='nav_item' fontWeight={'900'} fontSize="1.1rem" color={'white'} padding={'0.5rem'}>
          <Link path={'/'}>
          <Text>
            Home
          </Text>
          </Link>
          <Link path={'/about'}>
          <Text>
            About us
          </Text>
        </Link>
        </HStack>
        <Heading fontFamily='heading' fontWeight={'900'} letterSpacing={{base: '0.5rem', md:'1rem'}} color={'white'}>
          DIET GENIE
        </Heading>
        <HStack display={{ base: 'none', sm: "none", md: 'flex'}} spacing={{ md: '1rem', lg: '1.5rem' }} fontFamily='button' fontWeight={'400'}>
          <Link path={'/about'}>
          <Button textColor={'white'} colorScheme={'blackAlpha'} varaint={'solid'} backgroundColor={'black'}>Sign In</Button>
          </Link>
          <Button textColor={'black'} variant={'outline'} backgroundColor={'blackAlpha.100'}>Sign Up</Button>
        </HStack>
        <Collapse in={isMenuOpen} animateOpacity>
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
            <Text>Sign Out</Text>
          </Stack>
        </Collapse>
      </Flex>
    </Flex>
  );
};

