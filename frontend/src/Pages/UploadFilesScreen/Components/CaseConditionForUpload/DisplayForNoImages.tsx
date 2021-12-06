import { Box, Grid } from "@chakra-ui/layout";
import ChakraHeadbar from "../../../../GlobalComponents/ChakraHeadbar/ChakraHeadbar";
import imageLogo from "./addIcon.png";
import "../../UploadFilesScreen.css";
import { Link } from "react-router-dom";
import { Button } from "@chakra-ui/react";

interface DisplayForNoImageUploadInterface {
  selectedProjectId: any;
  chooseFilesFunction: Function;
}

export default function DisplayForNoImageUpload(
  props: DisplayForNoImageUploadInterface
) {
  return (
    <div className="uploadPageBodyContainer">
      <ChakraHeadbar />
      <div>
        <Grid templateRows="repeat(3)" height="43em" gap={3}>
          <Box display="flex" justifyContent="center">
            <p className="uploadPageBodyText">
              No Limits On How Many Files You Can Upload!
            </p>
          </Box>
          <Box display="flex" justifyContent="center">
            <label className="uploadFileContainer">
              <input
                type="file"
                name="medical"
                className="hiddenImgInput"
                multiple
                onChange={(e: any) => props.chooseFilesFunction(e)}
              />
              <img
                src={imageLogo}
                alt="imagePreview"
                className="addIconInUploads"
              />
            </label>
          </Box>
          <div className="submitbuttom">
            <Link
              to={{
                pathname: "/projectDigitalForm",
                state: { projectID: props.selectedProjectId["projectID"] },
              }}
            >
              <Button
                _focus={{ outline: 0, boxShadow: "none" }}
                paddingLeft="2em"
                paddingRight="2em"
              >
                Back
              </Button>
            </Link>
          </div>
          <Box>
            <Grid
              templateColumns="repeat(4, 3fr)"
              gap={3}
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
          </Box>
        </Grid>
      </div>
    </div>
  );
}
