import { Component } from "react";
import * as React from "react";
import Logofunc from "./logo";
import '../App.css';
import "./logo.css";
import { HStack, Image, Text, Center } from "@chakra-ui/react";
import logo1 from './logo.jpg';
import Menufunc from "./Menu1";
import Buttonfuc from "./Button1";

function abc(): void {
    alert("trevor 大帅哥");
}

export default class Header_screen extends Component {
    render() {
        return (
            <div>
                <HStack className="container">
                    <Logofunc />
                    <Center>
                        <Image src={logo1} className="header" />
                        <Text className="centerword" align="center">Online Medical Record Scanner</Text>
                    </Center>
                    <div className="menu">
                        <Menufunc />
                    </div>
                </HStack>
                <Buttonfuc txtname={"fuckthisproject"} onClickFunc={abc}/>
            </div>
        )
    };
}