import logo from './logo.svg';
import '../App.css';
import logo1 from './logo.jpg';
import { HStack, VStack, Image, Box, Text} from "@chakra-ui/react";
import { ChakraProvider } from "@chakra-ui/react";
import * as React from "react";

export default function Logofunc() {
    return <HStack>
      <HStack position="relative">
        <Image src={logo1} alt="logo1" height="100%" width="15%" alignSelf="center" />
        <Text fontFamily="monospace" fontSize="2em" position="relative" >StudyFind</Text>
      </HStack>
    {/* <Box boxSize="sm" background="green" width="100%" height="4em" alignItems="center" alignSelf="center" alignContent="center" position="relative" >
        <Text>StudyFind</Text>
    </Box> */}
    </HStack>;
}
