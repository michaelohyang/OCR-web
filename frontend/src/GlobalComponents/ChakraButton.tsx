import "../App.css";
import * as React from "react";
import { Button } from "@chakra-ui/react";

interface DesignedButtonProps {
  txtname: string;
  onClickFunc?: () => void;
  cssDesign?: any;
  // onChange?: (String: any) => void;
  onChange?: () => void;
  id?: any;
}

export default function ChakraButton(props: DesignedButtonProps) {
  return (
    <Button
      bgGradient="linear(to-r, red.500, yellow.500)"
      variant="solid"
      fontFamily="monospace"
      size="lg"
      onClick={props.onClickFunc}
      className={props.cssDesign}
      onChange={props.onChange}
      id={props.id}
    >
      {props.txtname}
    </Button>
  );
}
