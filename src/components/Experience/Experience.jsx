import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

import JobCard from "../JobCard/JobCard";
import ExperienceCard from "../ExperienceCard/ExperienceCard";
import ButtonPrimary from "../ButtonPrimary/ButtonPrimary";
import Timeline from "../Timeline/Timeline";
import ProjectCard from "../ProjectCard/ProjectCard";

import seCertificate from "../../assets/pdfs/SpringboardCertificate.pdf";
import awsCertificate from "../../assets/pdfs/AWSCertification.pdf";

import "../../styles/components/Experience.scss";
const experiences = [
	{
		title: "Languages/Frameworks",
		contents: ["JavaScript", "TypeScript", "Node.js", "Flask", "Python", "Express"],
		images: ["JavaScript", "TypeScript", "Node.js", "Flask", "Python", "Express"],
	},
	{
		title: "Client Side",
		contents: ["React", "Redux", "Vue"],
		images: ["React", "Redux", "vue"],
	},
	{
		title: "Design",
		contents: ["CSS", "Tailwind", "Bootstrap", "Sass", "Penpot", "Figma"],
		images: ["CSS", "Tailwind", "Bootstrap", "Sass", "Penpot", "Figma"],
	},
	{
		title: "Data Storage",
		contents: ["PostgreSQL", "FlaskSQLAlchemy", "SuiteQL"],
		images: ["PostgreSQL", "FlaskSQLAlchemy", "Oracle"],
	},
	{
		title: "Dev Ops",
		contents: ["Git", "Github", "Bit Bucket", "Docker"],
		images: ["Git", "Github", "BitBucket", "Docker"],
	},

	{
		title: "ERP",
		contents: ["NetSuite"],
		images: ["Oracle"],
	},
];

