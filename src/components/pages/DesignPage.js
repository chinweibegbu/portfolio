import React from "react";
import { useLocation } from "react-router-dom";
import '../../styles/DesignPage.css';

import PageHeader from "../common/PageHeader.js";
import Tag from "../common/Tag.js";

function DesignPage() {
    // Get project details
    const { state } = useLocation();
    const { projectData, showFigmaEmbed } = state;

    const handleLinkClick = (link) => {
        window.open(link, "_blank");
    }

    return (
        <div className="DesignPage container Container">
            <PageHeader title={projectData.name} type="project" />

            <div className="flex-row project-overview my-3">
                <div className="project-overview-category d-flex">
                    <p> Type: </p>
                    <p> {projectData.tag} </p>
                </div>
                <div className="project-overview-category d-flex">
                    <p> Context: </p>
                    <p> {projectData.context} </p>
                </div>
                <div className="project-overview-category d-flex">
                    <p> Team: </p>
                    <p> {projectData.team} </p>
                </div>
            </div>
            <div className="flex-row project-description">
                <p>{projectData.problemStatement}</p>
            </div>
            <div className="flex-row d-flex project-content mt-3">
                <div className="col-6 project-content-visual d-flex justify-content-center align-items-center bordered">
                    {
                        !showFigmaEmbed ?
                            <i className="fa-solid fa-image" /> :
                            <iframe width="100%" height="100%" src={projectData.embedLink} title={projectData.name} allowFullScreen></iframe>
                    }
                </div>
                <div className="offset-1 col-5 project-content-details flex-row">
                    <div>
                        <p>Tools used:</p>
                        <div className="d-flex flex-wrap">
                            {
                                projectData.toolsUsed.map((name, key) => {
                                    return <Tag key={key} text={name} size="small" colorScheme="outline" />
                                })
                            }
                        </div>
                    </div>

                    <div className="link-section" onClick={() => handleLinkClick(projectData.figmaLink)}>
                        <p>Figma link:</p>
                        <p>{projectData.figmaLink}</p>
                    </div>

                    <div className="link-section" onClick={() => handleLinkClick(projectData.applicationLink)}>
                        <p>Application link ({projectData.applicationType}):</p>
                        <p>{projectData.applicationLink}</p>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default DesignPage;