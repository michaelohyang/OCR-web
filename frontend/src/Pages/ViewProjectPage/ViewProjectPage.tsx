import { HStack } from "@chakra-ui/layout";
import { Box, Grid } from "@chakra-ui/layout";
import axios from "axios";
import { Component } from "react";
import ChakraButton from "../../GlobalComponents/ChakraButton";
import ChakraHeadbar from "../../GlobalComponents/ChakraHeadbar/ChakraHeadbar";
import "./ViewProjectPage.css";
import { Link } from "react-router-dom";
import ProjectModal from "./ProjectModal";

class ViewProjectPage extends Component<any, any> {
  constructor(props: any) {
    super(props);

    this.state = {
      projects: [
        {
          id: 1,
          title: "Pressure Monitoring System",
          description: "This is an attractive project...",
        },
        {
          id: 2,
          title: "Understanding the Benefits ",
          description: "The mental health industry,",
        },
        {
          id: 3,
          title: "Blockchain-based Record System",
          description: "A patient’s medical records play a...",
        },
        {
          id: 4,
          title: "New Project",
          description: "This is an amazing project!",
        },
        {
          id: 5,
          title: "Dummy Project5",
          description: "Hello, Welcome to our project!",
        },
        {
          id: 6,
          title: "Dummy Project6",
          description: "Hello, Welcome to our project!",
        },
        {
          id: 7,
          title: "Dummy Project7",
          description: "Hello, Welcome to our project!",
        },
        {
          id: 8,
          title: "Dummy Project8",
          description: "Hello, Welcome to our project!",
        },
        {
          id: 9,
          title: "Dummy Project9",
          description: "Hello, Welcome to our project!",
        },
        {
          id: 10,
          title: "Dummy Project10",
          description: "Hello, Welcome to our project!",
        },
      ],
      selectedProjectId: {},
    };
  }

  removeProject = (id: any) => {
    console.log("REMOVE: " + id);
    var remove = window.confirm("FATAL! Deleted project will be permanate!");
    if (remove) {
      let remainingProjects = this.state.projects.filter(
        (item: any) => item.id !== id
      );
      this.setState({
        projects: remainingProjects,
      });
    }
  };

  postSelectedProject = (id: any) => {
    console.log("selected project: " + id);
    this.setState({
      selectedProjectid: id,
    });
    axios
      .post("http://localhost:8080/projectMain", this.state.selectedProjectId)
      .then((response) => console.log(response.data));
  };

  postProject = () => {
    axios
      .post("http://localhost:8080/projectMain", this.state.projects)
      .then((response) => console.log(response.data));
    // alert("Successful upload medical records!");
  };

  getJson = () => {
    axios.get("http://localhost:8080/projects").then((response) => {
      this.setState({ projects: response.data });
    });
  };

  render() {
    var availableProjects = [];
    for (let key in this.state.projects) {
      const k = key;
      availableProjects.push(
        <div key={k} className="boxContainer">
          <ProjectModal
            projects={this.state.projects}
            k={k}
            removeProject={this.removeProject}
          />
        </div>
      );
    }

    return (
      <div className="screenContainer">
        <ChakraHeadbar />
        <div>
          <Grid templateRows="repeat(3, 2fr)" height="50" gap={3}>
            <Box>
              <p className="bodyText">Medical Research Projects</p>
            </Box>
            {/* <Box>{availableProjects}</Box>
             */}
            <div className="projectBox">{availableProjects}</div>
          </Grid>
        </div>
      </div>
    );
  }
}

export default ViewProjectPage;
