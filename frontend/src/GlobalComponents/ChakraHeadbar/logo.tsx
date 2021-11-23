import "./ChakraHeadbar";
import logo1 from "./logo.jpg";
import { HStack, Image, Text } from "@chakra-ui/react";
import * as React from "react";
import { Link } from "react-router-dom";

// This is the function used for combine the logo and company name
export default function LogoImage() {
  return (
    <HStack>
      <HStack position="relative">
        <Link to="/">
          <div>
            <Image
              src={logo1}
              alt="logo1"
              height="100%"
              width="15%"
              alignSelf="center"
              float="left"
              marginRight="1em"
            />
            <Text fontFamily="monospace" fontSize="2em" position="relative">
              StudyFind
            </Text>
          </div>
        </Link>
      </HStack>
    </HStack>
  );
}
