import React, { Component } from 'react';
import Projects from './projects';
import Portfolio from '.././db/portfolio.min.json';
import axios from 'axios';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import ScrollableAnchor from 'react-scrollable-anchor';

const avatar = require('.././images/avatar.jpg');

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      portfolio: [],
      toggleClass: 'menu'
    };
  }

  componentDidMount() {
    axios.get(Portfolio).then(portfolio => {
      this.setState({ portfolio: portfolio.data });
    }).catch(error => {
      document.querySelector('.error').style.display = 'block';;
    });
  }

  toggleNavIcon() {

    if (this.state.toggleClass === 'menu') {
      this.setState({ toggleClass: 'close' });
    }
    else {
      this.setState({ toggleClass: 'menu' });
    }
  }

  render() {
    return (
      <div className="body">
        <Navbar fixedTop>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="../portfolio" target="_self">
                <h1>Autumn Bullard</h1>
              </a>
            </Navbar.Brand>
            <Navbar.Toggle onClick={() => this.toggleNavIcon()}>
              <span className="material-icons">{this.state.toggleClass}</span>
            </Navbar.Toggle>
          </Navbar.Header>
          <Navbar.Collapse>
              <Nav pullRight>
                <NavItem eventKey={1} href="#about" target="_self">About</NavItem>
                <NavItem eventKey={2} href="#portfolio" target="_self">Portfolio</NavItem>
                <NavItem eventKey={3} href="#contact" target="_self">Contact</NavItem>
              </Nav>
          </Navbar.Collapse>
        </Navbar>
        <main>
          <ScrollableAnchor id="about">
            <section className="center-block">
              <div className="container-fluid">
                <h2>About the Developer</h2>
                <div className="row">
                  <div className="col-sm-4">
                    <img src={avatar} className="img-responsive img-circle center-block avatar" alt="photo of Autumn Bullard" />
                    <ul className="list-inline text-center">
                      <li>
                        <a href="https://www.linkedin.com/in/autumncbullard" target="_blank" className="linkedin-icon" title="LinkedIn">
                          <span className="fa fa-linkedin-square fa-3x"></span>
                          <span className="sr-only">LinkedIn profile</span>
                        </a>
                      </li>
                      <li>
                        <a href="https://github.com/autumnchris" target="_blank" className="github-icon" title="GitHub">
                          <span className="fa fa-github fa-3x"></span>
                          <span className="sr-only">GitHub profile</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-sm-8">
                    <p>I am a front-end web developer based in Jacksonville Beach, Florida. I prioritize accessibility and responsiveness in my markup and design. Producing clean and organized code is also of high importance to me. It's not enough for me just to make something work. It's important to understand what I have made. Does it work effectively? Can I easily apply this process to a future project? Have I considered every scenario?</p>
                    <p>I am currently in the process of working through the curriculum on <a href="https://www.freecodecamp.org/autumnchris" target="_blank">freeCodeCamp</a> and <a href="https://www.theodinproject.com" target="_blank">The Odin Project</a>.</p>
                    <h3>Earned Certifications:</h3>
                    <ul>
                      <li><a href="https://www.freecodecamp.org/certification/autumnchris/javascript-algorithms-and-data-structures" target="_blank">JavaScript Algorithms and Data Structures</a> from freeCodeCamp</li>
                      <li><a href="https://www.coursera.org/account/accomplishments/specialization/NTKX2VYA96UD" target="_blank">Web Design for Everybody (Basics of Web Development and Coding)</a> from Coursera and the University of Michigan</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
          </ScrollableAnchor>
          <ScrollableAnchor id="portfolio">
            <section className="center-block">
              <h2>Some of My Work</h2>
              <Projects projects={this.state.portfolio} />
              <div className="alert alert-warning text-center error"><span className="fa fa-warning fa-lg fa-fw"></span> Unable to load portfolio projects.</div>
            </section>
          </ScrollableAnchor>
          <ScrollableAnchor id="contact">
            <section>
              <div className="container-fluid">
                <h2>Contact Me</h2>
                <div className="alert alert-info text-center"><span className="fa fa-info-circle fa-lg fa-fw"></span> Contact form coming soon! For the time being, you can reach me at <a href="mailto:autumncbullard@gmail.com" className="alert-link" target="_self">autumncbullard@gmail.com</a>.</div>
              </div>
            </section>
          </ScrollableAnchor>
        </main>
        <footer>Coded by <a href="../portfolio" target="_self">Autumn Bullard</a></footer>
      </div>
    );
  }
}
