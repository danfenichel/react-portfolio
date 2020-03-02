import React from "react";
import "./style.css";

function About() {
    return (
        <div className="container">
            <div className="card mb-3">
                <div className="row">
                    <div className="col-md-12">
                        <h2 id="about">About Me</h2>
                    </div>
                </div>
                <hr />
                <div className="row no-gutters">
                    <div className="col-md-4">
                        <img src="./images/portrait.jpg" class="img-fluid" alt="Responsive" />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <p className="card-text">Hello world! My name is Daniel (Dan for short) and I am an aspiring
                                software
                                developer. I was born and raised in the Boston area and just recently moved to Austin in
                                early 2019. I did my undergrad at the University of Massachusetts Amherst, where I studied
                                Accounting and Finance. After working for a hedge fund for the past four years I am taking
                                this big move across the country as an opportunity to make a major career move as well!</p>
                            <p className="card-text">On top of exploring this new and exciting city, I have been challenging
                                myself with this brand new world of coding. I couldn't be more excited to continue my
                                journey into this dynamic, growing field and see where this new adventure takes me!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;