import React from "react";
import { useNavigate } from "react-router-dom";
import '../../styles/DesignPreview.css';

import './DesignPage.js';
import Tag from "../common/Tag.js";

import useFetchProject from "../../hooks/useFetchProject.js";

function DesignPreview({ projectName, allProjectData }) {
    const state = 0;
    const [projectData] = useFetchProject(allProjectData, projectName);

    const navigate = useNavigate();
    const handleClick = () => {
        const newLocation = "/designer/" + projectName;
        navigate(newLocation, {
            state: {
                projectData: projectData
            }
        });
    }

    const handleInteractButtonClick = (linkType) => {
        window.open(projectData[linkType], "_blank");
    }

    return (
        <div className="DesignPreview col-xl-3 col-lg-4 col-md-6 col-sm-12 mt-3 bordered">
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
                    <i className="fa-brands fa-figma" onClick={() => handleInteractButtonClick("figmaLink")} />
                    {/* <i className="fa-brands fa-chrome" onClick={() => handleInteractButtonClick("websiteLink")} /> */}
                </div>
            </div>
        </div>

    );
}

export default DesignPreview;