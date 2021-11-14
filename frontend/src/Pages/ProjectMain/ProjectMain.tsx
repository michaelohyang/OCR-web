import { VStack, HStack, Stack, Center } from "@chakra-ui/layout";
import { Box, Grid } from "@chakra-ui/layout";
import axios from "axios";
import { Component } from "react";
import ChakraButton from "../../GlobalComponents/ChakraButton";
import ChakraHeadbar from "../../GlobalComponents/ChakraHeadbar/ChakraHeadbar";
import "./MainProject.css";
import { Link } from "react-router-dom";
import ParticlesBg from "particles-bg";

class ProjectMain extends Component<any, any> {
  constructor(props: any) {
    super(props);

    this.state = {
        projects: [{
                        "id": 1,
                        "title": "Pressure Monitoring System",
                        "description": "This is an attractive project..."
                    }, {
                      "id": 2,
                        "title": "Understanding the Benefits of Telepsychiatry",
                        "description": "The mental health industry is..."
                    }, {
                        "id": 3,
                        "title": "Blockchain-based Record System",
                        "description": "A patient’s medical records play a..."
                    }, {
                        "id": 4,
                        "title": "New Project",
                        "description": "This is an amazing project!"
                    }, {
                        "id": 5,
                        "title": "dummy project3",
                        "url": "data:image/png;base64,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"
                    }, {
                        "id": 6,
                        "title": "dummy project4",
                        "url": "data:image/png;base64,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"
                    }, {
                        "id": 7,
                        "title": "dummy project5",
                        "url": "data:image/png;base64,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"
                    }, {
                        "id": 8,
                        "title": "dummy project6",
                        "url": "data:image/png;base64,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"
                    }, {
                        "id": 9,
                        "title": "dummy project7",
                        "url": "data:image/png;base64,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"
                    }, {
                        "id": 10,
                        "title": "dummy project8",
                        "url": "data:image/png;base64,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"
                    }],
        selectedProjectId: {},
    };
    // this.getJson = this.getJson.bind(this);
    // this.postProject = this.postProject.bind(this);
    // this.getJson();
  }

  removeProject = (id: any) => {
    console.log("REMOVE: " + id);
    var remove = window.confirm("FATAL! Deleted project will be permanate!");
    if (remove) {
      let remainingProjects = this.state.projects.filter(
          (item: any) => item.id !== id
        );
      console.log(remainingProjects);
      // this.postProject();
      this.setState({
          projects: remainingProjects,
      });
    }
  }

  postSelectedProject = (id: any) => {
    console.log("selected project: " + id);
    this.setState({
      selectedProjectid: id
    });
    axios
    .post("http://localhost:8080/projectMain", this.state.selectedProjectId)
    .then((response) => console.log(response.data));
  }

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
    var projComp = [];
    for (var key in this.state.projects) {
        const k = key;
        console.log(k + " : " + this.state.projects[k].title);
        projComp.push(
            <div key={k}>
                    <Center bg="tomato" h="7em" w="14em" color="white" marginTop="3em">
                      <Link to="/upload" onClick={() => this.postSelectedProject(this.state.projects[k].id)}>
                        {/* <img className="projectImage" src={this.state.projects[k].url} alt="..." /> */}
                        <h1 className="projectTitle">{this.state.projects[k].title}</h1>
                        <p className="projectDes">
                          {this.state.projects[k].description}
                        </p>
                      </Link>
                        <button onClick={() => this.removeProject(this.state.projects[k].id)}>x</button>
                       {/* custome remove button */}
                    </Center> 
            </div>
        );
      }

    return (
      <div className="bodyContainer">
        <ChakraHeadbar />
        <div>
          {/* <ParticlesBg type="thick" bg={true} /> */}
          <Grid templateRows="repeat(3, 2fr)" height="45em" gap={3}>
            <Box>
              <p className="bodyText">
                Medical Research Projects
              </p>
            </Box>
            <Box>
                <HStack direction={'row'} className="projectBox">
                    {projComp}
                </HStack>
            </Box>
            <Box>
              <div className="btnContainer">
                <Link to="/createProject">
                  <ChakraButton
                    txtname={"Add Project"}
                    cssDesign={"uploadBtn"}
                  />
                </Link>
              </div>
            </Box>
            </Grid>
          
        </div>
      </div>
    );
  }
}

export default ProjectMain;
