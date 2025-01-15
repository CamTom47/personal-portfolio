import React from "react";
import "./Bio.css";

const Bio = () => {

	return (
		<div className='text-white flex p-10 rounded-xl m-10'>
			<div className="text-7xl text-sky-800 w-1/2">
				<h1> Cameron Thomas</h1>
				<p className=''>Full Stack Engineer</p>
			</div>
			<div>
			<p className='text-5xl text-end'>I build intuitive end-to-end applications with a customer centric focus.</p>
			</div>
		</div>
	);
};

export default Bio;
