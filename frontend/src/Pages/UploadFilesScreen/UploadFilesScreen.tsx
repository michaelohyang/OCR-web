import { Box, Grid } from "@chakra-ui/layout";
import axios from "axios";
import { Component } from "react";
import ChakraButton from "../../GlobalComponents/ChakraButton";
import ChakraHeadbar from "../../GlobalComponents/ChakraHeadbar/ChakraHeadbar";
import DisplayFileImage from "./Components/DisplayFileImage/DisplayFileImage";
import "./UploadFilesScreen.css";
import { Link } from "react-router-dom";
import DisplayForNoImageUpload from "./Components/CaseConditionForUpload/DisplayForNoImages";

class UploadFilesScreen extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      arrayOfFiles: [],
      numberOfAddedFiles: 0,
    };

    this.chooseFiles = this.chooseFiles.bind(this);
    this.removeImage = this.removeImage.bind(this);
    this.uploadFilesFunction = this.uploadFilesFunction.bind(this);
  }

  uploadFilesFunction = () => {
    let formDataCopy = new FormData();
    for (let i = 0; i < this.state.arrayOfFiles.length; i++) {
      console.log(this.state.arrayOfFiles[i]);
      formDataCopy.append("medical", this.state.arrayOfFiles[i]);
    }
    console.log(formDataCopy);
    axios.post("http://localhost:8080/upload", formDataCopy);
    alert("Images Successfully Uploaded to The Database");
  };

  removeImage = (id: any) => {
    console.log(id);
    console.log(this.state.arrayOfFiles);
    let tempArrFilesFront = this.state.arrayOfFiles.slice(0, id);
    let tempArrFilesBack = this.state.arrayOfFiles.slice(
      id + 1,
      this.state.arrayOfFiles.length - 1
    );
    console.log(tempArrFilesFront, tempArrFilesBack);
    this.setState({
      arrayOfFiles: tempArrFilesFront.concat(tempArrFilesBack),
    });
  };

  // Callback after setState - easiest -> current implementation
  // await throught asynchronous call - second easiest
  // Promise execution using .then -> writing your own Promise -> very rare case -> only use it if other solution fails
  // Use window.addEventListerner -> slightly more complicated
  // useEffect = only for functional component

  chooseFiles = (e: any) => {
    console.log(e.target.files);
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
                <label className={"chooseFileBtnContainer"}>
                  <input
                    type="file"
                    name="medical"
                    multiple
                    onChange={(e: any) => this.chooseFiles(e)}
                  />
                  <p className={"chooseBtnText"}> Choose Files </p>
                </label>
                <Link to="/confirm">
                  <ChakraButton
                    txtname={"Upload"}
                    onClickFunc={this.uploadFilesFunction}
                    cssDesign={"uploadBtn"}
                  />
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
      <DisplayForNoImageUpload chooseFilesFunction={this.chooseFiles} />
    );
  }
}

export default UploadFilesScreen;
