import React from 'react';
import axios from 'axios';
import { Link, animateScroll as scroll } from 'react-scroll';
import avatar from '../images/avatar.jpg';
import LoadingSpinner from './loading-spinner';
import AboutContent from './about-content';
import Project from './project';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      bio: '',
      skills: [],
      projects: [],
      toggleClass: 'menu',
      navLinksClass: 'hidden',
      isAboutContentLoading: true,
      isProjectsLoading: true,
      aboutContentLoadingError: false,
      projectsLoadingError: false
    };
  }

  fetchAboutContentData() {
    return axios.get('/api/about-content');
  }

  fetchProjectsData() {
    return axios.get('/api/projects');
  }

  componentDidMount() {
    axios.all([this.fetchAboutContentData(), this.fetchProjectsData()])
      .then(axios.spread((aboutContentData, projectsData) => {
        this.setState({
          bio: aboutContentData.data.bio,
          skills: aboutContentData.data.skills,
          projects: projectsData.data,
          isAboutContentLoading: false,
          isProjectsLoading: false,
          aboutContentLoadingError: false,
          projectsLoadingError: false
        });
      })).catch(() => {
        this.setState({
          isAboutContentLoading: false,
          isProjectsLoading: false,
          aboutContentLoadingError: true,
          projectsLoadingError: true
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
      <React.Fragment>
        <header>
          <h1 className="header-item">
            <a onClick={scroll.scrollToTop} tabindex="0">Autumn Bullard</a>
          </h1>
          <nav className="header-item nav-menu">
            <button type="button" className="button menu-toggle" onClick={() => this.toggleNavIcon()}>
              <span className="material-icons menu-toggle-icon">{this.state.toggleClass}</span>
            </button>
            <div className={`nav-links ${this.state.navLinksClass}`}>
              <Link to="about" smooth duration={1000} tabindex="0">About</Link>
              <Link to="portfolio" smooth duration={1000} tabindex="0">Portfolio</Link>
              <Link to="contact" smooth duration={1000} tabindex="0">Contact</Link>
            </div>
          </nav>
        </header>
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
                {this.state.isAboutContentLoading ? <LoadingSpinner /> : null}
                {!this.state.isAboutContentLoading && !this.state.aboutContentLoadingError ? <AboutContent bio={this.state.bio} skills={this.state.skills} /> : !this.state.isAboutContentLoading && this.state.aboutContentLoadingError ? <p className="message error-message"><span className="fa fa-exclamation-circle fa-lg fa-fw"></span> Unable to load About content for Autumn Bullard at this time.</p> : null}
              </div>
            </div>
          </section>
          <section className="portfolio" id="portfolio">
            <h2>Some of My Work</h2>
            <div className="content">
              {this.state.isProjectsLoading ? <LoadingSpinner /> : null}
              {!this.state.isProjectsLoading && !this.state.projectsLoadingError ? <div className="projects">{this.state.projects.map(project => <Project key={project._id} project={project} />)}</div> : !this.state.isProjectsLoading && this.state.projectsLoadingError ? <p className="message error-message"><span className="fa fa-exclamation-circle fa-lg fa-fw"></span> Unable to load Portfolio projects for Autumn Bullard at this time.</p> : null}
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
      </React.Fragment>
    );
  }
}

export default App;
