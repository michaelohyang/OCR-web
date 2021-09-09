import "./App.css";
import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UploadFilesScreen from "./Pages/UploadFilesScreen/UploadFilesScreen";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route path="/">
              <UploadFilesScreen />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
