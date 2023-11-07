import React from "react";
import { useLocation } from "react-router-dom";
import { getProjectData } from "../../utils/get-project-data.js";
import '../../styles/Designer.css';

function DesignPage() {
    // Get project details
    const { state } = useLocation();
    const { projectName } = state;
    const projectData = getProjectData(projectName);

    return (
        <div className="DesignPage container py-3">
            <div className="row">
                <div className="col-12">
                    <h2>{projectName}</h2>
                </div>
                <div className="col-12 d-flex justify-content-between align-content-end">
                    <p className="m-0">{projectData.summary}</p>
                    <p className="m-0 small"><i>{projectData.date}</i></p>
                </div>
                <div className="col-12 w-100 my-4">
                    {
                        projectData.embed
                    }
                </div>
                <div className="col-12 ">
                    <h4>Problem Statement</h4>
                    <p>{projectData.problemStatement}</p>
                </div>
            </div>
        </div>
    );
}

export default DesignPage;