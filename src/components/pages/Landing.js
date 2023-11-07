import React from "react";
import "../../styles/Landing.css";

function Landing() {
    return (
        <div className="Landing container">
            <div className="row h-100 my-auto">
                <div className="col-6 d-flex flex-column my-auto">
                    <div className="col-12">
                        <p className="big-text m-0">I am</p>
                        <p className="biggest-text m-0">CHINWE IBEGBU</p>
                    </div>
                    <div className="subtitle col-12 mt-2">
                        <p>I am a learner finding my path in technology and life at large with curiosity and flexibility.</p>
                    </div>
                    <div className="col-12 mt-1 d-flex">
                        <div className="portfolio-section">
                            <p>Designer</p>
                        </div>
                        <div className="portfolio-section">
                            <p>Developer</p>
                        </div>
                        <div className="portfolio-section">
                            <p>Volunteer</p>
                        </div>
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