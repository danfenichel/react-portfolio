import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import projects from './projects.json';
import ProjContainer from "./components/ProjContainer";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import './App.css';

class App extends Component {
  state = {
    projects
  };

  render() {
    return (
      <Router>
        <NavBar />
        <Route exact path="/" component={About} />
        <Route exact path="/portfolio" component={ProjContainer} />
        <Route exact path="/contact" component={Contact} />
        <Footer />
      </Router>
    );
  }
}

export default App;
