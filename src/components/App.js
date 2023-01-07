import React, { useState, useEffect } from 'react';
import axios from 'axios';
import avatar from '../images/avatar.jpg';
import Navbar from './Navbar';
import LoadingSpinner from './LoadingSpinner';
import AboutContent from './AboutContent';
import Project from './Project';
import ErrorMessage from './ErrorMessage';

const App = () => {
  const [aboutContent, setAboutContent] = useState(null);
  const [projects, setProjects] = useState([]);
  const [loadingStatus, setLoadingStatus] = useState(true);

  useEffect(() => {
    Promise.all([
      fetchAboutContentData(),
      fetchProjectsData()
    ]).then(([
      aboutContentResponse,
      projectsResponse
    ]) => {
      setAboutContent({
        bio: aboutContentResponse.data.bio,
        skills: aboutContentResponse.data.skills
      });
      setProjects(projectsResponse.data);
      setLoadingStatus(false);
    }).catch(() => {
      setAboutContent(null);
      setProjects([]);
      setLoadingStatus(false);
    });
  }, []);

  function fetchAboutContentData() {
    return axios.get('https://autumnchris-portfolio-api.onrender.com/api/about-content');
  }

  function fetchProjectsData() {
    return axios.get('https://autumnchris-portfolio-api.onrender.com/api/projects');
  }

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
              {loadingStatus && !aboutContent ? <LoadingSpinner /> : aboutContent ? <AboutContent aboutContent={aboutContent} /> : <ErrorMessage errorMessage="Unable to load About content for Autumn Bullard at this time." />}
            </div>
          </div>
        </section>
        <section className="portfolio" id="portfolio">
          <h2>Some of My Work</h2>
          <div className="content">
            {loadingStatus && projects.length === 0 ? <LoadingSpinner /> : projects.length !== 0 ? <div className="projects">{projects.map(project => <Project key={project._id} project={project} />)}</div> : <ErrorMessage errorMessage="Unable to load Portfolio projects for Autumn Bullard at this time." />}
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
