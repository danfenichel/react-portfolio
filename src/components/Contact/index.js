import React from "react";
import "./style.css";

function Contact() {
    return (
        <div className="container content">
            <div className="row">
                <div className="col-md-12">
                    <h2>Contact</h2>
                </div>
            </div>
            <hr />
            <form action="#">
                <label for="name">Name</label> <br />
                <input type="text" id="name" name="name" placeholder="John Smith" /> <br /><br />
                <label for="email">Email</label> <br />
                <input type="text" id="email" name="email" placeholder="example@gmail.com" /> <br /><br />
                <label for="message">Message</label> <br />
                <textarea class="message" name="message"></textarea> <br />
                <input class="submit" type="submit" value="Submit" />
            </form>
        </div>
    );
}

export default Contact;