import React from "react";
import { useLocation } from "react-router-dom";
import { getProjectData } from "../../utils/get-project-data.js";
import '../../styles/DesignPage.css';

import PageHeader from "../common/PageHeader.js";
import Tag from "../common/Tag.js";

function DesignPage() {
    // Get project details
    const { state } = useLocation();
    const { projectName } = state;
    const projectData = getProjectData(projectName);

    const placeholderTechStack = ["JavaScript", "HTML", "CSS", "Node.js", "React.js", "SQL", "PostgreSQL"];
    const placeholderTools = ["VS Code", "Figma", "Postman", "Git"];

    const handleLinkClick = (link) => {
        window.open(link, "_blank");
    }

    return (
        <div className="DesignPage container Container">
            <PageHeader title={projectName} type="project" />

            <div className="flex-row project-overview my-3">
                <div className="project-overview-category d-flex">
                    <p> Area: </p>
                    <p> Full-stack web development </p>
                </div>
                <div className="project-overview-category d-flex">
                    <p> Context: </p>
                    <p> Personal Project </p>
                </div>
                <div className="project-overview-category d-flex">
                    <p> Team: </p>
                    <p> Solo </p>
                </div>
            </div>
            <div className="flex-row project-description">
                <p>{projectData.problemStatement}</p>
            </div>
            <div className="flex-row d-flex project-content mt-3">
                <div className="col-6 project-content-visual d-flex justify-content-center align-items-center bordered">
                    {/* {projectData.embed} */}
                    <i className="fa-solid fa-image" />
                </div>
                <div className="offset-1 col-5 project-content-details flex-row">
                    <div>
                        <p>Tech stack:</p>
                        <div className="d-flex flex-wrap">
                            {
                                placeholderTechStack.map((name, key) => {
                                    return <Tag key={key} text={name} size="small" colorScheme="solid" />
                                })
                            }
                        </div>
                    </div>
                    <div>
                        <p>Tools used:</p>
                        <div className="d-flex flex-wrap">
                            {
                                placeholderTools.map((name, key) => {
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

export default DesignPage;