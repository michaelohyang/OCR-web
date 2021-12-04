import axios from "axios";
import { Component } from "react";
import ChakraButton from "../../GlobalComponents/ChakraButton";
import ChakraHeadbar from "../../GlobalComponents/ChakraHeadbar/ChakraHeadbar";
import { Link, withRouter } from "react-router-dom";
import "./ConfirmDigitalForm.css";
import * as React from "react";
import ClipLoader from "react-spinners/ClipLoader";

class ConfirmDigitalForm extends Component<any, any> {
  objectRef: React.RefObject<HTMLDivElement>;
  constructor(props: any) {
    super(props);
    this.objectRef = React.createRef();
    this.state = {
      availableProjectAttribute: new Map(),
      newAttributeEntry: new Map(),
      attributeInputCount: 0,
      projectAttributeCount: 0,
      projectID: this.props.location.state["projectID"],
      infoJSONobject: {},
    };

    this.getJson = this.getJson.bind(this);
    this.mountProjectInfo = this.mountProjectInfo.bind(this);
    this.addInput = this.addInput.bind(this);
    this.deleteInput = this.deleteInput.bind(this);
    this.addAttributeToProject = this.addAttributeToProject.bind(this);
    this.deleteAttributeFromProject =
      this.deleteAttributeFromProject.bind(this);
    this.submit = this.submit.bind(this);
  }

  componentWillMount() {
    this.mountProjectInfo();
  }

  getJson = () => {
    return new Promise((resolve, reject) =>
      axios.get("http://localhost:8080/form").then((response) => {
        try {
          resolve(response.data);
        } catch (err) {
          reject(err);
        }
      })
    );
  };

  mountProjectInfo = () => {
    let fetchedAttributes = new Map();
    let tempCount = 0;
    let mapLength = 0;
    let json_object = this.state.infoJSONobject;
    this.getJson().then((val: any) => {
      mapLength = Object.keys(val).length;
      // eslint-disable-next-line
      Object.keys(val).map((key: any) => {
        json_object[key] = val[key];
        fetchedAttributes.set(
          tempCount,
          <div className="viewProjectPortContainer" id={"project" + tempCount}>
            <div className="viewProjectPortTextContainer">
              <p key={"key:" + tempCount.toString()}>
                {key} : {val[key]}
              </p>
            </div>
            <div className="viewProjectPortDeleteButtonContainer">
              <div
                className="deleteAttributeInput"
                onClick={(e: any) => {
                  this.deleteAttributeFromProject(e);
                }}
                id={tempCount.toString()}
              ></div>
            </div>
          </div>
        );
        tempCount += 1;
      });
      this.setState(
        {
          availableProjectAttribute: fetchedAttributes,
          projectAttributeCount: mapLength,
          infoJSONobject: json_object,
        },
        () => setTimeout(() => this.forceUpdate(), 3000)
      );
    });
  };

  addAttributeToProject = (inputCount: number) => {
    const attributeID = document.getElementById(
      "added_attribute" + inputCount.toString()
    ) as HTMLInputElement;
    const attributeValue = document.getElementById(
      "added_value" + inputCount.toString()
    ) as HTMLInputElement;
    let tempProjectAttributeCount = this.state.projectAttributeCount;
    console.log(tempProjectAttributeCount);
    let tempAvailableProjectAttributes = this.state.availableProjectAttribute;
    let tempAttributeEntry = this.state.newAttributeEntry;
    let json_object = this.state.infoJSONobject;
    json_object[attributeID.value] = attributeValue.value;
    tempAttributeEntry.delete(inputCount);
    tempAvailableProjectAttributes.set(
      tempProjectAttributeCount,
      <div className="viewProjectPortContainer">
        <div className="viewProjectPortTextContainer">
          <p key={"key:" + tempProjectAttributeCount.toString()}>
            {attributeID.value} : {attributeValue.value}
          </p>
        </div>

        <div className="viewProjectPortDeleteButtonContainer">
          <div
            className="deleteAttributeInput"
            onClick={(e: any) => {
              this.deleteAttributeFromProject(e);
            }}
            id={tempProjectAttributeCount.toString()}
          ></div>
        </div>
      </div>
    );
    console.log(tempAvailableProjectAttributes);

    this.setState({
      attributeInputCount: this.state.attributeInputCount - 1,
      availableProjectAttribute: tempAvailableProjectAttributes,
      newAttributeEntry: tempAttributeEntry,
      projectAttributeCount: tempProjectAttributeCount + 1,
      infoJSONobject: json_object,
    });
  };

