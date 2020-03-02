import React from "react";
import Card from 'react-bootstrap/Card';
import "./style.css";

function Project(props) {
    return (
        <div>
            <Card className="col mb-4" style={{ width: '18rem', margin: '0 auto' }}>
                <div className="card h-100">
                    <Card.Img src={props.image} class="card-img-top img-fluid" alt={props.title} />
                    <Card.Body className="card-body item">
                        <Card.Title className="card-title">{props.title}</Card.Title>
                        <a className="link" href={props.deployed} rel="noopener noreferrer" target="_blank">Live Site</a>
                        <br />
                        <a className="link" href={props.github} rel="noopener noreferrer" target="_blank">Github Repo</a>
                    </Card.Body>
                </div>
            </Card>
            <br />
        </div>
    );
}

export default Project;
