import "../../styles/components/ExperienceCard.scss";
import StackBubble from "../StackBubble/StackBubble";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const ExperienceCard = ({ title, contents, images }) => {
	const contentComponents = contents.map((content, idx) => {
		const image = images[idx].split(" ").join("");
		return <StackBubble key={idx} image={image} content={content} />;
	});

	const control = useAnimation();
	const [ref, inView] = useInView();
	useEffect(() => {
		if (inView) {
			control.start("visible");
		} else {
			control.start("hidden");
		}
	}, [control, inView]);

	const opacityVariants = {
		hidden: { opacity: 0, scale: 0 },
		visible: { opacity: 1, scale: 1, transition: {duration: .5} },
	};

	return (
		<motion.div
			className='ExperienceCard-container'
			ref={ref}
			variants={opacityVariants}
			initial='hidden'
			animate={control}>
			<p className='title'>{title}</p>
			{contents.length > 2 ? (
				<div className='content'>{contentComponents}</div>
			) : (
				<div className='content'>{contentComponents}</div>
			)}
		</motion.div>
	);
};

export default ExperienceCard;
