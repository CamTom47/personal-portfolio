import React from "react";

import "../../styles/components/JobCard.scss";
import Pill from "../Pill/Pill";

const JobCard = ({ dateRange, title, description, skills = [] }) => {
	return (
		<div className='job-card'>
			<div className='header-container'>
				<p className='date'>{dateRange}</p>
				<p className='job-title'>{title}</p>
			</div>
			<p className='summary'>
				{description}
			</p>
			<div className="skills">
				{skills.map((skill, idx) => (
					<Pill key={idx} content={skill} />
				))}
			</div>
		</div>
	);
};

export default JobCard;
