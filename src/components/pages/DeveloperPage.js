import React from "react";
import { useLocation } from "react-router-dom";
import '../../styles/DeveloperPage.css';

import PageHeader from "../common/PageHeader.js";
import Tag from "../common/Tag.js";

function DeveloperPage() {
    // Get project details
    const { state } = useLocation();
    const { projectData, showFigmaEmbed } = state;

    const handleLinkClick = (link) => {
        window.open(link, "_blank");
    }

    return (
        <div className="DeveloperPage container Container">
            <PageHeader title={projectData.name} type="project" />

            <div className="flex-row project-overview my-3">
                <div className="project-overview-category d-flex">
                    <p> Area: </p>
                    <p> {projectData.area} </p>
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
                            document.getElementByClass("project-content-visual").innerHTML = JSON.parse(JSON.stringify(projectData.embed))
                    }
                </div>
                <div className="offset-1 col-5 project-content-details flex-row">
                    <div>
                        <p>Tech stack:</p>
                        <div className="d-flex flex-wrap">
                            {
                                projectData.techStack.map((name, key) => {
                                    return <Tag key={key} text={name} size="small" colorScheme="solid" />
                                })
                            }
                        </div>
                    </div>
                    <div>
                        <p>Tools used:</p>
                        <div className="d-flex flex-wrap">
                            {
                                projectData.tools.map((name, key) => {
                                    return <Tag key={key} text={name} size="small" colorScheme="outline" />
                                })
                            }
                        </div>
                    </div>
                    <div className="link-section" onClick={() => handleLinkClick(projectData.githubLink)}>
                        <p>GitHub link:</p>
                        <p>{projectData.githubLink}</p>
                    </div>

                    <div className="link-section" onClick={() => handleLinkClick(projectData.figmaLink)}>
                        <p>Figma link:</p>
                        <p>{projectData.figmaLink}</p>
                    </div>

                    <div className="link-section" onClick={() => handleLinkClick(projectData.websiteLink)}>
                        <p>Deployed application link:</p>
                        <p>{projectData.websiteLink}</p>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default DeveloperPage;