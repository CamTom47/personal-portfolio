import "../../styles/components/Experience.scss";
import ExperienceCard from "../ExperienceCard/ExperienceCard";
import ButtonPrimary from "../ButtonPrimary/ButtonPrimary";
import Timeline from "../Timeline/Timeline";
import seCertificate from "../../assets/pdfs/SpringboardCertificate.pdf";
import awsCertificate from "../../assets/pdfs/AWSCertification.pdf";

import { useState, useEffect } from "react";

import { useInView } from "react-intersection-observer";
import JobCard from "../JobCard/JobCard";

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
		contents: ["CSS", "Tailwind", "Bootstrap", "Sass", "Penpot"],
		images: ["CSS", "Tailwind", "Bootstrap", "Sass", "Penpot"],
	},
	{
		title: "Data Storage",
		contents: ["PostgreSQL", "FlaskSQLAlchemy", "SuiteQL"],
		images: ["PostgreSQL", "FlaskSQLAlchemy", "Oracle"],
	},
	{
		title: "Dev Ops",
		contents: ["Git", "Github", "Bit Bucket"],
		images: ["Git", "Github", "BitBucket"],
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
			<div id='Title' className='section'>
				<div className='subsection'>
					<h1 className='container-header'> Experience</h1>
					<JobCard dateRange={'2025 - Current'} title={'Project Engineer - Brinkley RV'} description={`A curious Software Engineer with a passion for continuous improvement and a firm believer that there is no
				problem that cannot be solved given enough time, effort, and attention.`} skills={['Javascript', 'Vue.js', 'Netsuite', 'SuiteQL', ]}/>
					<p className='experience-content'></p>
					<div className='button-container'>
						<h2>Certifications</h2>
						<ButtonPrimary content={"Software Engineering Certification"} url={seCertificate}></ButtonPrimary>
						<ButtonPrimary content={"AWS Cloud Practitioner Certification"} url={awsCertificate}></ButtonPrimary>
					</div>
				</div>
				<div className='subsection center'>
					<Timeline></Timeline>
					<div ref={ref} className='experience-stats-container'>
						<div className='stat'>
							<p className='content'>+{softwareEngineeringExpCurrent}</p>
							<p className='description'>Years of SE Experience</p>
						</div>
						<div className='stat'>
							<p className='content'>+{professionalExpCurrent}</p>
							<p className='description'>Years of Professional Experience</p>
						</div>
					</div>
				</div>
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
