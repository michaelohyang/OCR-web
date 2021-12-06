import "./App.css";
import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UploadFilesScreen from "./Pages/UploadFilesScreen/UploadFilesScreen";
import ConfirmFilesScreen from "./Pages/ConfirmDigitalForm/ConfirmDigitalForm";
import ViewProjectPage from "./Pages/ViewProjectPage/ViewProjectPage";
import CreateProject from "./Pages/CreateNewProjectPage/CreateNewProjectPage";
import ProjectDigitalForm from "./Pages/ProjectDigitalForm/ProjectDigitalForm";
// import DigitalForm from "./Pages/DigitalForm/DigitalForm";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route path="/" exact>
              <ViewProjectPage />
            </Route>
            <Route path="/createProject">
              <CreateProject />
            </Route>
            <Route path="/upload">
              <UploadFilesScreen />
            </Route>
            <Route path="/confirm">
              <ConfirmFilesScreen />
            </Route>
            <Route path="/projectDigitalForm">
              <ProjectDigitalForm />
            </Route>
            {/* <Route path="/digitalForm">
              <DigitalForm />
            </Route> */}
            <Route>
              <UploadFilesScreen />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
