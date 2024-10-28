import React from "react";
import ProjectCard from "../ProjectCard/ProjectCard";
import "./Projects.css"

const Projects = () => {
    return (
        <div id="Projects-container">
            <h1 className="Projects-text">Projects</h1>
            <div id="Projects-project-div">
                <ProjectCard name="fitly" link={"https://fitly-frontend.onrender.com"} imageSrc={'fitlyHomepage.png'}/>
                <ProjectCard name="packlist" link={"https://packlist-w8xx.onrender.com"} imageSrc={`packlistHomepage.png`}/>
            </div>
        </div>
    )
}

export default Projects;