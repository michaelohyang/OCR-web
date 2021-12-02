import { HStack } from "@chakra-ui/layout";
import axios from "axios";
import { Component } from "react";
import ChakraButton from "../../GlobalComponents/ChakraButton";
import ChakraHeadbar from "../../GlobalComponents/ChakraHeadbar/ChakraHeadbar";
import { Link, withRouter } from "react-router-dom";
import "./ConfirmDigitalForm.css";
import * as React from "react";

class ConfirmDigitalForm extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      availableProjectAttribute: [],
    };

    this.getJson = this.getJson.bind(this);
    this.mountProjectInfo = this.mountProjectInfo.bind(this);
    this.addAttributeInput = this.addAttributeInput.bind(this);
  }

  componentWillMount() {
    this.mountProjectInfo();
  }

  getJson = () => {
    return new Promise((resolve, reject) =>
      axios.get("http://localhost:8080/form").then((response) => {
        resolve(response.data);
      })
    );
  };

  mountProjectInfo = () => {
    let fetchedAttributes: any[] = [];
    this.getJson().then((val: any) => {
      console.log(val);
      Object.keys(val).map((key: any) => {
        fetchedAttributes.push(
          <HStack>
            <p className="viewProjectPortText">
              {key} : {val[key]}
            </p>
          </HStack>
        );
      });
    });

    this.setState({ availableProjectAttribute: fetchedAttributes });
  };

  addAttributeInput = () => {};

  render() {
    setTimeout(() => this.forceUpdate(), 3000);

    return (
      <div className="confirmDigitalFormScreenContainer">
        <ChakraHeadbar />
        <div className="confirmDigitalFormBodyContainer">
          <div className="confirmDigitalFormUpperViewPortContainer">
            <div className="confirmDigitalFormViewProjectContainer">
              <div className="confirmDigitalFormAttributeDisplay">
                {this.state.availableProjectAttribute}
              </div>
            </div>
            <div className="confirmDigitalFormAddAttributesContainer">
              <div>{}</div>
              <div className="confirmDigitalFormAddAttributeButton">
                <ChakraButton
                  txtname={"Add Attribute"}
                  onClickFunction={this.addAttributeInput}
                />
              </div>
            </div>
          </div>
          <div className="confirmDigitalFormLowerViewPortContainer">
            {/* <Link
              to={{
                pathname: "/upload",
                state: {
                  projectID: this.state.selectedProjectId["projectID"],
                },
              }}
            > */}
            <ChakraButton txtname={"Add Attribute"} />
            {/* </Link> */}
            {/* <Link
              to={{
                pathname: "/digitalForm",
                state: {
                  form: this.state.dict,
                  projectID: this.state.selectedProjectId["projectID"],
                },
              }}
            > */}
            <ChakraButton txtname={"Submit"} />
            {/* </Link> */}
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(ConfirmDigitalForm);
