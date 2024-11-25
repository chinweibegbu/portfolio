import React, { useState, useEffect } from "react";

import DeveloperPreview from "./DeveloperPreview.js";
import PreviewPadding from "../common/PreviewPadding.js";
import PageHeader from "../common/PageHeader.js";

import useFetch from "../../hooks/useFetch.js";

function Developer() {
    const [allProjectData] = useFetch("developer-project-data.json");
    const [isLoading, setIsLoading] = useState(true);
    const [previewPadding, setPreviewPadding] = useState([]);

    // Calculate padding once allProjectData is loaded
    useEffect(() => {
        if (allProjectData) {
            let numProjects = Object.keys(allProjectData).length;
            let numPreviewPadding = (numProjects % 4 === 0) ? 0 : 4 - (numProjects % 4);
            let paddings = new Array(numPreviewPadding).fill(0);
            setPreviewPadding(paddings);
            setIsLoading(false);
        }
    }, [allProjectData]);

    return (
        <div className="Developer container Container">

            <PageHeader title="Developer" type="page" />

            <div className="flex-row d-flex flex-wrap justify-content-between">
                {
                    isLoading ?
                        "Loading..." :
                        Object.keys(allProjectData).map((projectName, key) => {
                            return <DeveloperPreview key={key} projectName={projectName} allProjectData={allProjectData} showPreviewImage={true} />
                        })
                }
                
                {
                    previewPadding.map((key) => {
                        return <PreviewPadding key={key} />
                    })
                }
            </div>

        </div>
    );
}

export default Developer;