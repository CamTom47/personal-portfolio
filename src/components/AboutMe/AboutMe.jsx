import "../../styles/components/AboutMe.scss";
import ButtonPrimary from "../ButtonPrimary/ButtonPrimary";

const AboutMe = () => {
	return (
		<div className='AboutMe-container'>
			<div className='content-container'>
				<div className="header-div">
					<h1 className='header-content'> Cameron Thomas</h1>
					<p className='subheader-content'>Full Stack Engineer</p>
				</div>
				<div>
					<p className='aboutme-content'>A curious Software Engineer with a passion for continuous improvement and a firm believer that there is no problem that cannot be solved given enough time, effort, and attention.</p>
					<div className="button-container">
						<ButtonPrimary content={"Download Resume"} url={"../../../public/content/Resume.pdf"}></ButtonPrimary>
						</div>
				</div>
			</div>
			<img className='headshot' src={require("../../assets/images/headshot.jpg")} alt='Headshot of Cameron Thomas' />
		</div>
	);
};

export default AboutMe;
