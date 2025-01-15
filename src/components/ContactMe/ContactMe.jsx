import React from "react";
import "./ContactMe.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

const ContactMe = () => {
	return (
		<div className="flex w-1/12 justify-center gap-x-4">
			<a className='text-black text-5xl hover:text-sky-300 duration-200' target='_blank' href='https://github.com/CamTom47'>
				<FontAwesomeIcon icon={faGithub} />
			</a>

			<a className='text-black text-5xl hover:text-sky-300 duration-200' target='_blank' href='https://www.linkedin.com/in/cameron-mi-thomas'>
				<FontAwesomeIcon icon={faLinkedin} />
			</a>

			<a className='text-black text-5xl hover:text-sky-300 duration-200' href='mailto:CamThomas47@gmail.com'>
				<FontAwesomeIcon icon={faEnvelope} />
			</a>
		</div>
	);
};

export default ContactMe;
