import * as React from "react";
import LogoImage from "./logo";
import "./ChakraHeadbar.css";
import { HStack, Text } from "@chakra-ui/react";
import DropDownMenu from "./DropDownMenu";

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
        <div className="menuOnRight">
          <DropDownMenu />
        </div>
      </div>
    );
  }
}
