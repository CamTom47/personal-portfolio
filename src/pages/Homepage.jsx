import Experience from "../components/Experience/Experience";
import AboutMe from "../components/AboutMe/AboutMe";
import Timeline from "../components/Timeline/Timeline";
import Education from "../components/Education/Education";
import ContactMe from '../components/ContactMe/ContactMe'

const Homepage = () => {
	return (
		<div>
            <AboutMe></AboutMe>
			<Experience />
				<Timeline />
				{/* <Education/> */}
				{/* <ContactMe/> */}

		</div>
	);
};

export default Homepage;
