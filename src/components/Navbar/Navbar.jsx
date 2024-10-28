import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <div id='Navbar-container'>
      <div className='Navbar-img'>
        <img id="headshot" src={require("../../images/headshot.jpg")} alt='' />
      </div>
      <div className='Navbar-link-div'>
        <a className='Navbar-a' href='#AboutMeSection'>
          AboutMe
        </a>
        <a className='Navbar-a' href='#ExperienceSection'>
          Experience
        </a>
        <a className='Navbar-a' href='#ProjectsSection'>
          Projects
        </a>
        <a className='Navbar-a' href='#ContactMeSection'>
          Contact Me
        </a>
      </div>
    </div>
  );
};

export default Navbar;
