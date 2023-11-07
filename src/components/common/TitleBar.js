import React from "react";
import { NavLink } from "react-router-dom";

function TitleBar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-white bg-white py-3">
            <div className="container px-5">
                <a className="navbar-brand" href="index.html"><span className="fw-bolder">Chinwe Ibegbu</span></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 small fw-bolder">
                        <NavLink to="/designer">
                            <li className="nav-item"><a className="nav-link">Designer</a></li>
                        </NavLink>
                        <NavLink to="/developer">
                            <li className="nav-item"><a className="nav-link">Developer</a></li>
                        </NavLink>
                        <NavLink to="/volunteer">
                            <li className="nav-item"><a className="nav-link">Volunteer</a></li>
                        </NavLink>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default TitleBar;