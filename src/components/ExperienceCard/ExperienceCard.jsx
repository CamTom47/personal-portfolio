import React from 'react';
import './ExperienceCard.css';

const ExperienceCard = ({ title, contents }) => {
  const contentComponents = contents.map((content) => (
    <div className='contentDiv'>
      <p>{content}</p>
    </div>
  ));
  return (
    <div id='ExperienceCard-container'>
      <div className='titleDiv'>
        <p>{title}</p>
      </div>
      <div className='contentContainer'>{contentComponents}</div>
    </div>
  );
};

export default ExperienceCard;
