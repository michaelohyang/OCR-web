import { Component } from "react";
import ChakraHeadbar from "../../GlobalComponents/ChakraHeadbar/ChakraHeadbar";
import "./CreateNewProjectPage.css";
import { Text, HStack } from "@chakra-ui/layout";
import ChakraButton from "../../GlobalComponents/ChakraButton";
import { Link, Redirect } from "react-router-dom";
import axios from "axios";

class Create_New_Project_Page extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      project_name: String,
      description: String,
      redirect: null,
    };
    this.onsubmit = this.onsubmit.bind(this);
    this.send_data_backend = this.send_data_backend.bind(this);
  }

  // this function will put the information that user pass in into this.state.
  onsubmit = () => {
    let attri = document.getElementById("name1") as HTMLInputElement;
    let des = document.getElementById("description1") as HTMLInputElement;
    this.setState({ project_name: attri.value });
    this.setState({ description: des.value }, this.send_data_backend);
  };

  // this function will send all of information contained in state
  send_data_backend = () => {
    let projectInfo = {
      project_name: this.state.project_name,
      description: this.state.description,
    };
    console.log("this is project", projectInfo);
    axios.post("http://localhost:8080/createProject", projectInfo);
    this.setState({ redirect: "/" });
  };

  render() {
    if (this.state.redirect) {
      return <Redirect to={"/"} />;
    }
    return (
      <div>
        {/* header  */}
        <ChakraHeadbar />
        <div className="bodyContainer">
          <div className="textheader">
            <Text>Create a New Project </Text>
          </div>

          <div className="maincontainer">
            <HStack className="nameMainDiv">
              <div className="nametext">
                <Text>Name : </Text>{" "}
              </div>
              <input id="name1" className="namediv" type="text"></input>
            </HStack>

            <HStack className="desMainDiv">
              <div style={{ height: "5em" }}>
                <Text>Description:</Text>{" "}
              </div>
              <textarea className="Description" id="description1"></textarea>
            </HStack>

            <HStack className="buttoncontainer">
              <Link to="/">
                <ChakraButton txtname={"Cancel"} />
              </Link>
              <ChakraButton txtname={"Confirm"} onClickFunc={this.onsubmit} />
            </HStack>
          </div>
        </div>
      </div>
    );
  }
}

export default Create_New_Project_Page;
