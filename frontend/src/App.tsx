import "./App.css";
import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import UploadFilesScreen from "./Pages/UploadFilesScreen/UploadFilesScreen";
import ConfirmFilesScreen from "./Pages/ConfirmDigitalForm";

class App extends Component {
  render() {
    return (
      <Router>
        <div>

          <Switch>
            <Route path="/" exact >
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
