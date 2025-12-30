import React from "react";

import "../../styles/components/JobCard.scss";
import Pill from "../Pill/Pill";

const JobCard = ({ dateRange, title, description, skills = [] }) => {
	return (
		<div className='job-card'>
			<div className='row'>
				<p className='date'>2025 - Current</p>
				<p className='job-title'>Project Engineer - Brinkley RV</p>
			</div>
			<p className='summary'>
				A curious Software Engineer with a passion for continuous improvement and a firm believer that there is no
				problem that cannot be solved given enough time, effort, and attention.
			</p>
			<div className="skills">
				{skills.map((skill) => (
					<Pill content={skill} />
				))}
			</div>
		</div>
	);
};

export default JobCard;
