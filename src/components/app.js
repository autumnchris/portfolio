import React, { Component } from 'react';
import Projects from './projects';
import Portfolio from '.././db/portfolio.min.json';
import axios from 'axios';
import ScrollableAnchor from 'react-scrollable-anchor';

const avatar = require('.././images/avatar.jpg');

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      portfolio: [],
      toggleClass: 'menu',
      navLinksClass: 'hidden',
      errorStyle: {display: 'none'}
    };
  }

  componentDidMount() {
    axios.get(Portfolio).then(portfolio => {
      this.setState({ portfolio: portfolio.data });
    }).catch(() => {
      this.setState({
        errorStyle: {display: 'block'}
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
        <nav>
          <h1>
            <a href="../portfolio" target="_self">Autumn Bullard</a>
          </h1>
          <div className="nav-menu">
            <button type="button" onClick={() => this.toggleNavIcon()}>
              <span className="material-icons">{this.state.toggleClass}</span>
            </button>
            <div className={`nav-links ${this.state.navLinksClass}`}>
              <a href="#about" target="_self">About</a>
              <a href="#portfolio" target="_self">Portfolio</a>
              <a href="#contact" target="_self">Contact</a>
            </div>
          </div>
        </nav>
        <main>
          <ScrollableAnchor id="about">
            <section className="about">
              <h2>About the Developer</h2>
              <div className="content">
                <div className="col">
                  <img src={avatar} className="avatar" alt="photo of Autumn Bullard" />
                  <div className="social-icons">
                    <a href="https://www.linkedin.com/in/autumncbullard" target="_blank" className="linkedin-icon" title="LinkedIn" aria-label="LinkedIn profile">
                      <span className="fab fa-linkedin fa-3x"></span>
                    </a>
                    <a href="https://github.com/autumnchris" target="_blank" className="github-icon" title="GitHub" aria-label="GitHub profile">
                      <span className="fab fa-github fa-3x"></span>
                    </a>
                  </div>
                </div>
                <div className="col">
                  <p>I am a front-end web developer based in Jacksonville Beach, Florida. I prioritize accessibility and responsiveness in my markup and design. Producing clean and organized code is also of high importance to me. It's not enough for me just to make something work. It's important to understand what I have made. Does it work effectively? Can I easily apply this process to a future project? Have I considered every scenario?</p>
                  <p>I am currently in the process of working through the curriculum on <a href="https://www.freecodecamp.org/autumnchris" target="_blank">freeCodeCamp</a> and <a href="https://www.theodinproject.com" target="_blank">The Odin Project</a>.</p>
                  <h3>Certifications:</h3>
                  <ul>
                    <li><a href="https://www.freecodecamp.org/certification/autumnchris/front-end-libraries" target="_blank">Front End Libraries</a> from freeCodeCamp</li>
                    <li><a href="https://www.freecodecamp.org/certification/autumnchris/javascript-algorithms-and-data-structures" target="_blank">JavaScript Algorithms and Data Structures</a> from freeCodeCamp</li>
                    <li><a href="https://www.freecodecamp.org/certification/autumnchris/responsive-web-design" target="_blank">Responsive Web Design</a> from freeCodeCamp</li>
                    <li><a href="https://www.coursera.org/account/accomplishments/specialization/NTKX2VYA96UD" target="_blank">Web Design for Everybody (Basics of Web Development and Coding)</a> from Coursera and the University of Michigan</li>
                  </ul>
                </div>
              </div>
            </section>
          </ScrollableAnchor>
          <ScrollableAnchor id="portfolio">
            <section className="portfolio">
              <h2>Some of My Work</h2>
              <Projects projects={this.state.portfolio} />
              <p className="message error-message" style={this.state.errorStyle}><span className="fa fa-exclamation-circle fa-lg fa-fw"></span> Unable to load portfolio projects.</p>
            </section>
          </ScrollableAnchor>
          <ScrollableAnchor id="contact">
            <section className="contact">
              <h2>Contact Me</h2>
              <p className="message info-message"><span className="fa fa-info-circle fa-lg fa-fw"></span> Contact form coming soon! For the time being, you can reach me at <a href="mailto:autumncbullard@gmail.com" target="_self">autumncbullard@gmail.com</a>.</p>
            </section>
          </ScrollableAnchor>
        </main>
        <footer>Coded by <a href="../portfolio" target="_self">Autumn Bullard</a></footer>
      </div>
    );
  }
}
