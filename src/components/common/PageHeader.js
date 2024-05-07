import React from "react";
import { useNavigate } from "react-router-dom";
import '../../styles/PageHeader.css';

function PageHeader({ title }) {
    const navigate = useNavigate();

    return ( 
        <div className="PageHeader bordered d-flex flex-row mb-1">
            <i onClick={() => { navigate(-1); }} className="fa-solid fa-arrow-left align-content-center" />
            <p className="title m-auto">{title} Projects</p>
        </div>
    );
}

export default PageHeader; 