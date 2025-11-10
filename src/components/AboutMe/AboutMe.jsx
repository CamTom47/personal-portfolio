import "../../styles/components/AboutMe.scss";
import ButtonPrimary from "../ButtonPrimary/ButtonPrimary";
import headshot from '../../assets/headshot.jpg'
import resumeURL from '../../assets/pdfs/Resume.pdf';

const AboutMe = () => {
	return (
		<div className='AboutMe-container'>
			<div className='content-container'>
				<div className='header-div'>
					<h1 className='header-content'> Cameron Thomas</h1>
					<p className='subheader-content'>Full Stack Engineer</p>
				</div>
				<div>
					<p className='aboutme-content'>
						A curious Software Engineer with a passion for continuous improvement and a firm believer that there is no
						problem that cannot be solved given enough time, effort, and attention.
					</p>
					<div className='button-container'>
						<ButtonPrimary content={"Download Resume"} url={resumeURL}></ButtonPrimary>
					</div>
				</div>
			</div>
			<img className='headshot' src={headshot} alt='Headshot of Cameron Thomas' />
		</div>
	);
};

export default AboutMe;
