import { Component } from "react";
import ChakraHeadbar from "../../GlobalComponents/ChakraHeadbar/ChakraHeadbar";
import "./CreateNewProjectPage.css";
import { Text } from "@chakra-ui/layout";
import { Link, Redirect } from "react-router-dom";
import axios from "axios";
import { Button } from "@chakra-ui/button";

class Create_New_Project_Page extends Component<any, any> {
  constructor(props: any) {
    super(props);
    // state will contain two variables: the name of project you would like to pass and the project description
    // you would like to pass.
    this.state = {
      project_name: String,
      description: String,
      redirect: false,
    };
    this.onsubmit = this.onsubmit.bind(this);
    this.send_data_backend = this.send_data_backend.bind(this);
  }

  // this function will put the information that user pass in into this.state.
  onsubmit = () => {
    let name = document.getElementById("nameInput") as HTMLInputElement;
    let description = document.getElementById(
      "descriptionInput"
    ) as HTMLInputElement;
    if (name.value === "" || description.value === "") {
      alert("You cannot leave project name or description empty!");
      return;
    }
    this.setState({ project_name: name.value });
    this.setState({ description: description.value }, this.send_data_backend);
  };

  // this function will send all of information contained in state
  send_data_backend = () => {
    let projectInfo = {
      project_name: this.state.project_name,
      description: this.state.description,
      forms: [{ placeholder: "This is a placeholder." }],
    };
    axios.post("http://localhost:8080/createProject", projectInfo);
    alert("Information successfully sent to the Backend!");
    this.setState({ redirect: true });
  };

  render() {
    if (this.state.redirect) {
      return <Redirect to={"/"} />;
    }
    return (
      <div className="newProjectScreenContainer">
        <ChakraHeadbar />
        <div className="newProjectBodyContainer">
          <div className="newProjectBox">
            <div className="newProjectFlexContainer">
              <div className="textHeader">
                <Text>Create a New Project </Text>
              </div>
              <div className="newProjectNameContainer">
                <input
                  id="nameInput"
                  className="newProjectNameInput"
                  type="text"
                  placeholder="Project Name"
                />
                <span className="newProjectNameText"></span>
              </div>
              <div className="newProjectDescriptionContainer">
                <input
                  id="descriptionInput"
                  className="newProjectDescriptionInput"
                  type="text"
                  placeholder="Description"
                />
                <span className="newProjectDescriptionText"></span>
              </div>
              <div className="newProjectButtonsContainer">
                <Link to="/">
                  <Button
                    marginRight="2.5em"
                    _focus={{ outline: 0, boxShadow: "none" }}
                  >
                    Cancel
                  </Button>
                </Link>
                <Button
                  marginLeft="2.5em"
                  _focus={{ outline: 0, boxShadow: "none" }}
                  onClick={this.onsubmit}
                >
                  Submit
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Create_New_Project_Page;
