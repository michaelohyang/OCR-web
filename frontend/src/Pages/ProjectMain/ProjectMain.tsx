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
                        "title": "Project 1",
                        "url": "https://jobs.newscientist.com/getasset/f1c3a835-6751-447e-a8a5-5e9dc2e76f0b/"
                    }, {
                        "title": "Project 2",
                        "url": "https://render.fineartamerica.com/images/rendered/default/print/5.5/8/break/images-medium-5/1-medical-sensor-research-brian-bell.jpg"
                    }, {
                        "title": "dummy project",
                        "url": "data:image/png;base64,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"
                    }, {
                        "title": "dummy project2",
                        "url": "data:image/png;base64,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"
                    }, {
                        "title": "dummy project3",
                        "url": "data:image/png;base64,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"
                    }, {
                        "title": "dummy project4",
                        "url": "data:image/png;base64,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"
                    }, {
                        "title": "dummy project5",
                        "url": "data:image/png;base64,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"
                    }, {
                        "title": "dummy project6",
                        "url": "data:image/png;base64,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"
                    }, {
                        "title": "dummy project7",
                        "url": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAO4AAADUCAMAAACs0e/bAAAASFBMVEX////JysqcnZ3l5uabnJyfoKDc3d3V19f7+/vKy8vT1NSkpaXOz8/z8/Pv7++7vLy/wMDh4eGur6+xsrK3uLioqam9v7+Vlpa4NrI9AAAFWElEQVR4nO2ci5KrKBRFFcE3+O77/386PI0mYDLTuaNYe9VU9e1IMi4PHA5oOkkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAC4CaWHs8/pb1EORe1j4Gef2d+At2mAVpx9bt+nDNqmaXW/Hj2EbdO0OPvsvg2vjnTTu3Xn/NA2rc8+v+/Cj23TNDv7DL9K8U63vVO2Eu9sow/vrnJ6G1wV3ohLrXJoqw3vbSWb9m0eVaUVrqA+pYppaqp/axtV7vogM70nntx1WDB+SjyF5ZsSCrrQvY9uqzYx3s1V99CtiozrOabkojiqP+6gW+3LJVl83Vm3fqkNw+V0/Lq5r1LK7qo7+FsHfGPXzUPN/b6R6z62o0QuE1Sbi/Kwfdy6lctSYk3GrVsFePeg49Z1A3e3fHC5y9edo9ZtbXCfFktuPHvCG7Wu9XpZCdv+7FkyRq1r9mJeB6kd0p596Jh17U0vzxi1Y/q1N8es25oDnooxeCRmXXPu3gnHxP118MasazKVdz/WDN5b6vrWtyaJvY7qmHUPOvMdo2sLZt92e+gtMetWoYTkrF4vRMy6abCaCNUfcesOgSO2l3tus0StW5ve/BxFt3Lw1B9R67pna/ZTr3uAzDdDxa1rw7vbelw3Jn3bkXHrPjbm7G56Va+3NL03SCPX3TwqxkWWiceWs/9ef+y6VeB5i9J/rz923TUN7wk9Gxq9rvcBBBG6LXYD3bR4CjA/aHrOuf8HDm54Vpvd9FLvr99aV9IWQyZkbj5yvZHuh0D3okD3zrqhG/L/iuDt4Mvx5nsWnxHRI69feCgynuBKst/GN/Acx1UpZR3xC6J6WB0AAAAAAAAAAIiboevMjiHvu96uyUU7j/PTVpNsp5/1FF3Xu5smrXuvJJu7ze2yMu/GqXePsuedYz57/6qlpNHnKRhlRjdvKCGEst1f/qgpndXPjBLqHrZhhKbueEfpz9pYTOoTCJm4+39Y/pz9FeaaMqI9RMMafXYDY4QsjDCy3SiuCenUz4wwtpio9bKJ0+UNs29Xv4zySNPITx51y5YyC72ALiMqXKvuQsiYcTFLr813wra65jrINzx0C/kydZcnpawpOC8aZjqCjG4nDGd/H7/WV54/dJWP+lkujG72Tne6Omgp3ehO6uXZ/rKsmlS3lLr9/+XzBq2rTtTp5nLI6SM/hLabdhtdHV7VfVddIXu47MEmEakj+l88z/Pr6Ta6HzrdmhovOTTX2CXPumOSVHSjK4XSgtrLI3WbXQZWnZlf42+lKLsfwhbOH7omxaYh3WYkZCgX0oxOt5SvZFxfhUSHWn5SWRdFURcmuqxZFM3Z85C2k4ElvfDobrrgRnfJGZlaeXS9IJkezrN0Vr9Z3T9q5tFpQGVmPQ/RK+h2SSHPp10+je5SqsQkx+faIqVqAq7tNOx0KTFJUEd3VCzX0E1mff77sRvWTXI1bPu1hUziRJhkp/quMGM3y3LbYS6VqpSGmkPZU2buQpl5SXR4s1U3V6WHjB0zU5fKzKZXN2S5pG7SEqfr5l0enHcXKUhp/4h/R8zQlD/0OBjtvCvfM11uItIaOl5rVTUdVlVSN8nVH1iwuqW8UtM8yf/sR6iqKjdVle4fl6qqrIaLrhyYMkyqZqaBmnlxr1nd3AZRXTNdX+qaeWnItmZuNOT8mpmazFTJpdF2RUSCK6LGvdbrhJyMrr5QVeOsk9VELroiGmazjk3Kx3qXy/XuVIXXu+61Wq93y7nrbFsxdz/6M9R6d+zd0M/ny6x3AQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwI34B1fHP1mjjpA0AAAAAElFTkSuQmCC"
                    }, {
                        "title": "dummy project8",
                        "url": "data:image/png;base64,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"
                    }],
        dict: {},
    };
    // this.getJson = this.getJson.bind(this);
    // this.postJson = this.postJson.bind(this);
    // this.getJson();
    this.populateDict();
  }

  populateDict = () => {
    console.log(this.state.projects);
    for (var key in this.state.projects) {
        this.state.dict[key] = this.state.projects[key];
    }
    console.log(this.state.dict);
  }

  removeProject = (title: any) => {
    console.log("REMOVE: " + title);
    let remainingProjects = this.state.projects.filter(
        (item: any) => item.title !== title
      );
    console.log(remainingProjects);
    // this.postJson();
    this.setState({
        projects: remainingProjects,
    });
  }

  postJson = () => {
    axios
      .post("http://localhost:8080/confirmForm", this.state.projects)
      .then((response) => console.log(response.data));
    // alert("Successful upload medical records!");
  };

  getJson = () => {
    axios.get("http://localhost:8080/form").then((response) => {
      this.setState({ projects: response.data });
      this.populateDict();
    });
  };

  render() {
    var projComp = [];
    for (var key in this.state.projects) {
        const k = key;
        console.log(k + " : " + this.state.projects[k].title);
        projComp.push(
            <div key={k}>
                    <Center bg="tomato" h="100px" color="white">
                        <img className="projectImage" src={this.state.projects[k].url} alt="..." />
                        {this.state.projects[k].title}
                        <button onClick={() => this.removeProject(this.state.projects[k].title)}>x</button>
                       {/* custome remove button */}
                    </Center> 
            </div>
        );
      }


    return (
      <div className="bodyContainer">
        <ChakraHeadbar />
        <div>
          <ParticlesBg type="thick" bg={true} />
          <Grid templateRows="repeat(3, 2fr)" height="45em" gap={3}>
            <Box>
              <p className="bodyText">
                Medical Research Projects
              </p>
            </Box>
            <Box>
                <Stack direction={'row'} className="projectBox" alignItems="center">
                    {projComp}
                </Stack>
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
