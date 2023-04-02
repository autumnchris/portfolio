import React from 'react';
import avatar from '../assets/images/avatar.jpg';
import Navbar from './Navbar';
import AboutContent from './AboutContent';
import Project from './Project';
import projects from '../data/projects';

const App = () => {
  return (
    <React.Fragment>
      <Navbar />
      <main>
        <section className="about" id="about">
          <h2>About the Developer</h2>
          <div className="content">
            <div className="col">
              <img src={avatar} className="avatar" alt="photo of Autumn Bullard" />
              <div className="button-group social-icons">
                <a href="https://www.linkedin.com/in/autumncbullard" target="_blank" className="button linkedin-icon" title="LinkedIn" aria-label="LinkedIn profile">
                  <span className="fab fa-linkedin fa-3x fa-fw"></span>
                </a>
                <a href="https://github.com/autumnchris" target="_blank" className="button github-icon" title="GitHub" aria-label="GitHub profile">
                  <span className="fab fa-github fa-3x fa-fw"></span>
                </a>
              </div>
            </div>
            <div className="col">
              <AboutContent />
            </div>
          </div>
        </section>
        <section className="portfolio" id="portfolio">
          <h2>Some of My Work</h2>
          <div className="content">
            <div className="projects">{projects.sort((a, b) => b.lastUpdated - a.lastUpdated).map(project => <Project key={project.id} project={project} />)}</div>
          </div>
        </section>
        <section className="contact" id="contact">
          <h2>Contact Me</h2>
          <div className="content">
            <h3>Email Me At...</h3>
            <div className="email"><span className="far fa-envelope fa-lg fa-fw" aria-hidden="true"></span> <a href="mailto:autumncbullard@gmail.com" target="_self">autumncbullard@gmail.com</a></div>
            <h3>Find Me On...</h3>
            <div className="social-links">
              <a className="social-link linkedin-profile" href="https://www.linkedin.com/in/autumncbullard" target="_blank"><span className="fab fa-linkedin fa-lg fa-fw" aria-hidden="true"></span> LinkedIn</a>
              <a className="social-link github-profile" href="https://github.com/autumnchris" target="_blank"><span className="fab fa-github fa-lg fa-fw" aria-hidden="true"></span> GitHub</a>
            </div>
          </div>
        </section>
        </main>
      <footer>Created by <a href="https://autumnchris.github.io/portfolio" target="_self">Autumn Bullard</a> &copy; {new Date().getFullYear()}</footer>
    </React.Fragment>
  );
}

export default App;
