import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import ScrollableAnchor from 'react-scrollable-anchor';

const avatar = require('.././images/avatar.jpg');

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      toggleClass: 'menu'
    };
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
      <div>
        <Navbar fixedTop>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="/" target="_self"><h1>Autumn Bullard</h1></a>
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
          <ScrollableAnchor id={'about'}>
            <section className="center-block">
              <div className="container-fluid">
                <h2>About the Developer</h2>
                <div className="row">
                  <div className="col-sm-4">
                    <img src={avatar} className="img-responsive img-circle center-block" alt="avatar image" id="avatar" />
                    <ul className="list-inline text-center">
                      <li>
                        <a href="https://www.linkedin.com/in/autumncbullard" target="_blank" id="linkedin-icon">
                          <span className="fa fa-linkedin-square fa-3x"></span>
                          <span className="sr-only">LinkedIn profile</span>
                        </a>
                      </li>
                      <li>
                        <a href="https://github.com/autumnchris" target="_blank" id="github-icon">
                          <span className="fa fa-github fa-3x"></span>
                          <span className="sr-only">GitHub profile</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-sm-8">
                    <p>I am a web developer based in Jacksonville Beach, Florida. I specialize in front-end and full-stack development. I prioritize accessibility and responsiveness in my markup and design. Producing clean and organized code is also of high importance to me. It's not enough for me just to make something work. It's important to understand what I have made. Does it work effectively? Can I easily apply this process to a future project? Have I considered every scenario?</p>
                    <p>I am a student at <a href="https://www.freecodecamp.org/autumnchris" target="_blank">Free Code Camp</a> and am in the process of completing their curriculum for their Front End, Data Visualizaion, and Back End certificates. I have also recently begun working through the curriculum on <a href="https://www.theodinproject.com" target="_blank">The Odin Project.</a></p>
                  </div>
                </div>
              </div>
            </section>
          </ScrollableAnchor>
          <ScrollableAnchor id={'portfolio'}>
            <section>
              <h2>Some of My Work</h2>
            </section>
          </ScrollableAnchor>
          <ScrollableAnchor id={'contact'}>
            <section>
              <div className="container-fluid">
                <h2>Contact Me</h2>
                <div className="alert alert-info text-center"><span className="fa fa-info-circle fa-lg fa-fw"></span> Contact form coming soon! For the time being, you can reach me at <a href="mailto:autumncbullard@gmail.com" className="alert-link" target="_self">autumncbullard@gmail.com</a>.</div>
              </div>
            </section>
          </ScrollableAnchor>
        </main>
        <footer>Coded by <a href="../resume-portfolio" target="_self">Autumn Bullard</a></footer>
      </div>
    );
  }
}
