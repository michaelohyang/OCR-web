import { Box, Grid } from "@chakra-ui/layout";
import axios from "axios";
import { Component } from "react";
import ChakraButton from "../../GlobalComponents/ChakraButton";
import ChakraHeadbar from "../../GlobalComponents/ChakraHeadbar/ChakraHeadbar";
import DisplayFileImage from "./Components/DisplayFileImage/DisplayFileImage";
import "./UploadFilesScreen.css";

class UploadFilesScreen extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      arrayOfFiles: [],
      numberOfAddedFiles: 0,
    };

    this.uploadFilesFunction = this.uploadFilesFunction.bind(this);
    this.chooseFiles = this.chooseFiles.bind(this);
    this.removeImage = this.removeImage.bind(this);
  }

  uploadFilesFunction = () => {
    let formDataCopy = new FormData();
    console.log("This is array of files", this.state.arrayOfFiles);
    formDataCopy.append("medical", this.state.arrayOfFiles);
    console.log("this is formdata", formDataCopy);
    axios.post("http://localhost:8080/upload", formDataCopy);
    alert("Images Successfully Uploaded to The Database");
  };

  removeImage = (id: any) => {
    console.log(id);
    let tempArrFiles = this.state.arrayOfFiles.filter(
      (item: any) => item.id !== id
    );
    this.setState({
      arrayOfFiles: tempArrFiles,
    });
  };

  chooseFiles = (e: any) => {
    let arrNewFiles = [];
    let formDataCopy = this.state.formData;
    let fileLength = e.target.files.length;
    for (let i = 0; i < fileLength; i++) {
      if (e.target.files[i]["type"].split("/")[0] !== "image") {
        return;
      }
    }
    for (let i = 0; i < fileLength; i++) {
      arrNewFiles.push({
        id: `patient_name_${i}`,
        image: URL.createObjectURL(e.target.files[i]),
      });
    }
    // update the arrray that contains the current files we have
    this.setState({ arrayOfFiles: arrNewFiles });

    // update the formData
    this.setState({ formData: formDataCopy });

    // Update the literal number of files added
    this.setState({ numberOfAddedFiles: fileLength });
  };

  render() {
    return (
      <div>
        <div>
          <ChakraHeadbar />
        </div>
        <div className="bodyContainer">
          <Grid templateRows="repeat(3, 2fr)" height="45em" gap={3}>
            <Box>
              <p className="bodyText">
                No Limits On How Many Files You Can Upload!
              </p>
            </Box>
            <Box>
              <div className="img">
                <DisplayFileImage
                  fileArray={this.state.arrayOfFiles}
                  removeImage={this.removeImage}
                />
              </div>
            </Box>
            <Box>
              <div className="btnContainer">
                <label className={"chooseBtnContainer"}>
                  <input
                    type="file"
                    name="medical"
                    multiple
                    onChange={(e: any) => this.chooseFiles(e)}
                  />
                  <p className={"chooseBtnText"}>Choose Files</p>
                </label>
                <ChakraButton
                  txtname={"Upload"}
                  onClickFunc={this.uploadFilesFunction}
                  cssDesign={"uploadBtn"}
                />
              </div>
            </Box>
          </Grid>
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
        </div>
      </div>
    );
  }
}

export default UploadFilesScreen;
