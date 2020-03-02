import React, { Component } from "react";
import projects from '../../projects.json';
import Project from "../Projects";

class ProjContainer extends Component {
    state = {
        projects
    };

    render() {
        return (
            <div className="row row-cols-1 row-cols-md-3">
                {this.state.projects.map(project => (
                    <Project
                        id={project.id}
                        title={project.title}
                        github={project.github}
                        deployed={project.deployed}
                        image={project.image}
                    />
                ))}
            </div>
        );
    }
}

export default ProjContainer;