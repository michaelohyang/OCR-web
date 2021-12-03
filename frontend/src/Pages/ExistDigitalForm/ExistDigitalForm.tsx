import { Component } from "react";
import { HStack } from "@chakra-ui/layout";
import axios from "axios";
import ChakraButton from "../../GlobalComponents/ChakraButton";
import ChakraHeadbar from "../../GlobalComponents/ChakraHeadbar/ChakraHeadbar";
import "./ExistDigitalForm.css";
import { Link, withRouter } from "react-router-dom";
import { ClipLoader } from "react-spinners";

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
    this.getJson = this.getJson.bind(this);
    this.pushExistForm = this.pushExistForm.bind(this);
    this.mountInfo = this.mountInfo.bind(this);
  }

  componentWillMount() {
    this.mountInfo();
  }

  getJson = () => {
    return new Promise((resolve, reject) => {
      axios
        .get(
          `http://localhost:8080/allForms?id=${this.state.selectedProjectId["projectID"]}`
        )
        .then((response) => {
          try {
            resolve(response.data);
          } catch (error) {
            reject(error);
          }
        });
    });
  };

  mountInfo = () => {
    this.getJson().then((val: any) => {
      this.setState({ rawJson: val }, () =>
        this.pushExistForm(this.state.rawJson)
      );
    });
  };

  pushExistForm = (rawJson: any) => {
    var eachform: any[] = [];
    for (let patient in rawJson) {
      eachform = [];
      const p = patient;
      let countOfRows = 0;
      for (let key in rawJson[patient]) {
        console.log(key + ": " + rawJson[patient][key]);
        const k = key;
        eachform.push(
          <div key={countOfRows} className="existinfo">
            <HStack overflowX="auto">
              <div className="textdiv1">{k}:</div>
              <div>{rawJson[p][k]}</div>
            </HStack>
          </div>
        );
        countOfRows++;
      }
      this.state.forms.push(<div key={1000 + p}>{eachform}</div>);
    }
    setTimeout(() => this.forceUpdate(), 3000);
  };

  render() {
    setTimeout(() => this.forceUpdate(), 8000);
    return (
      <div className="existbodyContainer">
        <ChakraHeadbar />
        <div className="existmainbody">
          <div className="extraformstyle">
            {this.state.forms.length === 0 ? (
              <div>
                <ClipLoader color={"#000000"} loading={true} size={150} />
              </div>
            ) : (
              <div>{this.state.forms}</div>
            )}
          </div>
          <div className="existsubmitbuttom">
            <Link to="/">
              <ChakraButton txtname={"Return Project Page"} />
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
