import React from "react";
import ProjectCard from "../ProjectCard/ProjectCard";

import "../../styles/components/Project.scss";

const Project = ({ project }) => {
	return (
		<div className='project-container'>
			<div className='row'>
				<div className='content-column'>
					<div className='row start'>
						<h1>{project.name}</h1>
					</div>
					<p className='project-description'>{project.desciption}</p>

					<a className='project-link' href='' target='_blank'>
						Web Application
					</a>
					<a className='project-link' href='' target='_blank'>
						Mobile
					</a>
					<img src={project.image} alt={`Snapshot of ${project.name} Application`} />
				</div>
				<div className='content-column'>
					<div>
						<h2>Tech Stack</h2>
						<div className='row'>
							<div className='stack-column'>
								<h3>Front End</h3>
								<ul>
									{project.stack.frontend.map((item, idx) => (
										<p key={idx}>{item}</p>
									))}
								</ul>
							</div>
							<div className='stack-column'>
								<h3>Back End</h3>
								<ul>
									{project.stack.backend.map((item, idx) => (
										<p key={idx}>{item}</p>
									))}
								</ul>
							</div>
							<div className='stack-column'>
								<h3>DBMS</h3>
								<ul>
									{project.stack.dbms.map((item, idx) => (
										<p key={idx}>{item}</p>
									))}
								</ul>
							</div>
						</div>
					</div>
					<div className='highlights'>
						<h2>Highlights</h2>
						<ul>
							{project.features.map((feature, idx) => (
								<p key={idx}>{feature}</p>
							))}
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Project;
