import React from "react";
import './ProjectCard.css'

const ProjectCard =  ({ link, name, imageSrc }) => {

    return (
            <a id="ProjectCard-container" className="ProjectCard-link" href={link}>
                <img class="ProjectCardImage" src={require(`../../images/${imageSrc}`)}></img>
                <p className="ProjectCard-title">{name}</p>
            </a>
    )

}

export default ProjectCard