import * as React from "react";
import LogoImage from "./logo";
import "./ChakraHeadbar.css";
import { Text } from "@chakra-ui/react";

export default class ChakraHeadbar extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="imgOnLeft">
          <LogoImage />
        </div>
        <div className="textOnCenter">
          <Text>Online Medical Record Scanner</Text>
        </div>
      </div>
    );
  }
}
