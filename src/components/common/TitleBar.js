import React from "react";
import { NavLink } from "react-router-dom";
import '../../styles/TitleBar.css';
import Logo from "./Logo";

function TitleBar() {
    return (
        <nav className="TitleBar navbar navbar-expand-lg py-2">
            <div className="container">
                <NavLink to="/">
                    <Logo />
                </NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto small">
                        <NavLink to="/developer">
                            <li className="nav-item">
                                <p className="nav-link">Developer</p>
                            </li>
                        </NavLink>
                        <NavLink to="/designer">
                            <li className="nav-item">
                                <p className="nav-link">Designer</p>
                            </li>
                        </NavLink>
                        <NavLink to="/volunteer">
                            <li className="nav-item">
                                <p className="nav-link">Volunteer</p>
                            </li>
                        </NavLink>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default TitleBar;