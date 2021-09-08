import { EmailIcon } from "@chakra-ui/icons";
import { Box, Grid, GridItem } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/react";
import { Component } from "react";
import NavBar from "./Components/NavBar";
import "./UploadFilesScreen.css";

class UploadFilesScreen extends Component {
  render() {
    return (
      <div>
        <div>
          <NavBar />
        </div>
        <div className="bodyContainer">
          <Grid h="50em" gap={4}>
            <GridItem>
              <p className="bodyText">
                No Limits On How Many Files You Can Upload!
              </p>
            </GridItem>
            <GridItem>
              <div className="buttonContainer">
                <Button leftIcon={<EmailIcon />} className="uploadBtn">
                  <p className="uploadBtnText">Upload</p>
                </Button>
              </div>
            </GridItem>
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
    );
  }
}

export default UploadFilesScreen;
