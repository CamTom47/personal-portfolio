import { useState } from "react";
import "../../styles/components/Timeline.scss";

const Timeline = () => {
	const [activeIdx, setActiveIdx] = useState(0);
	const nodeDescriptions = [
		{
			year: "May 2018",
			description:
				"Graduated from Purdue Univesity with a degree in Construction Management and moved to Seattle Washington to work for DPR Construction, as a Project Engineer",
		},
		{
			year: "August 2022",
			description: "Moved to Indiana and joined an SDG as Draftsperson/Designer",
		},
		{
			year: "October 2023",
			description: "Enrolled in Springboard's Software Engineering Bootcamp",
		},
		{
			year: "October 2024",
			description:
				"Graduated from Springboard's bootcamp with a Software Engineering Cerfication, completing +700 hours of course work, developing two major end-to-end applications, and learning fundamentals of web development",
		},
		{
			year: "October 2024",
			description: "Continued refining skillset to include TypeScript and Redux in coding toolset.",
		},
		{
			year: "November 2024",
			description:
				"Joined Mosaiq as a Freelance Full Stack Engineer, gaining experience working on projects in a collaborative environment with other engineers",
		},
		{
			year: "December 2025",
			description:
				"Earned a AWS Cloud Practitioner's Certification, establishing a foundation for cloud compute/engineering.",
		},
		{
			year: "February 2025",
			description:
				"Landed first role as a software engineer implementing Netsuite ERP and Vue Applications for Brinkley RV.",
		},
		{
			year: "Currently",
			description:
				"My current focus is to gain experience through real world situations. Outside of my current job, I'm continuing to grow through personal projects and freelance development.",
		},
	];

	const incrementActiveTimeline = (value) => {
		console.log(value);
		if (value === -1 && activeIdx === 0) return;
		else if (value === 1 && activeIdx === nodeDescriptions.length - 1) return;
		else {
			setActiveIdx(activeIdx + value);
		}
	};

	const timelineComponents = nodeDescriptions.map((node, idx) => {
		return (
			<div className={`timeline ${activeIdx !== idx ? "hidden" : ""}`} key={idx}>
				<div className='timeline-header-background'>
					<p className='timeline-year'>{node.year}</p>
				</div>
				<p className='timeline-description'>{node.description}</p>
				<div className='timeline-navigator'>
					<div className='arrow-background left' onClick={() => incrementActiveTimeline(-1)}>
						<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'>
							<path fill='currentColor' d='m14 18l-6-6l6-6l1.4 1.4l-4.6 4.6l4.6 4.6z' />
						</svg>
					</div>
					<div className='arrow-background right' onClick={() => incrementActiveTimeline(1)}>
						<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'>
							<path fill='currentColor' d='M12.6 12L8 7.4L9.4 6l6 6l-6 6L8 16.6z' />
						</svg>
					</div>
				</div>
			</div>
		);
	});

	return (
		<div className='timelines-container'>
			{timelineComponents}
			{/* <CarouselHorizontal children={timelineComponents}></CarouselHorizontal> */}
		</div>
	);
};

export default Timeline;
