import { Grid } from "@chakra-ui/layout";
import { Component } from "react";
import NavBar from "./Components/NavBar";

var styles = {
  container: {
    background: "#00A36C",
    height: "50em",
  },
};

class UploadFilesScreen extends Component {
  render() {
    return (
      <div>
        <div>
          <NavBar />
        </div>
        <div style={styles.container}></div>
      </div>
    );
  }
}

export default UploadFilesScreen;
