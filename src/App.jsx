import AboutMe from "./components/AboutMe/AboutMe";
import Projects from "./components/Projects/Projects";
import Experience from "./components/Experience/Experience";
import Navbar from "./components/Navbar/Navbar";

import "./App.css";
import Bio from "./components/Bio/Bio";
import ContactMe from "./components/ContactMe/ContactMe";

function App() {
	return (
		<div className='flex flex-col bg-sky-300 font-display h-fit'>
			<Navbar />
			<div className="">
				<div id="AboutMeSection" className=' bg-sky-300 flex justify-center'>
					<Bio />
				</div>
				<div id="ProjectsSection" className='bg-sky-800'>
					<Projects />
				</div>
				<div id="ExperienceSection"  className=' bg-sky-300'>
					<Experience />
				</div>
				<div id="ContactMeSection" className=" bg-sky-300 flex justify-center">
					<ContactMe/>
				</div>
			</div>
		</div>
	);
}

export default App;
