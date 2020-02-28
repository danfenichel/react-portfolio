import React from "react";
import "./style.css";

function Project(props) {
    return (
    <div class="col mb-4">
        <div class="card h-100">
            <img src={props.image} class="card-img-top img-fluid" alt={props.title} />
            <div class="card-body item">
                <h5 class="card-title">{props.title}</h5>
                <a class="link" href={props.deployed} rel="noopener noreferrer" target="_blank">Live Site</a>
                <br />
                <a class="link" href={props.github} rel="noopener noreferrer" target="_blank">Github Repo</a>
            </div>
        </div>
    </div>
    );
}
          
export default Project;
