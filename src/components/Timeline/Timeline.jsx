import React from "react";

const Timeline = () => {
	const nodeDescriptions = [
		{
			year: 2018,
			description:
				"Graduated from Purdue Univesity with a degree in Construction Management and moved to Seattle Washington to work for DPR Construction, as Project Engineer",
		},
		{
			year: 2022,
			description: "Moved to Indiana and joined an SDG as draftsperson/designer",
		},
		{
			year: 2023,
			description: "Enrolled in Springboard's Software Engineering Bootcamp",
		},
		{
			year: 2024,
			description:
				"Graduated from Springboard's bootcamp with a Software Engineering Cerfication, completing +700 hours of course work, developing two major end-to-end applications, and learning fundamentals of web development",
		},
		{
			year: 2024,
			description: "Continued refining skillset to include TypeScript and Redux in coding toolset.",
		},
		{
			year: 2024,
			description:
				"Joined Mosaiq as a Freelance Full Stack Engineer, gaining experience working on projects in a collaborative environment with other engineers",
		},
		{
			year: 2025,
			description:
				"Earned a AWS Cloud Practitioner's Certification, establishing a foundation for cloud compute/engineering.",
		},
	];

	const timelineComponents = nodeDescriptions.map((node) => {
		return (
			<div className='bg-sky-400 rounded-md flex mb-10 gap-x-6 p-6 items-center'>
				<p className=''>{node.year}</p>
				{/* <div className='z-10 bg-sky-300 h-10 w-10 rounded-3xl me-8' /> */}
				<p className='text-lg'>{node.description}</p>
			</div>
		);
	});

	return (
		<div className='bg-sky-800 m-10 text-white text-2xl p-6 rounded-md'>
			Timeline
			<div className='my-6'>
				{/* <div id='nodeLine' className='absolute bg-white h-20 w-1'></div> */}
				{timelineComponents}
			</div>
		</div>
	);
};

export default Timeline;