const Experience = () => {
	const [softwareEngineeringExpCurrent, setSoftwareEngineeringExpCurrent] = useState(0);
	const [professionalExpCurrent, setProfessionalExpCurrent] = useState(0);
	const [ref, inView] = useInView();
	const professionalExpEnd = 8;
	const softwareEngineeringExpEnd = 2;

	useEffect(() => {
		let intervalIdSE;
		let intervalIdPE;
		const incrementExperienceAmounts = () => {
			intervalIdSE = setInterval(() => {
				setSoftwareEngineeringExpCurrent((softwareEngineeringExpCurrent) =>
					softwareEngineeringExpCurrent < softwareEngineeringExpEnd
						? (+softwareEngineeringExpCurrent + 0.1).toFixed(1)
						: +softwareEngineeringExpEnd.toFixed(1)
				);
			}, 50);
			intervalIdPE = setInterval(() => {
				setProfessionalExpCurrent((professionalExpCurrent) =>
					professionalExpCurrent < professionalExpEnd
						? (+professionalExpCurrent + 0.1).toFixed(1)
						: +professionalExpEnd.toFixed(1)
				);
			}, 25);
		};
		if (inView) incrementExperienceAmounts();
		return () => {
			clearInterval(intervalIdSE);
			clearInterval(intervalIdPE);
		};
	}, [inView]);

	const experienceCardComponents = experiences.map((experience, idx) => (
		<ExperienceCard key={idx} title={experience.title} contents={experience.contents} images={experience.images} />
	));

	return (
		<div className='experience-container'>
			<div className='container'>
				<div>
					<h1 className='subheader-content'> Experience</h1>
					<div className='underline'></div>
				</div>

				<JobCard
					dateRange={"Feb 2025 - Current"}
					title={"Software Developer - Brinkley RV"}
					description={`Build and maintain new/existing NetSuite Scripts to assist 1000+ employees. Utilize VueJS to build custom applications that replace outdated industry standards as NetSuite integrations. Collaborate with a team of 75+ admin to field tickets and resolve unique issues. Analyze and leverage NetSuite records to created streamlined, data-rich SQL queries.`}
					skills={["Javascript", "Vue.js", "Netsuite", "SuiteQL"]}
				/>
				<JobCard
					dateRange={"Oct 2023 - Oct 2024"}
					title={"Software Developer - Springboard"}
					description={`Completed 700+ hours of hands-on course material, while receiving 1:1 industry expert mentor oversight, and completing 2-in-depth portfolio projects from end-to-end, developing fundamentals skills in front-end/back-end web development.`}
					skills={["Javascript", "Vue.js", "Netsuite", "SuiteQL"]}
				/>
			</div>

			{/* Projects */}
			<div className='container'>
				<div>
					<h1 className='subheader-content'>Portfolio</h1>
					<div className='underline'></div>
				</div>
				<div className='projects'>
					<ProjectCard
						link={"https://www.sesamebooking.com"}
						name={"Sesame Booking"}
						type={"Web App"}
						imageSrc={"/Portfolio/ProjectImages/sesame-web-app.png"}
						description={
							"Sesame Booking is booking platform geared towards hourly rentals. It offers a hands off host experience with automation from client booking through checkout."
						}
						status={"In Progress"}
						skills={["Javascript", " React", "NextJS", "Express", "NodeJS", "TypeScript", "MongoDB", "Redux", "Figma"]}
						github={""}></ProjectCard>
					<ProjectCard
						link={"https://www.sesamebooking.com"}
						name={"Sesame Booking"}
						type={"Website"}
						imageSrc={"/Portfolio/ProjectImages/sesame-website.png"}
						description={"Website for Sesame Booking. This website was built using Word Press."}
						status={"Complete"}
						skills={["Word Press", "Penpot"]}
						github={""}></ProjectCard>
					<ProjectCard
						link={"https://www.frameworksdev.com"}
						name={"Frameworks Development"}
						type={"Website"}
						imageSrc={"/Portfolio/ProjectImages/frameworks-website.png"}
						description={
							"This is the website for Frameworks Development, a Software Development Agency. The website was designed with Penpot, and built using NodeJS/Express and React. It supports a fully responsive design and exernal API integration for contact for processing and email automation."
						}
						status={"Complete"}
						skills={["NodeJS", "Express", "React", "Javascript", "Penpot", "Docker", "Nginx"]}
						github={"frameworks-dev"}></ProjectCard>
					<ProjectCard
						link={"#"}
						name={"Fitly"}
						type={"Web App"}
						imageSrc={"/Portfolio/ProjectImages/fitly.png"}
						description={
							"Filty is a Single Page Application built using a layered architecture with a PERN stack. The web application provides a means for users to create custom worksouts.  "
						}
						status={"Complete"}
						skills={["NodeJS", "Express", "React", "Redux", "TypeScript", "Javascript"]}
						github={"fitly"}></ProjectCard>
					{/* <ProjectCard
					link={"#"}
					name={"Packlist"}
					type={"Web App"}
					imageSrc={""}
					description={"Packlist"}
					status={"Complete"}
					skills={['Python', 'SqlAlchemy', 'PostgreSQL', 'Flask', 'Jinja']}
					github={'packlist'}></ProjectCard> */}
				</div>
			</div>

			{/* Certifications */}
			<div className='button-container'>
				<div>
					<h2 className='subheader-content'>Certifications</h2>
				</div>

				<ButtonPrimary content={"Software Engineering Certification"} url={seCertificate}></ButtonPrimary>
				<ButtonPrimary content={"AWS Cloud Practitioner Certification"} url={awsCertificate}></ButtonPrimary>
			</div>

			<div className='subsection center'>
				{/* <Timeline></Timeline> */}
				{/* <div ref={ref} className='experience-stats-container'>
					<div className='stat'>
						<p className='content'>+{softwareEngineeringExpCurrent}</p>
						<p className='description'>Years of SE Experience</p>
					</div>
					<div className='stat'>
						<p className='content'>+{professionalExpCurrent}</p>
						<p className='description'>Years of Professional Experience</p>
					</div>
				</div> */}
			</div>

			<div className=''>
				<div className=''>
					<div className='experiences'>{experienceCardComponents}</div>
				</div>
			</div>
		</div>
	);
};

export default Experience;
