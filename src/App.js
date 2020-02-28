import React, { Component } from "react";
import projects from './projects.json';
import Project from "./components/Projects";
// import "../public/livdin.png"
import './App.css';
import './dayplanner.png';
import livdin from './livdin.png';

class App extends Component {
  state = {
    projects
  };

  render() {
    return (
      <div>
        {this.state.projects.map(project => (
          <Project
            id={project.id}
            title={project.title}
            image={project.image}
            deployed={project.deployed}
            github={project.github}
          />
        ))}
      </div>
    );
  }
}

export default App;
