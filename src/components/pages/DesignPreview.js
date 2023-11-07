import React from "react";
import { useNavigate } from "react-router-dom";
import '../../styles/DesignPreview.css';
import './DesignPage.js';

function DesignPreview({ projectName, projectData }) {
    const navigate = useNavigate();
    const handleClick = () => {
        const newLocation = "/designer/" + projectName;
        navigate(newLocation, {
            state: {
                projectName: projectName
            }
        });
    }

    const handleLinkClick = () => {
        navigator.clipboard.writeText(projectData.figmaLink)
    }

    return (
        <div className="Design col-xl-3 col-lg-4 col-md-6 col-sm-12 my-3">
            <div className="img-preview text-center" onClick={handleClick}>
                <img src={"images/previews/"+projectName+".png"} alt={projectName+" - Preview"} />
            </div>
            <div className="details d-flex justify-content-between">
                <div className="details-text">
                    <p className="details-name" onClick={handleClick}>{projectName}</p>
                </div>
                <div className="details-interact-btn d-flex align-items-center">
                    <i className="bi-link-45deg" onClick={handleLinkClick} />
                </div>
            </div>
        </div>
    );
}

export default DesignPreview;