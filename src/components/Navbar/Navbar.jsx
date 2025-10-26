import "../../styles/components/Navbar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { useState, useEffect } from "react";

const Navbar = () => {
	const [showHamburgerMenu, setShowHamburgerMenu] = useState(false); //Boolean that switches from links to a hamburger menu in mobile mode
	const [screenWidth, setScreenWidth] = useState(window.screen.width); //Number that is used to track when to switch to hamburger menu
	const [menuOpen, toggleMenuOpen] = useState(false); //Boolean that keeps track of the modal toggle

	// Toggles the hamburger menu open/closed
	const handleMenuToggle = () => {
		toggleMenuOpen((menuOpen) => !menuOpen);
	};

	//if the user adjusts their screen width, fire adjustScreenWidth to update state accordingly.
	useEffect(() => {
		// Sets the screen width state
		const adjustScreenWidth = () => {
			setScreenWidth(window.outerWidth);
		};
		window.addEventListener("resize", adjustScreenWidth);
		return () => window.removeEventListener("resize", adjustScreenWidth);
	}, [adjustScreenWidth]);

	//
	useEffect(() => {
		if (screenWidth <= 992) {
			setShowHamburgerMenu(true);
		} else setShowHamburgerMenu(false);
	}, [screenWidth]);

	return (
		<div className='Navbar-container'>
			<div className='icon-container'>
				<a className='nav-icon fa-3x' target='_blank' rel='noopener noreferrer' href='https://github.com/CamTom47'>
					<FontAwesomeIcon icon={faGithub} />
				</a>

				<a
					className='nav-icon fa-3x'
					target='_blank'
					rel='noopener noreferrer'
					href='https://www.linkedin.com/in/cameron-mi-thomas'>
					<FontAwesomeIcon icon={faLinkedin} />
				</a>

				<a className='nav-icon fa-3x' href='mailto:CamThomas47@gmail.com'>
					<FontAwesomeIcon icon={faEnvelope} />
				</a>
			</div>
			{!showHamburgerMenu ? (
				<div className='links'>
					{/* <a className='Navbar-link' href='/'>
						About
					</a>
					<a className='Navbar-link' href='/projects'>
						Portfolio
					</a> */}
				</div>
			) : (
				<div className={showHamburgerMenu ? "hamburger" : "hidden"} onClick={handleMenuToggle}>
					<div id='bar1' className='bar'></div>
					<div id='bar2' className='bar'></div>
					<div id='bar3' className='bar'></div>
				</div>
			)}
			<div className={menuOpen ? "dropdown-menu active" : "dropdown-menu hidden"}>
				{/* <a className='Navbar-link' href=''>
						About
					</a>
					<a className='Navbar-link' href=''>
						Portfolio
					</a> */}
			</div>
		</div>
	);
};

export default Navbar;
