
import { Component } from "react";
import ChakraButton from "../../GlobalComponents/ChakraButton";
import ChakraHeadbar from "../../GlobalComponents/ChakraHeadbar/ChakraHeadbar";
import "./ConfirmDigitalForm.css";
import * as React from "react";
import "./Originpage.css";

interface DisplayConfirmPageOrigin {
    AddAttribute: Function;
}

function Originpage (props: DisplayConfirmPageOrigin) {
    return (
        <div className="bodyContainerOrigin">
            <ChakraHeadbar />
            <div className="maindivOrigin">
                <div className="AddAttr" onClick={() => props.AddAttribute()}>
                    <ChakraButton txtname={"Add Attribute"}/>
                </div>
                <div className="submit">
                <ChakraButton txtname={"Submit"}/>
                </div>
            </div>
        </div>
    );
}

export default Originpage;