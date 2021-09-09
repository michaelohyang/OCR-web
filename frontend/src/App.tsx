import "./App.css";
import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UploadFilesScreen from "./Pages/UploadFilesScreen/UploadFilesScreen";
import Button1 from "./GlobalComponents/Button1";
import Logofunc from "./GlobalComponents/logo";
import Header_screen from "./GlobalComponents/header_screen";
class App extends Component {
  render() {
    return (
      <Router>
      <div>
        {/* <Switch>
          <Route path="/">
            <UploadFilesScreen />
          </Route>
        </Switch> */}
        {/* <Button1 txtname={"helloworld"} /> */}
        {/* <Logofunc /> */}
        <Header_screen />
      </div>
      </Router>
    );
  }
}
{/* <Router>
<div>
  <Switch>
    <Route path="/">
      <UploadFilesScreen />
    </Route>
  </Switch>
</div>
</Router> */}
export default App;
