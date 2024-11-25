import React from "react";
import '../../styles/UnderConstruction.css';

function UnderConstruction() {
    return (
        <div className="UnderConstruction align-content-center">
            <div className="row w-100 justify-content-center">
                <img src="./images/femme-coding.svg" alt="ILLUSTRATION: Femme person at server" />
                <p className="medium-text">This web page is under construction</p>
                <p>Thank you for visiting!</p>
            </div>
        </div>
    );
}

export default UnderConstruction;