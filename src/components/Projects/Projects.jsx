import React from "react";
import ProjectCard from "../ProjectCard/ProjectCard";

const packlist = {
	desciption:
		"Packlist is a backpacking preparation web application. It utilizes geolocation and real time weather data to tailor a list of recommended items/gear/equipment to a user based on the near future environment of their trip location.",
	features: [
		" Built extensive API of backpacking items to allow integrations of multiple external API.",
		"Integrated data from external APIs to create information driven equipment/gear recommendations for trip planning.",
		"Planned out Entity Relationship Diagram and Project Architecture to inform application design, reduce technical debt, and flush out invalid logic.",
		"Utilized google cloud products (Places API) to collect coordinates and inform related functionalities.",
	],
	stack: ["Flask", "Python", "JavaScript", "PostgreSQL", "FlaskSQLAlchemy", "Bootstrap"],
};

const fitly = {
	desciption:
		"Packlist is a backpacking preparation web application. It utilizes geolocation and real time weather data to tailor a list of recommended items/gear/equipment to a user based on the near future environment of their trip location.",
	features: [
		" Built extensive API of backpacking items to allow integrations of multiple external API.",
		"Integrated data from external APIs to create information driven equipment/gear recommendations for trip planning.",
		"Planned out Entity Relationship Diagram and Project Architecture to inform application design, reduce technical debt, and flush out invalid logic.",
		"Utilized google cloud products (Places API) to collect coordinates and inform related functionalities.",
	],
	stack: ["Node.js", "Express", "JavaScript", "React", "Redux", "TypeScript", "Tailwind", "PostgreSQL"],
};

const Projects = () => {
	return (
		<div className='bg-sky-800 m-10 flex flex-col items-center'>
			<h1 className='text-white font-bold text-6xl mb-10'>Projects</h1>
			<div className='flex justify-center'>
				<ProjectCard
					name='fitly'
					link={"https://fitly-frontend.onrender.com"}
					imageSrc={"fitlyHomepage.png"}
					description={fitly.desciption}
					stack={fitly.stack}
				/>
				<ProjectCard
					name='packlist'
					link={"https://packlist-w8xx.onrender.com"}
					imageSrc={`packlistHomepage.png`}
					description={packlist.desciption}
					stack={packlist.stack}
				/>
			</div>
		</div>
	);
};

export default Projects;
