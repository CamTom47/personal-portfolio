import "../../styles/components/Experience.scss";
import ExperienceCard from "../ExperienceCard/ExperienceCard";
import ButtonPrimary from "../ButtonPrimary/ButtonPrimary";
import Timeline from "../Timeline/Timeline";
import seCertificate from '../../assets/pdfs/SpringboardCertificate.pdf';
import awsCertificate from '../../assets/pdfs/AWSCertification.pdf';

import { useState, useEffect } from "react";

import { useInView } from "react-intersection-observer";

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
					<p className='experience-content'>
						My experience prior to transitioning into the world of software engineering consists of six years in the
						construction industry. A majority of it was spent as Senior Project Engineer for a General Contractor and
						partly as a Draftsperson at an Architectural Firm. While my technical skills continue to grow daily. These
						previous roles taught me crucial soft skills that when combined with my newfound technical skillset, allow
						me to create value for others through effective communication, collaboration, and engineering.
					</p>
					<p className='experience-content'>
						My current goal includes learning as much as I can as quick as I can. Sounds lofty? I know, it's great!
						Since landing my first role as an SE I've been working on multiple personal projects as well. I find that
						I'm continuously looking to improve my skills in my free time, but my constraint is finding the problems to
						solve for. That being said, my next big goal to level up is getting into freelancing projects. I look
						forward to the challenge nad opportunity that awaits.
					</p>
					<h2>Certifications</h2>
					<div className='button-container'>
						<ButtonPrimary
							content={"Software Engineering Certification"}
							url={seCertificate}></ButtonPrimary>
						<ButtonPrimary
							content={"AWS Cloud Practitioner Certification"}
							url={awsCertificate}></ButtonPrimary>
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
