import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./style.css";

function NavBar() {

  const location = useLocation();

  return (
    <header>
        <nav className="navbar navbar-expand-lg navbar-dark">
            <p className="navbar-brand">Daniel Fenichel</p>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link 
                        to="/"
                        className={location.pathname === "/" ? "nav-link active" : "nav-link"}
                        >
                        About
                        <span className="sr-only">(current)</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link 
                        to="/portfolio"
                        className={location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}
                        >Portfolio
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link 
                        to="/contact"
                        className={location.pathname === "/contact" ? "nav-link active" : "nav-link"}>
                        Contact
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
        <br />
    </header>
  );
}

export default NavBar;
