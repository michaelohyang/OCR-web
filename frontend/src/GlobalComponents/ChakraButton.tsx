import { Button } from "@chakra-ui/react";

interface DesignedButtonProps {
  txtname: string;
  onClickFunction?: () => void;
  cssDesign?: any;
  onChange?: () => void;
  id?: any;
}

export default function ChakraButton(props: DesignedButtonProps) {
  return (
    <Button
      _focus={{ outline: 0, boxShadow: "none" }}
      onClick={props.onClickFunction}
    >
      {props.txtname}
    </Button>
  );
}
