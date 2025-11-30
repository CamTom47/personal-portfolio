import Project from "../components/Project/Project";
import Navmenu from "../components/Navmenu/Navmenu";

import "../styles/pages/PortfolioPage.scss";

const PortfolioPage = () => {
	const projects = [
		{
			name: "Packlist",
			url: "https://fitly-frontend.onrender.com",
			image: "fitlyHomepage.png",
			desciption:
				"Packlist is a backpacking preparation web application. It utilizes geolocation and real time weather data to tailor a list of recommended items/gear/equipment to a user based on the near future environment of their trip location.",
			features: [
				"Built extensive API of backpacking items to allow integrations of multiple external API.",
				"Integrated data from external APIs to create information driven equipment/gear recommendations for trip planning.",
				"Planned out Entity Relationship Diagram and Project Architecture to inform application design, reduce technical debt, and flush out invalid logic.",
				"Utilized google cloud products (Places API) to collect coordinates and inform related functionalities.",
			],
			stack: {
				frontend: ["JavaScript", "FlaskSQLAlchemy", "Bootstrap"],
				backend: ["Flask", "Python"],
				dbms: ["PostgreSQL"],
			},
			platforms: ["Web Application"],
		},
		{
			name: "Fitly",
			url: "https://fitly-frontend.onrender.com",
			image: "fitlyHomepage.png",
			desciption:
				"Packlist is a backpacking preparation web application. It utilizes geolocation and real time weather data to tailor a list of recommended items/gear/equipment to a user based on the near future environment of their trip location.",
			features: [
				" Built extensive API of backpacking items to allow integrations of multiple external API.",
				"Integrated data from external APIs to create information driven equipment/gear recommendations for trip planning.",
				"Planned out Entity Relationship Diagram and Project Architecture to inform application design, reduce technical debt, and flush out invalid logic.",
				"Utilized google cloud products (Places API) to collect coordinates and inform related functionalities.",
			],
			stack: {
				frontend: ["JavaScript", "React", "Redux", "TypeScript", "Tailwind"],
				backend: ["Node.js", "Express", "JavaScript", "TypeScript"],
				dbms: ["PostgreSQL"],
			},
			platforms: ["Web Application", "Mobile"],
			image: 'src/assets/portfolio/fitly.png'
		},
	];
	const projectComponents = projects.map((project, idx) => <Project key={idx} project={project} />);
	return (
		<div className='portfolio-page-container'>
			<Navmenu></Navmenu>
			<div className='projects-container'>{projectComponents}</div>
		</div>
	);
};

export default PortfolioPage;
