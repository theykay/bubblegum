import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.scss";
// import Header from './Components/Header';
// import Footer from './Components/Footer';
// import AboutMe from "./Pages/AboutMe";
import Handmade from "./Pages/Handmade";
// import WebDesign from "./Pages/WebDesign";
import OnePage from './Pages/OnePage';

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/handmade" component={Handmade} />
          <Route path="/" component={OnePage} />
        </Switch>
      </Router>
      {/* <OnePage /> */}
    </>
  );
};

export default App;
