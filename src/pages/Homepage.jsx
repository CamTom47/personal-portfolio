import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { useState, useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";

import ButtonPrimary from "../components/ButtonPrimary/ButtonPrimary";
import JobCard from "../components/JobCard/JobCard";
import ExperienceCard from "../components/ExperienceCard/ExperienceCard";
import ProjectCard from "../components/ProjectCard/ProjectCard";

import resumeURL from "../assets/pdfs/Resume.pdf";
import seCertificate from "../assets/pdfs/SpringboardCertificate.pdf";
import awsCertificate from "../assets/pdfs/AWSCertification.pdf";

import "../styles/components/AboutMe.scss";
import "../styles/components/Experience.scss";
import "../styles/pages/Homepage.scss";

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

const Homepage = () => {
	const [activeNav, setActiveNav] = useState("about");

	const scrollRef = useRef();

	const handleScroll = (e) => {
		const experienceSectionOffset = document.getElementById("experience").offsetTop - 160;
		const portfolioSectionOffset = document.getElementById("portfolio").offsetTop - 160;
		const currentOffsetTop = scrollRef.current.scrollTop;

		if (currentOffsetTop < experienceSectionOffset) setActiveNav("about");
		else if (currentOffsetTop >= experienceSectionOffset && currentOffsetTop < portfolioSectionOffset)
			setActiveNav("experience");
		else setActiveNav("portfolio");
	};

	//#region - REFERENCE : used for experience incrementing animation on scroll..
	// const [softwareEngineeringExpCurrent, setSoftwareEngineeringExpCurrent] = useState(0);
	// const [professionalExpCurrent, setProfessionalExpCurrent] = useState(0);
	// const [ref, inView] = useInView();
	// const professionalExpEnd = 8;
	// const softwareEngineeringExpEnd = 2;

	// useEffect(() => {
	// 	let intervalIdSE;
	// 	let intervalIdPE;
	// 	const incrementExperienceAmounts = () => {
	// 		intervalIdSE = setInterval(() => {
	// 			setSoftwareEngineeringExpCurrent((softwareEngineeringExpCurrent) =>
	// 				softwareEngineeringExpCurrent < softwareEngineeringExpEnd
	// 					? (+softwareEngineeringExpCurrent + 0.1).toFixed(1)
	// 					: +softwareEngineeringExpEnd.toFixed(1)
	// 			);
	// 		}, 50);
	// 		intervalIdPE = setInterval(() => {
	// 			setProfessionalExpCurrent((professionalExpCurrent) =>
	// 				professionalExpCurrent < professionalExpEnd
	// 					? (+professionalExpCurrent + 0.1).toFixed(1)
	// 					: +professionalExpEnd.toFixed(1)
	// 			);
	// 		}, 25);
	// 	};
	// 	if (inView) incrementExperienceAmounts();
	// 	return () => {
	// 		clearInterval(intervalIdSE);
	// 		clearInterval(intervalIdPE);
	// 	};
	// }, [inView]);
	//#endregion

	const experienceCardComponents = experiences.map((experience, idx) => (
		<ExperienceCard key={idx} title={experience.title} contents={experience.contents} images={experience.images} />
	));
	return (
		<div className='homepage-container'>
			{/* About Me Section */}

			<div className=' left'>
				<div className='intro-container'>
					<div className='header-div'>
						<h1 className='header-content'> Cameron Thomas</h1>
						<p className='subheader-content'>Full Stack Engineer</p>
					</div>
					<p className='section-content'>I build intuitive, user-focused applications.</p>
					<div className='button-container'>
						<ButtonPrimary content={"Download Resume"} url={resumeURL}></ButtonPrimary>
					</div>
					<div className='nav'>
						<a href='#about' className={`nav-link ${activeNav === "about" ? "active" : ""}`}>
							<span className='nav-indicator'></span>ABOUT
						</a>
						<a href='#experience' className={`nav-link ${activeNav === "experience" ? "active" : ""}`}>
							<span className='nav-indicator'></span>EXPERIENCE
						</a>
						<a href='#portfolio' className={`nav-link ${activeNav === "portfolio" ? "active" : ""}`}>
							<span className='nav-indicator'></span>PORTFOLIO
						</a>
					</div>
				</div>

				<div className='icons'>
					<a className='nav-icon fa-3x' target='_blank' rel='noopener noreferrer' href='https://github.com/CamTom47'>
						<FontAwesomeIcon icon={faGithub} className='icon' />
					</a>
					<a
						className='nav-icon fa-3x'
						target='_blank'
						rel='noopener noreferrer'
						href='https://www.linkedin.com/in/cameron-mi-thomas'>
						<FontAwesomeIcon icon={faLinkedin} className='icon' />
					</a>

					<a className='nav-icon fa-3x' href='mailto:CamThomas47@gmail.com'>
						<FontAwesomeIcon icon={faEnvelope} className='icon' />
					</a>
				</div>
			</div>
			<div className='right' ref={scrollRef} onScroll={handleScroll}>
				<div id='about' className='AboutMe-container'>
					<div className='descriptions'>
						<div>
							<h3 className='subheader-content'>ABOUT</h3>
							<div className='underline'></div>
						</div>
						<p className='section-content'>
							I'm a developer, passionate about solving the next problem. I thrive in <span>collaborative</span>{" "}
							environments that foster <span>innovative</span>, outside of the box thinking.
						</p>

						<p className='section-content'>
							I'm currently working as a <span>Software Developer</span> at Brinkley RV, specializing in{" "}
							<span>ERP Development</span>. My contributions include custom scripting for additional NetSuite
							functionality and building/integrating Vue.js applications into Netsuite.
						</p>

						<p className='section-content'>
							My experience prior to Software Engineering was in Construction Management, where I was able to foster the
							skills that are hard to teach, such as <span>Time Managment</span>, <span>Communication</span>, and{" "}
							<span>Task Prioritization</span>.
						</p>

						<p className='section-content'>
							As as avid learner and having transitioned into tech two years ago, my main focus, currently is to soak up
							as much as possible.
						</p>
						<p className='section-content'>
							When I'm not coding, I can usually be found relaxing with family, climbing, playing video games, or doing
							something outdoors.
						</p>
					</div>
				</div>

				{/* Experience Section */}

				<div id='experience' className='experience-container'>
					<div className='container'>
						<div>
							<h1 className='subheader-content'> EXPERIENCE</h1>
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
					{/* Certifications */}
					<div className='certifications'>
						<div>
							<h2 className='subheader-content'>Certifications</h2>
						</div>

						<ButtonPrimary content={"Software Engineering Certification"} url={seCertificate}></ButtonPrimary>
						<ButtonPrimary content={"AWS Cloud Practitioner Certification"} url={awsCertificate}></ButtonPrimary>
					</div>

					<div className='subsection center'>
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

					{/* Projects */}
					<div id='portfolio' className='container'>
						<div>
							<h1 className='subheader-content'>PORTFOLIO</h1>
							<div className='underline'></div>
						</div>
						<div className='projects'>
							<ProjectCard
								link={"https://www.sesamebooking.com"}
								name={"Sesame Booking"}
								type={"Web App"}
								imageSrc={"public/Portfolio/ProjectImages/sesame-web-app.png"}
								description={
									"Sesame Booking is booking platform geared towards hourly rentals. It offers a hands off host experience with automation from client booking through checkout."
								}
								status={"In Progress"}
								skills={[
									"Javascript",
									" React",
									"NextJS",
									"Express",
									"NodeJS",
									"TypeScript",
									"MongoDB",
									"Redux",
									"Figma",
								]}
								github={""}></ProjectCard>
							<ProjectCard
								link={"https://www.sesamebooking.com"}
								name={"Sesame Booking"}
								type={"Website"}
								imageSrc={"public/Portfolio/ProjectImages/sesame-website.png"}
								description={"Website for Sesame Booking. This website was built using Word Press."}
								status={"Complete"}
								skills={["Word Press", "Penpot"]}
								github={""}></ProjectCard>
							<ProjectCard
								link={"https://www.frameworksdev.com"}
								name={"Frameworks Development"}
								type={"Website"}
								imageSrc={"public/Portfolio/ProjectImages/frameworks-website.png"}
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
								imageSrc={"public/Portfolio/ProjectImages/fitly.png"}
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
				</div>
			</div>
		</div>
	);
};

export default Homepage;
