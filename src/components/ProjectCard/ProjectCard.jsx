import React from "react";
import StackBubble from "../StackBubble/StackBubble";

const ProjectCard = ({ link, name, imageSrc, description, stack }) => {
	const stackImages = stack.map((s) => {
		return <StackBubble content={s} image={s.split(" ").join("")} />;
	});
	return (
		<div className='flex flex-col items-center m-10 border border-white rounded-xl p-10 bg-sky-400 gap-y-10'>
			<p className='z-10 text-white text-5xl'>{name}</p>
			<div>
					<img className='bg-clip-border max-h-80' src={require(`../../assets/images/${imageSrc}`)}></img>
			</div>
			<div>
				<p className='text-white text-xl'>{description}</p>
			</div>
			<div className='grid grid-cols-3'>{stackImages}</div>
			<div className='flex'>
				<a className='bg-sky-800 mx-10 p-2 rounded rounded-xl border border-white text-white hover:bg-sky-400 hover:text-sky-800 hover:border-sky-800 duration-200'
				href={link}>
					<button>Live Link</button>
				</a>
				<a className='bg-sky-800 mx-10 p-2 rounded rounded-xl border border-white text-white hover:bg-sky-400 hover:text-sky-800 hover:border-sky-800 duration-200'
				href={`https://github.com/CamTom47/${name}`}>
					<button>Github</button>
				</a>
			</div>
		</div>
	);
};

export default ProjectCard;
