import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import "../../styles/components/ContactMe.scss";

const ContactMe = () => {
	return (
		<div className='ContactMe-container'>
			<h1 className='container-header'>Contact Me</h1>
			<div className='icon-container'>
				<a className='icon fa-3x' target='_self' rel='noopener noreferrer' href='https://github.com/CamTom47'>
					<FontAwesomeIcon icon={faGithub} />
				</a>

				<a className='icon fa-3x' target='_self' rel='noopener noreferrer' href='https://www.linkedin.com/in/cameron-mi-thomas'>
					<FontAwesomeIcon icon={faLinkedin} />
				</a>

				<a className='icon fa-3x' href='mailto:CamThomas47@gmail.com'>
					<FontAwesomeIcon icon={faEnvelope} />
				</a>
			</div>
		</div>
	);
};

export default ContactMe;
