import "../../styles/components/Navbar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

const Navbar = () => {
	return (
		<div className='Navbar-container'>
			<div className='icon-container'>
				<a className='nav-icon fa-3x' target='_blank' href='https://github.com/CamTom47'>
					<FontAwesomeIcon icon={faGithub} />
				</a>

				<a className='nav-icon fa-3x' target='_blank' href='https://www.linkedin.com/in/cameron-mi-thomas'>
					<FontAwesomeIcon icon={faLinkedin} />
				</a>

				<a className='nav-icon fa-3x' href='mailto:CamThomas47@gmail.com'>
					<FontAwesomeIcon icon={faEnvelope} />
				</a>
			</div>
			<div className='links'>
				<a className='Navbar-link' href='#AboutMeSection'>
					About
				</a>
				<a className='Navbar-link' href='#ProjectsSection'>
					Portfolio
				</a>
			</div>
		</div>
	);
};

export default Navbar;
