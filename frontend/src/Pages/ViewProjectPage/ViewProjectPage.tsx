import { Box, Grid } from "@chakra-ui/layout";
import axios from "axios";
import { Component } from "react";
import ChakraHeadbar from "../../GlobalComponents/ChakraHeadbar/ChakraHeadbar";
import "./ViewProjectPage.css";
import ProjectModal from "./Components/ProjectModal";
import imageLogo from "./Components/images/addIcon.png";
import { Link } from "react-router-dom";
import ProjectDigitalForm from "../ProjectDigitalForm/ProjectDigitalForm";

/**
 * This is the first page of the application.
 * You are able to view available projects for each client.
 * You can create new project for new client as well.
 * @returns TSX element
 */
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

  /**
   * Remove an existing project from the dashboard
   * @param id a string of projectID, which is a unique key assigned to each project
   * @returns void
   */
  removeProject = (id: string) => {
    var remove = window.confirm("FATAL! Deleted project will be permanate!");
    if (remove) {
      let remainingProjects = this.state.projects.filter(
        (item: any) => item.key !== id
      );
      this.setState({ projects: remainingProjects }, () => {
        axios
          .post(`http://localhost:8080/delete?id=${id}`)
          .then((response) => console.log(response));
      });
    }
  };

  selectProject = (projectId: any) => {
    <ProjectDigitalForm selectedProjectId={projectId} />;
    this.setState({
      selectedProjectId: projectId,
    });
  };

  /**
   * Fetch the data from Firebase to load the existing projects
   * @returns void
   */
  getJson = () => {
    axios.get("http://localhost:8080/projects").then((response) => {
      this.setState({ projects: response.data });
    });
  };

  /**
   * Update the current array that contains current exisitng project to
   * reflect changes when new projects are added frin the database
   * @param updatedInfo  the array that contains all the existing + new projects
   * @returns void
   */
  updateProject = (updatedInfo: []) => {
    if (!this.arraysEqual(this.state.projects, updatedInfo)) {
      this.setState({ projects: updatedInfo });
    }
  };

  /**
   *  Checks two see if two arrays are equal
   * @param a an array
   * @param b an array
   * @returns a boolean statement
   */
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
