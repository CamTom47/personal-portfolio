import React, { useState } from "react";
import "../../styles/components/NavMenu.scss";

import { Link } from "react-router-dom";

const Navmenu = () => {
	const [showFilters, setShowFilters] = useState(false);

	const toggleShowFilters = (section) => {
		setShowFilters((showFilters) => !showFilters);
	};

	return (
		<div className='navmenu-container'>
			<div className='input-container'>
				<p>Project</p>
				<div className='input-content'>
					<input className='input-field' type='text' placeholder='Search' />
					<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'>
						<path
							fill='currentColor'
							d='M15.5 14h-.79l-.28-.27a6.5 6.5 0 0 0 1.48-5.34c-.47-2.78-2.79-5-5.59-5.34a6.505 6.505 0 0 0-7.27 7.27c.34 2.8 2.56 5.12 5.34 5.59a6.5 6.5 0 0 0 5.34-1.48l.27.28v.79l4.25 4.25c.41.41 1.08.41 1.49 0s.41-1.08 0-1.49zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5S14 7.01 14 9.5S11.99 14 9.5 14'
						/>
					</svg>
				</div>
			</div>
			{showFilters ? (
				<>
						
					<div className='input-container'>
						<p>Tech Stack</p>
						<div className='input-content'>
							<select className='input-field' type='select'>
								<option value='' disabled>
									Select A Stack
								</option>
							</select>
						</div>
					</div>
					<div className='input-container'>
						<p>Platform</p>
						<div className='input-content'>
							<select className='input-field' type='select'>
								<option value='' disabled>
									Select A Platform
								</option>
							</select>
						</div>
					</div>
                    <button className='filter-toggle' onClick={toggleShowFilters}>
							Filters
						</button>
				</>
			) : (
				<>
					<button className='filter-toggle' onClick={toggleShowFilters}>
						Filters
					</button>
				</>
			)}

			<span className='section-break'></span>
		</div>
	);
};

export default Navmenu;
