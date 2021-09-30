import * as React from "react";
import Logofunc from "./logo";
import "./ChakraHeadbar.css";
import { HStack, Text } from "@chakra-ui/react";
import Menufunc from "./Menu1";

export default class ChakraHeadbar extends React.Component {
  render() {
    return (
      <div>
        <HStack className="container">
          <Logofunc />
          <div className="text">
            <Text>Online Medical Record Scanner</Text>
          </div>
          <div className="menu">
            <Menufunc />
          </div>
        </HStack>
      </div>
    );
  }
}
