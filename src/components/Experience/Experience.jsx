import React from 'react';
import './Experience.css';
import ExperienceCard from '../ExperienceCard/ExperienceCard';

const experiences = [
  {
    title: 'Programming Languages and Frameworks',
    contents: ['JavaScript', 'TypeScript', 'Node.js', 'Flask', 'Python', 'Express'],
  },
  {
    title: 'Devops',
    contents: ['Git', 'Github'],
  },
  {
    title: 'Data Storage and Caching',
    contents: ['PostgreSQL', 'FlaskSQLAlchemy'],
  },
  {
    title: 'Client Side',
    contents: ['React', 'Redux'],
  },
  {
    title: 'Integrations',
    contents: ['Google Maps'],
  },
];

const Experience = () => {
  const experienceCardComponents = experiences.map((experience) => (
    <ExperienceCard title={experience.title} contents={experience.contents} />
  ));

  return (
    <div id='Experience-container'>
      <h1 className='Experience-text'>Experience</h1>
      <div className='ExperienceInnerDiv'>
        <div className='resumeDiv'>
          <a href={require('../../content/Resume.pdf')} target='#'>
            Resume
          </a>
        </div>
        <div className='certificateDiv'>
          <a href={require('../../content/certificate.pdf')} target='#'>
            Certification
          </a>
        </div>
      </div>
      <div className='CardDiv'>{experienceCardComponents}</div>
    </div>
  );
};

export default Experience;
