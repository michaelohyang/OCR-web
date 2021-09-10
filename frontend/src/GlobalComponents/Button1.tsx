import "../App.css";
import * as React from "react";
import { ChakraProvider, Button } from "@chakra-ui/react";
export interface name_to_change {
  txtname: string;
  onClickFunc: () => void;
}

export default function Buttonfuc({ txtname, onClickFunc }: name_to_change) {
  return (
    <Button
      bgGradient="linear(to-r, red.500, yellow.500)"
      variant="solid"
      fontFamily="monospace"
      onClick={onClickFunc}
    >
      {txtname}
    </Button>
  );
}
