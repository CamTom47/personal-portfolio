import React from "react";
import "./ExperienceCard.css";
import StackBubble from "../StackBubble/StackBubble";

const ExperienceCard = ({ title, contents, images }) => {
	const contentComponents = contents.map((content, idx) => {
		const image = images[idx].split(" ").join("");
		return (
			<StackBubble image={image} content={content}/>
		);
	});

	return (
		<div className='flex flex-col text-center h-fit bg-sky-400 rounded-xl m-2 p-3'>
			<p className='text-white text-xl'>{title}</p>
			{(contents.length > 2 )
			? <div className='grid grid-cols-2'>{contentComponents}</div>
			: <div className='grid grid-cols-1'>{contentComponents}</div>}
		</div>
	);
};

export default ExperienceCard;
