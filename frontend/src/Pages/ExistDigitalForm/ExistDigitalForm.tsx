import { Component } from "react";
import { HStack, Stack } from "@chakra-ui/layout";
import axios from "axios";
import ChakraButton from "../../GlobalComponents/ChakraButton";
import ChakraHeadbar from "../../GlobalComponents/ChakraHeadbar/ChakraHeadbar";
import "./ExistDigitalForm.css";
import { Link, withRouter } from "react-router-dom";

class ExistDigitalForm extends Component<any, any> {
  // selectedProjectId: any;
  constructor(props: any) {
    super(props);
    // this.ProjectModal;
    this.state = {
      rawJson: [],
      form: [],
      forms: [],
      selectedProjectId: {},
    };
    this.state.selectedProjectId["projectID"] =
      this.props.location.state["projectID"];
    this.setState({
      selectedProjectId: this.state.selectedProjectId,
    });
    console.log(this.state.selectedProjectId);
    this.getJson();
    this.pushExistForm(this.state.rawJson);

  }
  getJson = () => {
    axios
      .get(
        `http://localhost:8080/allForms?id=${this.state.selectedProjectId["projectID"]}`
      )
      .then((response) => {
        this.setState({ rawJson: response.data });
        //   this.setState({ dic: this.state.dic });
      });
  };

  pushExistForm = (rawJson: any) => {
    console.log(this.state.selectedProjectId);
    var eachform: any[] = [];
    for (let patient in rawJson) {
      eachform = [];
      const p = patient;
      let countOfRows = 0;
      for (let key in rawJson[patient]) {
        console.log(key + ": " + rawJson[patient][key]);
        const k = key;
        eachform.push(
          <div key={countOfRows}>
            <HStack >
              <div>{k}</div>
              <div>{rawJson[p][k]}</div>
            </HStack>
          </div>
        );
        countOfRows++;
      }
      this.state.forms.push(
        <div key={1000 + p} className="existinfo">
          {/* <Center bg="tomato" h="100px" w="200px" color="white"> */}
          {eachform}
          {/* </Center>  */}
        </div>
      );
    }
  };

  render() {
    return (
      <div className="existbodyContainer">
        <ChakraHeadbar />
        <div className="existmainbody">
          <div className="extraformstyle">
            {this.state.forms}
          </div>
          <div className="existsubmitbuttom">
            {/* <Link to={{pathname: "/existDigitalForm", 
                      state: {projectID: props.k}}} 
                      onClick={() => props.selectProject(props.k)}> */}
            <Link to="/">
              <ChakraButton txtname={"return to project main"} />
            </Link>
            <br />
            <Link
              to={{
                pathname: "/upload",
                state: { projectID: this.state.selectedProjectId["projectID"] },
              }}
            >
              <ChakraButton txtname={"Add New Medical Record"} />
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(ExistDigitalForm);
