import { Component } from "react";
import ChakraHeadbar from "../../GlobalComponents/ChakraHeadbar/ChakraHeadbar";
import "./CreateNewProjectPage.css";
import { Text, HStack } from "@chakra-ui/layout";
import ChakraButton from "../../GlobalComponents/ChakraButton";
import { Link } from "react-router-dom";

class Create_New_Project_Page extends Component<any, any> {
  constructor(props: any) {
    super(props);

    // state will contain two variables: the name of project you would like to pass and the project description
    // you would like to pass.
    this.state = {
      project_name: String,
      description: String,
    };
    this.onsubmit = this.onsubmit.bind(this);
    this.send_data_backend = this.send_data_backend.bind(this);
  }

  // this function will send all of information contained in state
  send_data_backend = () => {
    console.log(
      "name is: {",
      this.state.project_name,
      "} \n description is: {",
      this.state.description,
      "}"
    );
    // axios.post("http://localhost:8080/new_project", this.state);
  };

  // this function will put the information that user pass in into this.state.
  onsubmit = () => {
    let attri = document.getElementById("name1") as HTMLInputElement;
    let des = document.getElementById("description1") as HTMLInputElement;
    this.setState({ project_name: attri.value });
    this.setState({ description: des.value }, () => this.send_data_backend());
  };

  render() {
    return (
      <div>
        {/* header  */}
        <ChakraHeadbar />
        <div className="bodyContainer">
          <div className="textheader">
            <Text>Create a New Project </Text>
          </div>

          <div className="maincontainer">
            <HStack className="namemaindiv">
              <div>
                <Text>Name : </Text>{" "}
              </div>
              <input id="name1" className="namediv" type="text"></input>
            </HStack>

            <HStack className="desmaindiv">
              <div style={{ height: "5em" }}>
                <Text>Description:</Text>{" "}
              </div>
              <textarea className="Description" id="description1"></textarea>
            </HStack>

            <HStack className="buttoncontainer">
              <Link to="/">
                <ChakraButton txtname={"Cancel"} />
              </Link>
              <Link to="/">
                <ChakraButton txtname={"Confirm"} onClickFunc={this.onsubmit} />
              </Link>
            </HStack>
          </div>
        </div>
      </div>
    );
  }
}

export default Create_New_Project_Page;
