import React, { useState, useEffect } from "react";
import '../../styles/Designer.css';
// import { projectData } from "../../utils/project-data.js";
// import { getProjectData } from "../../utils/get-project-data.js";

// import DesignPreview from "./DesignPreview.js";
import PageHeader from "../common/PageHeader.js";

function Designer() {
    // const [allProjectData, setAllProjectData] = useState(null);
    // const [isLoading, setIsLoading] = useState(true);

    // // Load project data once page is loaded
    // useEffect(() => {
    //     setAllProjectData(projectData);
    //     setIsLoading(false);
    // });

    return (
        <div className="Designer container Container">
            {/* <div className="row">
                <h2 className="my-2">Design Projects</h2>
            </div>
            <div className="row d-flex flex-wrap">
                {
                    isLoading ?
                        "Loading..." :
                        Object.keys(allProjectData).map((projectName, key) => {
                            return <DesignPreview key={key} projectName={projectName} projectData={getProjectData(projectName)} />
                        })
                }
            </div> */}
            
             <PageHeader title="Designer" />

        </div>
    );
}

export default Designer;