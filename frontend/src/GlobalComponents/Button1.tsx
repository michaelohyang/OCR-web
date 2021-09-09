
import '../App.css';
import * as React from "react";
import {Button} from "@chakra-ui/react";
import { ChakraProvider } from "@chakra-ui/react";

// This is the function for all clickable buttons which can change the name and achieve external function 
export interface name_to_change {
  txtname:string;
  onClickFunc: () => void;
}

export default function Buttonfuc( { txtname, onClickFunc } : name_to_change ){
    return <Button 
        bgGradient="linear(to-r, red.500, yellow.500)" 
        variant="solid" 
        fontFamily="monospace"
        onClick= {onClickFunc}
        >
        {txtname}
        </Button>
  }
