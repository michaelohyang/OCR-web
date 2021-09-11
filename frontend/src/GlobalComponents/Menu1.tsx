
import '../App.css';
import { HStack,Menu,MenuButton, MenuList,MenuItem } from "@chakra-ui/react";
import * as React from "react";
import { IconButton} from "@chakra-ui/react";
import {HamburgerIcon} from '@chakra-ui/icons';
import "./logo.css";

//This is the function design layout of the menu button function
export default function Menufunc() {
  return <HStack>
    <Menu >
      <MenuButton
        boxSize="6em"
        border="ButtonShadow"
        as={IconButton}
        aria-label="Options" 
        icon={<HamburgerIcon boxSize="3em" />}
        variant="outline"
        colorScheme="cyan"
        background="linear-gradient(to-l,
          90deg,
          rgba(214, 230, 187, 1) 0%,
          rgba(9, 121, 113, 0.6180847338935574) 41%,
          rgba(0, 212, 255, 1) 100%
        );"
        _hover={{ bgGradient: "linear(to-r, blue.500, gray.500)",
          }}
      />
      <MenuList >
        <MenuItem fontSize="2em"
          fontFamily="monospace"
          textColor="Darkgray"
          bgGradient="linear(to-r,blue.200, teal.500))"
          _hover={{ bgGradient: "linear(to-r, red.500, yellow.500)",
            }}>
            first one
        </MenuItem>
        <MenuItem fontSize="2em"
        textColor="Darkgray"
        fontFamily="monospace"
        bgGradient="linear(to-r,blue.200, teal.500))"
            _hover={{
              bgGradient: "linear(to-r, red.500, yellow.500)",
            }}>
            
            second one
        </MenuItem>
        <MenuItem fontSize="2em"
        textColor="Darkgray"
        fontFamily="monospace"
        bgGradient="linear(to-r,blue.200, teal.500))"
            _hover={{
              bgGradient: "linear(to-r, red.500, yellow.500)",
            }}>
              third one
        </MenuItem>
            <MenuItem fontSize="2em"
            textColor="Darkgray"
            fontFamily="monospace"
            bgGradient="linear(to-r,blue.200, teal.500))"
            _hover={{
              bgGradient: "linear(to-r, red.500, yellow.500)",
            }}>
            forth one
        </MenuItem>
      </MenuList>
    </Menu>
  </HStack>;
}

