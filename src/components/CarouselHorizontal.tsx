import React, { ReactElement, useRef } from "react";
import "../styles/components/carouselHorizontal.scss";
import { motion, useScroll } from "framer-motion";
import { useInView } from "framer-motion";

interface CarouselHorizontalProps {
	children: ReactElement;
}
const CarouselHorizontal = ({ children }: CarouselHorizontalProps): React.JSX.Element => {
	const scrollRef = useRef(null);
	const { scrollXProgress } = useScroll({ container: scrollRef });

	return (
		<div  className='carousel-container'>
			<div className='edge-blur left'></div>
			<div ref={scrollRef} className='horizontal-scroll'>{children}</div>
			<div className='edge-blur right'></div>
			<motion.div className='scroll-progress-bar' style={{ scaleX: scrollXProgress }}></motion.div>
		</div>
	);
};

export default CarouselHorizontal;
