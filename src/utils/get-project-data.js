import { projectData } from "./project-data.js";

export const getProjectData = (projectName) => {
    return projectData[projectName];
}