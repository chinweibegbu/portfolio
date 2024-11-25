import React from "react";
import "../../styles/Landing.css";
import { TypeAnimation } from 'react-type-animation';

function Landing() {
    return (
        <div className="Landing container h-100">
            <div className="row h-100 my-auto">
                <div className="col-6 d-flex flex-column my-auto">
                    <div className="col-12">
                        <p className="big-text m-0">I am</p>
                        {/* <p className="biggest-text m-0">CHINWE IBEGBU</p> */}
                        <TypeAnimation
                            sequence={[
                                "CHINWE IBEGBU",
                                1000
                            ]}
                            wrapper="p"
                            speed={50}
                            className="biggest-text m-0"
                            repeat={1}
                        />
                    </div>
                    <div className="subtitle col-12 mt-2">
                        <p>A learner finding my path in technology and life at large with curiosity and flexibility</p>
                    </div>
                    {/* <div className="col-12 mt-1 d-flex">
                        <div className="portfolio-section">
                            <p>Developer</p>
                        </div>
                        <div className="portfolio-section">
                            <p>Designer</p>
                        </div>
                        <div className="portfolio-section">
                            <p>Volunteer</p>
                        </div>
                    </div> */}
                    <div className="download-button col-12 mt-2 d-flex bordered justify-content-center py-2 px-3">
                        <a href="../../../data/software-engineer-cv-31052024.pdf" download="Chinwe Ibegbu - Software Engineer CV.pdf">
                            <div className="d-flex align-items-center">
                                <i className="fa-solid fa-download me-2" />
                                <p className="m-0">Download CV</p>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="col-6 d-flex flex-column my-auto">
                    <img className="headshot" src="images/Chinwe Ibegbu.jpg" alt="headshot of Chinwe Ibegbu" />
                </div>
            </div>
        </div>
    );
}

export default Landing;