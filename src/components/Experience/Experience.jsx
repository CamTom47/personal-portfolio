import React from "react";
import "./Experience.css";
import $ from "jquery";
import ExperienceCard from "../ExperienceCard/ExperienceCard";
import Timeline from "../Timeline/Timeline";

const experiences = [
	{
		title: "Devops",
		contents: ["Git", "Github"],
		images: ["Git", "Github"],
	},

	{
		title: "Client Side",
		contents: ["React", "Redux"],
		images: ["React", "Redux"],
	},
	{
		title: "Programming Languages and Frameworks",
		contents: ["JavaScript", "TypeScript", "Node.js", "Flask", "Python", "Express"],
		images: ["JavaScript", "TypeScript", "Node.js", "Flask", "Python", "Express"],
	},
	{
		title: "Integrations",
		contents: ["Google Maps"],
		images: ["Google Maps"],
	},
	{
		title: "Styling",
		contents: ["CSS", "Tailwind", "Bootstrap"],
		images: ["CSS", "Tailwind", "Bootstrap"],
	},

	{
		title: "Data Storage and Caching",
		contents: ["PostgreSQL", "FlaskSQLAlchemy"],
		images: ["PostgreSQL", "FlaskSQLAlchemy"],
	},
];

const Experience = () => {
	const experienceCardComponents = experiences.map((experience) => (
		<ExperienceCard title={experience.title} contents={experience.contents} images={experience.images} />
	));

	let $currentDiv = $("");

	return (
		<div className='flex flex-col'>
			<div id='Title' className='text-center'>
				<h1 className='text-sky-800 font-bold text-6xl'> Experience</h1>
			</div>
			<div className='flex'>
				<div className='w-1/2'>
					<Timeline />
				</div>
				<div className='flex flex-col justify-between w-1/2 me-10 m-10'>
					<div id='Skills' className='bg-sky-800 p-5 rounded rounded-md'>
						<h1 className='text-2xl text-white text-center'>Skills</h1>
						<div className='flex flex-wrap justify-end'>{experienceCardComponents}</div>
					</div>

					<div className='bg-sky-800 rounded-md p-5 text-center'>
						<h1 className='text-2xl text-white mb-6'>Certifications</h1>
						<a
							className='text-lg text-white bg-sky-400 rounded-md m-6'
							href={require("../../content/SpringboardCertificate.pdf")}
							target='#'>
							Software Engineering Certification
						</a>
						<a
							className='text-lg text-white bg-sky-400 rounded-md m-6'
							href={require("../../content/AWSCertification.pdf")}
							target='#'>
							AWS Cloud Practitioner Certification
						</a>
					</div>
					<div id='Education' className='p-5 bg-sky-800 rounded rounded-md text-center'>
						<h1 className='text-2xl text-white'>Education</h1>
						<ul className='mt-4 text-white'>
							<div className='bg-sky-400 rounded rounded-md mb-5 me-2 p-5 text-lg'>
								<li>Springboard</li>
								<p>Oct 2023 - Oct 2024</p>
								<p>Sotware Engineering Certificate</p>
							</div>
							<div className='bg-sky-400 rounded rounded-md mb-5 me-2 p-5 text-lg'>
								<li>Purdue University</li>
								<p>August 2014 - Oct 2018</p>
								<p>Bachelor Of Science</p>
								<p>Construction Managment</p>
							</div>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Experience;
