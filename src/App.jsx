
import AboutMe from './components/AboutMe/AboutMe';
import Projects from './components/Projects/Projects';
import ContactMe from './components/ContactMe/ContactMe';
import Experience from './components/Experience/Experience';
import Resume from './components/Resume/Resume';
import Navbar from './components/Navbar/Navbar';
import Journey from './components/Journey/Journey';

import './App.css';

function App() {
  return (
    <div className="App">
      <div className="blur-div">
        <Navbar/>
        <section id="AboutMeSection">
          <AboutMe/>
        </section>
        <section id="ExperienceSection">
          <Experience/>
        </section>
        <section id="ProjectsSection">
          <Projects/>
        </section>
        {/* <section id="JourneySection">
          <Journey/>
        </section> */}
        <section id="ContactMeSection">
          <ContactMe/>
        </section>
      </div>
    </div>
  );
}

export default App;
