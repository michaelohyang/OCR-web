import * as React from "react";
import Logofunc from "./logo";
import "../App.css";
import "./logo.css";
import { HStack, Image, Text, Center } from "@chakra-ui/react";
import logo1 from "./logo.jpg";
import Menufunc from "./Menu1";
import DesignedButton from "../ChakraButton";

// This is the function that display the header page which contains menu button, logo and basic text.
function abc(): void {
  alert("trevor 是大帅哥");
}

export default class ChakraHeadbar extends React.Component {
  render() {
    return (
      <div>
        <HStack className="container">
          <Logofunc />
          <Center>
            <Image src={logo1} className="header" />
            <Text className="centerword" align="center">
              Online Medical Record Scanner
            </Text>
          </Center>
          <div className="menu">
            <Menufunc />
          </div>
        </HStack>
        <DesignedButton
          txtname={"trevor is sooooo awesome!"}
          onClickFunc={abc}
          cssDesign={""}
        />
      </div>
    );
  }
}
