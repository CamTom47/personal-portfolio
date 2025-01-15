import React from "react";
import ContactMe from "../ContactMe/ContactMe";
import "./Navbar.css";

const Navbar = () => {
	return (
		<div className='bg-sky-800 text-white flex justify-between items-center h-20 sticky top-0 border-b w-full'>
			<div className="flex w-2/12 items-end justify-between">
				<img id='headshot' src={require("../../images/headshot.jpg")} alt='' />
			</div>

			<div className='flex mx-4 gap-x-4 '>
				<a className="hover:text-sky-300 duration-200" href='#AboutMeSection'>AboutMe</a>
				<a className="hover:text-sky-300 duration-200" href='#ProjectsSection'>Projects</a>
				<a className="hover:text-sky-300 duration-200" href='#ExperienceSection'>Experience</a>
				<a className="hover:text-sky-300 duration-200" href='#ContactMeSection'>Contact Me</a>
			</div>
		</div>
	);
};

export default Navbar;
