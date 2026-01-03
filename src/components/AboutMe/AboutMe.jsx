import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

import ButtonPrimary from "../ButtonPrimary/ButtonPrimary";
import resumeURL from "../../assets/pdfs/Resume.pdf";

import "../../styles/components/AboutMe.scss";

const AboutMe = () => {
	return (
		<div className='AboutMe-container'>
			<div className="left">
				<div className='header-div'>
					<h1 className='header-content'> Cameron Thomas</h1>
					<p className='subheader-content'>Full Stack Engineer</p>
				</div>
				<p className='section-content'>I build intuitive, user-focused applications.</p>
				<div className='button-container'>
					<ButtonPrimary content={"Download Resume"} url={resumeURL}></ButtonPrimary>
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

			<div className='descriptions'>
				<div>
					<h3 className='subheader-content'>About</h3>
					<div className='underline'></div>
				</div>
				<p className='section-content'>
					I'm a developer, passionate about solving the next problem. I thrive in <span>collaborative</span>{" "}
					environments that foster <span>innovative</span>, outside of the box thinking.
				</p>

				<p className='section-content'>
					I'm currently working as a <span>Software Developer</span> at Brinkley RV, specializing in{" "}
					<span>ERP Development</span>. My contributions include custom scripting for additional NetSuite functionality
					and building/integrating Vue.js applications into Netsuite.
				</p>

				<p className='section-content'>
					My experience prior to Software Engineering was in Construction Management, where I was able to foster the
					skills that are hard to teach, such as <span>Time Managment</span>, <span>Communication</span>, and{" "}
					<span>Task Prioritization</span>.
				</p>

				<p className='section-content'>
					As as avid learner and having transitioned into tech two years ago, my main focus, currently is to soak up as
					much as possible.
				</p>
				<p className='section-content'>
					When I'm not coding, I can usually be found relaxing with family, climbing, playing video games, or doing
					something outdoors.
				</p>
			</div>
		</div>
	);
};

export default AboutMe;
