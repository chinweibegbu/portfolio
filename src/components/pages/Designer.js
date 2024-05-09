import React, { useState, useEffect } from "react";
import '../../styles/Designer.css';
import { projectData } from "../../utils/project-data.js";

import DesignPreview from "./DesignPreview.js";
import PreviewPadding from "../common/PreviewPadding.js";
import PageHeader from "../common/PageHeader.js";
import PaginatedItems from "../common/PaginatedItems.js";

function Designer() {
    const [allProjectData, setAllProjectData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [previewPadding, setPreviewPadding] = useState([]);

    // Load project data once page is loaded
    useEffect(() => {
        setAllProjectData(projectData);
    }, []);

    // Calculate padding once allProjectData is loaded
    useEffect(() => {
        if (allProjectData) {
            let numPreviewPadding = 4 - (Object.keys(allProjectData).length % 4);
            let paddings = new Array(numPreviewPadding).fill(0);
            setPreviewPadding(paddings);
            setIsLoading(false);
        }
    }, [allProjectData]);

    return (
        <div className="Designer container Container">

            <PageHeader title="Designer" type="page" />

            <div className="flex-row d-flex flex-wrap justify-content-between">
                {
                    isLoading ?
                        "Loading..." :
                        // allProjectData.map((projectName, key) => {
                        //     return <DesignPreview key={key} projectName={projectName} projectData={getProjectData(projectName)} />
                        // })
                        <PaginatedItems Component={DesignPreview} items={allProjectData} itemsPerPage={4} />
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

export default Designer;