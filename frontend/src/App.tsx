import "./App.css";
import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UploadFilesScreen from "./Pages/UploadFilesScreen/UploadFilesScreen";
import ConfirmFilesScreen from "./Pages/ConfirmDigitalForm/ConfirmDigitalForm";
import ProjectMain from "./Pages/ProjectMain/ProjectMain";
// import CreateProject from "./Pages/CreateNewProjectPage/CreateNewProjectPage";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route path="/" exact>
              <ProjectMain />
            </Route>
            {/* <Route path="/createProject">
              <CreateProject />
            </Route>  */}
            <Route path="/upload">
              <UploadFilesScreen />
            </Route> 
            <Route path="/confirm">
              <ConfirmFilesScreen />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