  deleteAttributeFromProject = (e: any) => {
    let projectID = parseInt(e.target.id);
    let tempAvailableProjectAttributes = this.state.availableProjectAttribute;
    tempAvailableProjectAttributes.delete(projectID);

    this.setState(
      {
        availableProjectAttribute: tempAvailableProjectAttributes,
        projectAttributeCount: this.state.projectAttributeCount,
      },
      () =>
        console.log(
          "this is after Deletion: ",
          this.state.projectAttributeCount
        )
    );
  };

  addInput = () => {
    const tempCount = this.state.attributeInputCount;
    console.log(tempCount);
    const newID = "added_attribute" + tempCount.toString();
    const newValue = "added_value" + tempCount.toString();
    let tempAttributeEntry = this.state.newAttributeEntry;
    tempAttributeEntry.set(
      tempCount,
      <div id={tempCount} key={tempCount} className="addedAttributeContainer">
        <div
          id={tempCount}
          key={tempCount}
          className="addedAttributeInnerBoxContainer"
          ref={this.objectRef}
        >
          <input
            className="addedAttributeIDBox"
            id={newID}
            type="text"
            placeholder={"Attribute"}
            defaultValue=""
          ></input>
          :
          <input
            className="addedAttributeIDBox"
            id={newValue}
            type="text"
            placeholder="Content"
            defaultValue=""
          ></input>
          <div
            className="addMoreAttributeInput"
            onClick={() => this.addAttributeToProject(tempCount)}
          ></div>
          <div
            className="deleteAttributeInput"
            onClick={() => this.deleteInput(tempCount)}
          ></div>
        </div>
      </div>
    );
    this.setState({
      attributeInputCount: tempCount + 1,
      newAttributeEntry: tempAttributeEntry,
    });
  };

  deleteInput = (count: any) => {
    let tempAttributeEntry = this.state.newAttributeEntry;
    tempAttributeEntry.delete(count);
    this.setState({
      newAttributeEntry: tempAttributeEntry,
      attributeInputCount: this.state.attributeInputCount - 1,
    });
  };

  submit = () => {
    let json_object = this.state.infoJSONobject;
    axios.post(
      `http://localhost:8080/confirmForm?id=${this.state.projectID}`,
      json_object
    );
    alert("Sucessful upload digital form!");
  };

  render() {
    setTimeout(() => this.forceUpdate(), 5000);
    return (
      <div className="confirmDigitalFormScreenContainer">
        <ChakraHeadbar />
        <div className="confirmDigitalFormBodyContainer">
          <div className="confirmDigitalFormUpperViewPortContainer">
            <div className="confirmDigitalFormViewProjectContainer">
              <div className="confirmDigitalFormAttributeDisplay">
                {/* {Object.keys(this.state.availableProjectAttribute).length ===
                0 ? (
                  // <ClipLoader color={"#000000"} loading={true} size={150} />
                  <div></div>
                ) : (
                  <div>
                    {Array.from(this.state.availableProjectAttribute.values())}
                  </div>
                )} */}
                <div>
                  {this.state.projectAttributeCount === 0 ? (
                    <div className="loadingSpinner">
                      <ClipLoader color={"#000000"} loading={true} size={150} />
                    </div>
                  ) : (
                    <div>
                      {Array.from(
                        this.state.availableProjectAttribute.values()
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="confirmDigitalFormAddAttributesContainer">
              <div>{Array.from(this.state.newAttributeEntry.values())}</div>
              <div className="confirmDigitalFormAddAttributeButton">
                <ChakraButton
                  txtname={"Add Attribute"}
                  onClickFunction={this.addInput}
                />
              </div>
            </div>
          </div>
          <div className="confirmDigitalFormLowerViewPortContainer">
            <Link to="/">
              <ChakraButton
                txtname={"Submit"}
                marginTop="1em"
                onClickFunction={() => this.submit()}
              />
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(ConfirmDigitalForm);
