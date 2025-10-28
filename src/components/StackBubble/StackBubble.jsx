import "../../styles/components/StackBubble.scss";

const StackBubble = ({ image, content }) => {
	return (
		<div className='StackBubble-container'>
			<p className='bubble-content'>{content}</p>
			<img className='image' src={`../../../images/StackLogos/${image}.png`} alt='' />
		</div>
	);
};

export default StackBubble;
