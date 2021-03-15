import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import AboutMe from "./Pages/AboutMe";
import Handmade from "./Pages/Handmade";
import WebDesign from "./Pages/WebDesign";

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={AboutMe} />
          <Route exact path="/web" component={WebDesign} />
          <Route exact path="/handmade" component={Handmade} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
