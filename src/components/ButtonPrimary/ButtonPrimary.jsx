import React from "react";
import '../../styles/components/ButtonPrimary.scss'

const ButtonPrimary = ({ content, url }) => {
	const onButtonClick = () => {
		const pdfUrl = url;
		const link = document.createElement("a");
		link.href = pdfUrl;
		link.download = `${content}.pdf`;
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
	};

	return (
		<button className='button-primary' onClick={onButtonClick}>
			{content}
		</button>
	);
};

export default ButtonPrimary;
