import React, { useEffect, useRef } from 'react';
import './Journey.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const Journey = () => {


const ref = useRef([]);
ref.current = [];
useEffect(() => {
    ref.current.forEach((el) =>
    gsap.fromTo(el, {autoAlpha: 0}, {
        autoAlpha: 1,
        duration: 3, scrollTrigger: {
          trigger: el,
        }
    }))
}, [])

const addToRefs = (el) => {
    if (el && !ref.current.includes(el)){
        ref.current.push(el)
    }
}

  return (
    <div id='Journey-container'>
      <h1>My Journey To Software Engineering</h1>
        <div ref={addToRefs} className='milestone'>
          <p>
            When I was young, I was introduced to technology through video games, and I've been fascinated by the way
            that technology can shape people's lives ever since.
          </p>
        </div>
        <div ref={addToRefs} className='milestone'>
          <p>
            I attended Purdue University and graduated with a Bachelor of Science in Construction Management. I was
            fortunate enough to land a job with an amazing company called DPR Construction, which led me across the
            country to Seattle Washington.
          </p>
        </div>
        <div ref={addToRefs} className='milestone'>
          <p>
            After spending four years in Seattle, my wife and I made the decision to move back to Indiana to be closer
            to family. While in Seattle, we fell in love with nature, and had plans to open a bouldering gym in our
            hometown. While we worked on our business plan, I joined onto Spalding Design Group's team and a
            design/draftsperson.
          </p>
        </div>
        <div ref={addToRefs} className='milestone'>
          <p>
            After spending some time back in our hometown, we came to the realization that we fell in love with the
            Pacific Northwest and what it had to offer in life. This unfortunately meant scrapping our business plans
            and figuring out what was next.
          </p>
        </div>
        <div ref={addToRefs} className='milestone'>
          <p>
            While construction was familiar, I knew that this would have been the perfect opportunity to try something
            that I've always been curious about, and took a leap! I starting coding on my own to see what it entailed
            and quickly fell in love, researching and signing up to be apart of Springboard's Software Engineering
            Bootcamp
          </p>
        </div>
        <div ref={addToRefs} className='milestone'>
          <p>
            After a year of intensive and directed curriculum I graduated from the course with a well rounded skillset
            ready to take my first steps into the world of Software Engineering.{' '}
          </p>
        </div>
        <div ref={addToRefs} className='milestone'>
          <p>
            I'm currently in the process of searching for a job as a Software Engineer. I'm open to in-person/hyrbid
            positions in the Greater Seattle area, and open to all areas remote.
          </p>
        </div>
      </div>
  );
};

export default Journey;
