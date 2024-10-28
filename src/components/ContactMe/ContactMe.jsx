import React from 'react';
import './ContactMe.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

const ContactMe = () => {
  return (
    <div id='ContactMe-container'>
      <h1 className='ContactMe-text'>Contact Me</h1>
      <div className='ContactMe-subcontainer'>
        <div id='ContactMe-socials-div'>
          <div className='social-div'>
            <FontAwesomeIcon icon={faGithub} className='FontAwesomeIcon' />
            <p className='ContactMe-text'>Github: </p>
            <a className='ContactMe-text ContactMe-a' target='_blank' href='https://github.com/CamTom47'>
              CamTom47
            </a>
          </div>
          <div className='social-div'>
            <FontAwesomeIcon icon={faLinkedin} className='FontAwesomeIcon' />
            <a
              className='ContactMe-text ContactMe-a'
              target='_blank'
              href='https://www.linkedin.com/in/cameron-mi-thomas'>
              LinkedIn: Cameron Thomas{' '}
            </a>
          </div>
          <div className='social-div'>
            <FontAwesomeIcon icon={faEnvelope} className='FontAwesomeIcon' />
            <p className='ContactMe-text'>Email: </p>
            <a className='ContactMe-text ContactMe-a' href='mailto:CamThomas47@gmail.com'>
              CamThomas47@gmail.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
