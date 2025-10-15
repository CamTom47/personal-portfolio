import "../../styles/components/Timeline.scss";
import { motion, useScroll } from "framer-motion";
import { useInView } from "framer-motion";
import { useEffect, useRef } from "react";

const Timeline = () => {
	const nodeDescriptions = [
		{
			year: "May 2018",
			description:
				"Graduated from Purdue Univesity with a degree in Construction Management and moved to Seattle Washington to work for DPR Construction, as Project Engineer",
		},
		{
			year: "August 2022",
			description: "Moved to Indiana and joined an SDG as draftsperson/designer",
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

	const timelineRef = useRef(null);
	const { scrollYProgress } = useScroll({ container: timelineRef });

	const timelineComponents = nodeDescriptions.map((node, idx) => {
		return (
			<div className='timeline' key={idx}>
				<p className='timeline-year'>{node.year}</p>
				<p className='timeline-description'>{node.description}</p>
			</div>
		);
	});

	return (
		<div className='timeline-container'>
			<div className="header-row">
				<p className='timeline-container-header'> Timeline</p>
				<p className="header-description">My professional journey after graduating from Purdue University</p>
			</div>
			<motion.div className='scroll-progress-bar' style={{ scaleX: scrollYProgress }}></motion.div>
			<div ref={timelineRef} className='timelines-container'>
				{timelineComponents}
			</div>
		</div>
	);
};

export default Timeline;
