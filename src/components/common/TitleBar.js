import React from "react";
import { NavLink } from "react-router-dom";
import '../../styles/TitleBar.css';

function TitleBar() {
    return (
        <nav className="TitleBar navbar navbar-expand-lg navbar-dark py-3">
            <div className="container">
                <NavLink to="/">
                    <p className="navbar-brand my-auto" href="index.html"><span className="fw-bolder">My Portfolio</span></p>
                </NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto small">
                        <NavLink to="/designer">
                            <li className="nav-item"><p className="nav-link">Designer</p></li>
                        </NavLink>
                        <NavLink to="/developer">
                            <li className="nav-item"><p className="nav-link">Developer</p></li>
                        </NavLink>
                        <NavLink to="/volunteer">
                            <li className="nav-item"><p className="nav-link">Volunteer</p></li>
                        </NavLink>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default TitleBar;