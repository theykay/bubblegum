import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.scss";
import Header from './Components/Header';
import Footer from './Components/Footer';
import AboutMe from "./Pages/AboutMe";
import Handmade from "./Pages/Handmade";
import WebDesign from "./Pages/WebDesign";

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={AboutMe} />
          <Route exact path="/digital" component={WebDesign} />
          <Route exact path="/handmade" component={Handmade} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
};

export default App;
