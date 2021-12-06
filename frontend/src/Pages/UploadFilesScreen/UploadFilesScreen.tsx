import { Box, Grid } from "@chakra-ui/layout";
import axios from "axios";
import { Component } from "react";
import ChakraHeadbar from "../../GlobalComponents/ChakraHeadbar/ChakraHeadbar";
import DisplayFileImage from "./Components/DisplayFileImage/DisplayFileImage";
import "./UploadFilesScreen.css";
import { Link, withRouter } from "react-router-dom";
import DisplayForNoImageUpload from "./Components/CaseConditionForUpload/DisplayForNoImages";
import { Button } from "@chakra-ui/react";

/**
 * This page allows the user to upload one or multiple medical images
 * to a individual client's project so that the OCR algorithm can
 * process the image(s)
 * @returns TSX element
 */
class UploadFilesScreen extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      arrayOfFiles: [],
      numberOfAddedFiles: 0,
      selectedProjectId: {},
    };
    this.state.selectedProjectId["projectID"] =
      this.props.location.state["projectID"];
    this.setState({
      selectedProjectId: this.state.selectedProjectId,
    });
    this.chooseFiles = this.chooseFiles.bind(this);
    this.removeImage = this.removeImage.bind(this);
    this.uploadFilesFunction = this.uploadFilesFunction.bind(this);
  }

  /**
   * Uploads the medical record images to the backend
   * so that the backend can run the algorithm
   * @returns void
   */
  uploadFilesFunction = () => {
    let formDataCopy = new FormData();
    for (let i = 0; i < this.state.arrayOfFiles.length; i++) {
      formDataCopy.append("medical", this.state.arrayOfFiles[i]);
    }
    axios.post(`http://localhost:8080/upload`, formDataCopy);
    alert("Images Successfully Uploaded to The Database");
  };

  /**
   * Remove unwanted images that the user have uploaded
   * @param id number of the imageID
   * @returns void
   */
  removeImage = (id: number) => {
    let tempArrFilesFront = this.state.arrayOfFiles.slice(0, id);
    let tempArrFilesBack = this.state.arrayOfFiles.slice(
      id + 1,
      this.state.arrayOfFiles.length - 1
    );
    this.setState({
      arrayOfFiles: tempArrFilesFront.concat(tempArrFilesBack),
    });
  };

  /**
   * Allows the user to choose medical record images and save that image temporarily on the UI.
   * Allows the images to be shown on the UI
   * @param e event handler
   * @returns void
   */
  chooseFiles = (e: any) => {
    let arrNewFiles = [];
    let fileLength = e.target.files.length;
    for (let i = 0; i < fileLength; i++) {
      if (e.target.files[i]["type"].split("/")[0] !== "image") {
        return;
      }
    }
    for (let i = 0; i < fileLength; i++) {
      arrNewFiles.push(e.target.files[i]);
    }
    const originalFilesLength = this.state.arrayOfFiles.length;
    for (let i = 0; i < originalFilesLength; i++) {
      arrNewFiles.push(this.state.arrayOfFiles[i]);
    }
    // update the arrray that contains the current files we have
    this.setState({ arrayOfFiles: arrNewFiles });

    // Update the literal number of files added
    this.setState({ numberOfAddedFiles: fileLength });
  };

  render() {
    return this.state.arrayOfFiles.length !== 0 ? (
      <div className="uploadPageBodyContainer">
        <ChakraHeadbar />
        <div>
          <Grid templateRows="repeat(3, 2fr)" height="43em" gap={3}>
            <Box display="flex" justifyContent="center" marginBottom="1em">
              <p className="uploadPageBodyText">
                No Limits On How Many Files You Can Upload!
              </p>
            </Box>
            <Box display="flex" justifyContent="center" padding="0.3em">
              <DisplayFileImage
                fileArray={this.state.arrayOfFiles}
                removeImage={this.removeImage}
              />
            </Box>
            <Box>
              <div className="uploadPageBtnContainer">
                <Link
                  to={{
                    pathname: "/existDigitalForm",
                    state: {
                      projectID: this.state.selectedProjectId["projectID"],
                    },
                  }}
                >
                  <Button
                    marginRight="2.5em"
                    _focus={{ outline: 0, boxShadow: "none" }}
                    paddingLeft="2em"
                    paddingRight="2em"
                  >
                    Back
                  </Button>
                </Link>
                <label className={"chooseFileBtnContainer"}>
                  <input
                    type="file"
                    name="medical"
                    multiple
                    onChange={(e: any) => this.chooseFiles(e)}
                  />
                  <p className={"chooseBtnText"}> Choose Files </p>
                </label>
                <Link
                  to={{
                    pathname: "/confirm",
                    state: {
                      projectID: this.state.selectedProjectId["projectID"],
                    },
                  }}
                >
                  <Button
                    marginLeft="2.5em"
                    _focus={{ outline: 0, boxShadow: "none" }}
                    onClick={this.uploadFilesFunction}
                  >
                    Submit
                  </Button>
                </Link>
              </div>
            </Box>
            <Grid
              templateColumns="repeat(4, 1fr)"
              gap={6}
              className="descriptionContainer"
            >
              <Box className="descriptionText">
                ① Click on the files you want to upload
              </Box>
              <Box className="descriptionText">
                ② View your files on this page
              </Box>
              <Box className="descriptionText">
                ③ Finalize your changes on the files you want
              </Box>
              <Box className="descriptionText">
                ④ Sit back and watch the magic!
              </Box>
            </Grid>
          </Grid>
        </div>
      </div>
    ) : (
      <DisplayForNoImageUpload
        selectedProjectId={this.state.selectedProjectId}
        chooseFilesFunction={this.chooseFiles}
      />
    );
  }
}

export default withRouter(UploadFilesScreen);
