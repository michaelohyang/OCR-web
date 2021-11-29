import { Box, Grid } from "@chakra-ui/layout";
import axios from "axios";
import { Component } from "react";
import ChakraHeadbar from "../../GlobalComponents/ChakraHeadbar/ChakraHeadbar";
import "./ViewProjectPage.css";
import ProjectModal from "./Components/ProjectModal";
import imageLogo from "./Components/addIcon.png";
import { Link } from "react-router-dom";
import { func } from "prop-types";

class ViewProjectPage extends Component<any, any> {
  constructor(props: any) {
    super(props);

    this.state = {
      projects: [],
      selectedProjectId: {},
      render: false,
    };

    this.arraysEqual = this.arraysEqual.bind(this);
    this.updateProject = this.updateProject.bind(this);
  }

  componentWillMount() {
    var availableProjects: any = [];
    axios.get("http://localhost:8080/projects").then((res) => {
      let projects = res.data;
      for (let key in projects) {
        const k = key;
        availableProjects.push(
          <div key={k} className="boxContainer">
            <ProjectModal
              projects={projects}
              k={k}
              removeProject={this.removeProject}
            />
          </div>
        );
      }
      this.updateProject(availableProjects);
    });
  }

  removeProject = (id: any) => {
    var remove = window.confirm("FATAL! Deleted project will be permanate!");
    if (remove) {
      let remainingProjects = this.state.projects.filter(
        (item: any) => item.key !== id
      );
      
      axios.post(`http://localhost:8080/delete?id=${id}`).then((response) => console.log(response));
      this.setState({ projects: remainingProjects });
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

  updateProject = (updatedInfo: []) => {
    if (!this.arraysEqual(this.state.projects, updatedInfo)) {
      this.setState({ projects: updatedInfo }, () => {
        console.log(this.state.projects);
      });
    }
  };

  arraysEqual = (a: [], b: []) => {
    if (a === b) return true;
    if (a == null || b == null) return false;
    if (a.length !== b.length) return false;

    for (var i = 0; i < a.length; ++i) {
      if (a[i] !== b[i]) return false;
    }
    return true;
  };

  render() {
    return (
      <div className="screenContainer">
        <ChakraHeadbar />
        <div>
          <Grid templateRows="repeat(3, 2fr)" height="50" gap={3}>
            <Box>
              <p className="viewProjectBodyText">Medical Research Projects</p>
            </Box>
            <div className="projectBox">
              {this.state.projects}
              <Link to="/createProject">
                <div className="addButtonContainer">
                  <img src={imageLogo} alt="imagePreview" className="addIcon" />
                </div>
              </Link>
            </div>
          </Grid>
        </div>
      </div>
    );
  }
}

export default ViewProjectPage;
