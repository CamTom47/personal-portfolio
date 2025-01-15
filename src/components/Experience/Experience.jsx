import React from "react";
import "./Experience.css";
import $ from "jquery";
import ExperienceCard from "../ExperienceCard/ExperienceCard";
import Timeline from "../Timeline/Timeline";

const experiences = [
	{
		title: "Programming Languages and Frameworks",
		contents: ["JavaScript", "TypeScript", "Node.js", "Flask", "Python", "Express"],
		images: ["JavaScript", "TypeScript", "Node.js", "Flask", "Python", "Express"],
	},
	{
		title: "Client Side",
		contents: ["React", "Redux"],
		images: ["React", "Redux"],
	},
	{
		title: "Styling",
		contents: ["CSS", "Tailwind", "Bootstrap"],
		images: ["CSS", "Tailwind", "Bootstrap"],
	},
	{
		title: "Devops",
		contents: ["Git", "Github"],
		images: ["Git", "Github"],
	},
	{
		title: "Integrations",
		contents: ["Google Maps"],
		images: ["Google Maps"],
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
				<h1 className='text-sky-800 font-bold text-8xl'> Experience</h1>
			</div>
			<div className='flex'>
				<div className="w-1/2">
				<Timeline/>
				</div>
				<div className="flex flex-col w-1/2 gap-y-6 me-10 m-10">
					<div id='Skills' className='col-start-7 col-span-6 bg-sky-800 p-5 rounded rounded-md'>
						<h1 className='text-2xl text-white'>Skills</h1>
						<div className='flex flex-wrap justify-end items-start'>{experienceCardComponents}</div>
					</div>
					
					<div className="bg-sky-800 rounded-md p-5">
						<h1 className="text-2xl text-white">Certifications</h1>
					</div>
					<div id='Education' className='p-5 bg-sky-800 rounded rounded-md '>
							<h1 className='text-2xl text-white'>Education</h1>
							<ul className='mt-4 text-white'>
								<div className='bg-sky-400 rounded rounded-md mb-5 me-2 p-5'>
									<li>Springboard</li>
									<p>Oct 2023 - Oct 2024</p>
									<p>Sotware Engineering Certificate</p>
								</div>
								<div className='bg-sky-400 rounded rounded-md mb-5 me-2 p-5'>
									<li>Purdue University</li>
									<p>August 2014 - Oct 2018</p>
									<p>Bachelor Of Science</p>
									<p>Construction Managment</p>
								</div>
							</ul>
						</div>
				</div>

				{/* <div className='flex text-white'>
					<a
						className='text-2xl bg-sky-800 text-white rounded-xl m-5 hover:bg-white hover:text-sky-800 duration-200'
						href={require("../../content/Resume.pdf")}
						target='#'>
						Resume
					</a>
					<a
						className='text-2xl bg-sky-800 text-white rounded-xl m-5 hover:bg-white hover:text-sky-800 duration-200'
						href={require("../../content/certificate.pdf")}
						target='#'>
						Certification
					</a>
				</div> */}
			</div>
		</div>
	);
};

export default Experience;
