import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

const ContactMe = () => {
	return (
		<div className='flex flex-col justify-center mb-36 mt-10 bg-sky-800 p-6 rounded-md'>
			<h1 className='text-6xl text-white mb-10'>Contact Me</h1>
			<div className='flex justify-between'>
				<a
					className='text-white text-5xl rounded-md hover:text-sky-800 hover:bg-white duration-200'
					target='_blank'
					href='https://github.com/CamTom47'>
					<FontAwesomeIcon icon={faGithub} />
				</a>

				<a
					className='text-white text-5xl rounded-md hover:text-sky-800 hover:bg-white duration-200'
					target='_blank'
					href='https://www.linkedin.com/in/cameron-mi-thomas'>
					<FontAwesomeIcon icon={faLinkedin} />
				</a>

				<a
					className='text-white text-5xl rounded-md hover:text-sky-800 hover:bg-white duration-200'
					href='mailto:CamThomas47@gmail.com'>
					<FontAwesomeIcon icon={faEnvelope} />
				</a>
			</div>
			<div className='flex justify-center'>
				<a
					className='text-2xl bg-sky-800 text-white rounded-xl m-5 border border-white hover:bg-white hover:text-sky-800 duration-200'
					href={require("../../content/Resume.pdf")}>
					Resume
				</a>
			</div>
		</div>
	);
};

export default ContactMe;
