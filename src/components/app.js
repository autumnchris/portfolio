import React, { Component } from 'react';
import SkillGroup from './skill-group';
import Project from './project';
import axios from 'axios';
import { Link, animateScroll as scroll } from 'react-scroll';

const avatar = require('../images/avatar.jpg');

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      bio: '',
      skills: [],
      projects: [],
      toggleClass: 'menu',
      navLinksClass: 'hidden',
      aboutContentStyle: {display: 'block'},
      aboutContentErrorStyle: {display: 'none'},
      projectsErrorStyle: {display: 'none'}
    };
  }

  componentDidMount() {
    axios.get('/api/about-content').then(aboutContentData => {
      this.setState({
        bio: aboutContentData.data.bio,
        skills: aboutContentData.data.skills
      });
    }).catch(() => {
      this.setState({
        aboutContentStyle: {display: 'none'},
        aboutContentErrorStyle: {display: 'block'}
      });
    });

    axios.get('/api/projects').then(projectsData => {
      this.setState({
        projects: projectsData.data
      });
    }).catch(() => {
      this.setState({
        projectsErrorStyle: {display: 'block'}
      });
    });
  }

  toggleNavIcon() {

    if (this.state.toggleClass === 'menu') {
      this.setState({
        toggleClass: 'close',
        navLinksClass: 'visible'
      });
    }
    else {
      this.setState({
        toggleClass: 'menu',
        navLinksClass: 'hidden'
      });
    }
  }

  render() {
    return (
      <div className="body">
        <header>
          <nav>
            <h1 className="nav-item">
              <a onClick={scroll.scrollToTop} tabindex="0">Autumn Bullard</a>
            </h1>
            <div className="nav-item nav-menu">
              <button type="button" className="button menu-toggle" onClick={() => this.toggleNavIcon()}>
                <span className="material-icons menu-toggle-icon">{this.state.toggleClass}</span>
              </button>
              <div className={`nav-links ${this.state.navLinksClass}`}>
                <Link to="about" smooth duration={1000} tabindex="0">About</Link>
                <Link to="portfolio" smooth duration={1000} tabindex="0">Portfolio</Link>
                <Link to="contact" smooth duration={1000} tabindex="0">Contact</Link>
              </div>
            </div>
          </nav>
        </header>
        <main>
          <section className="about" id="about">
            <h2>About the Developer</h2>
            <div className="content">
              <div className="col">
                <img src={avatar} className="avatar" alt="photo of Autumn Bullard" />
                <div className="social-icons">
                  <a href="https://www.linkedin.com/in/autumncbullard" target="_blank" className="linkedin-icon" title="LinkedIn" aria-label="LinkedIn profile">
                    <span className="fab fa-linkedin fa-3x fa-fw"></span>
                  </a>
                  <a href="https://github.com/autumnchris" target="_blank" className="github-icon" title="GitHub" aria-label="GitHub profile">
                    <span className="fab fa-github fa-3x fa-fw"></span>
                  </a>
                </div>
              </div>
              <div className="col">
                <div className="bio-and-skills" style={this.state.aboutContentStyle}>
                  <div class="bio" dangerouslySetInnerHTML={{__html: this.state.bio}}></div>
                  <hr/>
                  <div className="skills">
                    <h3>Skills</h3>
                    <div className="skills-container">{this.state.skills.map((skillGroup, index) => <SkillGroup key={index} skillGroup={skillGroup} />)}</div>
                  </div>
                </div>
                <p className="message error-message" style={this.state.aboutContentErrorStyle}><span className="fa fa-exclamation-circle fa-lg fa-fw"></span> Unable to load About content for Autumn Bullard at this time.</p>
              </div>
            </div>
          </section>
          <section className="portfolio" id="portfolio">
            <h2>Some of My Work</h2>
            <div className="content">
              <div className="projects">{this.state.projects.map((project, index) => <Project key={index} project={project} />)}</div>
              <p className="message error-message" style={this.state.projectsErrorStyle}><span className="fa fa-exclamation-circle fa-lg fa-fw"></span> Unable to load Portfolio projects for Autumn Bullard at this time.</p>
            </div>
          </section>
          <section className="contact" id="contact">
            <h2>Contact Me</h2>
            <div className="content">
              <h3>Email Me At...</h3>
              <div className="email"><span className="far fa-envelope fa-lg fa-fw"></span> <a href="mailto:autumncbullard@gmail.com" target="_self">autumncbullard@gmail.com</a></div>
              <h3>Find Me On...</h3>
              <div className="social-links">
                <a className="social-link linkedin-profile" href="https://www.linkedin.com/in/autumncbullard" target="_blank"><span className="fab fa-linkedin fa-lg fa-fw"></span> LinkedIn</a>
                <a className="social-link github-profile" href="https://github.com/autumnchris" target="_blank"><span className="fab fa-github fa-lg fa-fw"></span> GitHub</a>
              </div>
            </div>
          </section>
        </main>
      </div>
    );
  }
}
