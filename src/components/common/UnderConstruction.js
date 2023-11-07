import React from "react";
import '../../styles/UnderConstruction.css';

function UnderConstruction() {
    return (
        <div className="UnderConstruction row w-100 my-auto d-flex justify-content-center">
            <img src="./images/femme-coding.svg" alt="ILLUSTRATION: Femme person at server" />
            <p className="heading m-0">This webpage is under construction</p>
            <p>Thank you for visiting!</p>
        </div>
    );
}

export default UnderConstruction;