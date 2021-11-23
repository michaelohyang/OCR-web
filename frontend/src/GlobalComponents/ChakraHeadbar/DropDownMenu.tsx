import "./ChakraHeadbar";
import { HStack, Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import * as React from "react";
import { IconButton } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

//This is the function design layout of the menu button function
export default function DropDownMenu() {
  return (
    <HStack>
      <Menu>
        <MenuButton
          boxSize="6em"
          padding="0em"
          border="0em"
          // background="0em"
          as={IconButton}
          aria-label="Options"
          icon={<HamburgerIcon boxSize="3em" />}
          variant="outline"
          colorScheme="transparent"
          _hover={{ color: "white" }}
          _focus={{ outline: "none" }}
        />
        <MenuList>
          <MenuItem
            fontSize="2em"
            fontFamily="monospace"
            textColor="Darkgray"
            bgGradient="linear(to-r,blue.200, teal.500))"
            _hover={{ bgGradient: "linear(to-r, red.500, yellow.500)" }}
          >
            first one
          </MenuItem>
          <MenuItem
            fontSize="2em"
            textColor="Darkgray"
            fontFamily="monospace"
            bgGradient="linear(to-r,blue.200, teal.500))"
            _hover={{
              bgGradient: "linear(to-r, red.500, yellow.500)",
            }}
          >
            second one
          </MenuItem>
          <MenuItem
            fontSize="2em"
            textColor="Darkgray"
            fontFamily="monospace"
            bgGradient="linear(to-r,blue.200, teal.500))"
            _hover={{
              bgGradient: "linear(to-r, red.500, yellow.500)",
            }}
          >
            third one
          </MenuItem>
          <MenuItem
            fontSize="2em"
            textColor="Darkgray"
            fontFamily="monospace"
            bgGradient="linear(to-r,blue.200, teal.500))"
            _hover={{
              bgGradient: "linear(to-r, red.500, yellow.500)",
            }}
          >
            forth one
          </MenuItem>
        </MenuList>
      </Menu>
    </HStack>
  );
}
