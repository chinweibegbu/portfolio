import React from "react";
import { useNavigate } from "react-router-dom";
import '../../styles/DeveloperPreview.css';

import './DeveloperPage.js';
import Tag from "../common/Tag.js";

import useFetchProject from "../../hooks/useFetchProject.js";

function DeveloperPreview({ projectName, allProjectData }) {
    const state = 0;
    const [projectData] = useFetchProject(allProjectData, projectName);

    const navigate = useNavigate();
    const handleClick = () => {
        const newLocation = "/developer/" + projectName;
        navigate(newLocation, {
            state: {
                projectData: projectData
            }
        });
    }

    const handleInteractButtonClick = (linkType) => {
        // navigator.clipboard.writeText(projectData[linkType]);
        window.open(projectData[linkType], "_blank");
    }

    return (
        <div className="DeveloperPreview col-xl-3 col-lg-4 col-md-6 col-sm-12 mt-3 bordered">
            <div className="img-preview d-flex justify-content-center align-items-center" onClick={handleClick}>
                {
                    !state ?
                        <i className="fa-solid fa-image" /> :
                        <img src={"images/previews/" + projectName + ".png"} alt={projectName + " - Preview"} />
                }
            </div>
            <div className="details">
                <div className="details-text">
                    <p className="details-name" onClick={handleClick}>{projectName}</p>
                    <p className="details-summary">{projectData.summary}</p>
                </div>
                <Tag text={projectData.tag} size="tiny" colorScheme="outline" />
                <div className="details-interact-buttons">
                    <i className="fa-brands fa-github" onClick={() => handleInteractButtonClick("githubLink")} />
                    <i className="fa-brands fa-chrome" onClick={() => handleInteractButtonClick("websiteLink")} />
                    <i className="fa-brands fa-figma" onClick={() => handleInteractButtonClick("figmaLink")} />
                </div>
            </div>
        </div>

    );
}

export default DeveloperPreview;