import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import ScrollableAnchor from 'react-scrollable-anchor';

const avatar = require('.././images/avatar.jpg');

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      toggleClass: 'fa-bars'
    };
  }

  toggleNavIcon() {

    if (this.state.toggleClass === 'fa-bars') {
      this.setState({ toggleClass: 'fa-times' });
    }
    else {
      this.setState({ toggleClass: 'fa-bars' });
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
              <span className={`fa ${this.state.toggleClass} fa-2x`}></span>
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
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean est sem, dapibus nec volutpat sed, euismod in risus. Nullam nec nibh arcu. Phasellus dignissim sed lacus ut semper. Nulla efficitur ex vitae dignissim interdum. Aliquam cursus dapibus tortor, quis laoreet erat convallis vitae. Aliquam erat volutpat. Morbi sit amet magna finibus, rhoncus turpis sed, volutpat tellus.</p>
                  <p>Duis non dui pellentesque, dignissim metus vitae, venenatis ex. Pellentesque ac ligula augue. Morbi cursus nibh libero, vel ullamcorper nisi ultricies molestie. Ut semper augue nibh, dignissim fermentum eros pretium sit amet. Duis iaculis tristique laoreet. Quisque malesuada eros a elit convallis, imperdiet feugiat felis pulvinar. Maecenas non vehicula ante. Nulla mattis turpis quis diam luctus facilisis. Aliquam vitae condimentum augue, non consectetur metus. Vestibulum non lobortis mi. Proin nec dui nec augue viverra vehicula. Phasellus feugiat fringilla scelerisque.</p>
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
              <h2>Contact Me</h2>
              <form>
                <div className="form-group">
                  <label>Name</label>
                  <input type="" className="form-control" required />
                  <label>Email</label>
                  <input type="email" className="form-control" required />
                  <label>Message</label>
                  <textarea rows="10" className="form-control" required></textarea>
                </div>
                <button type="submit" className="btn">Send</button>
              </form>
            </section>
          </ScrollableAnchor>
        </main>
        <footer>Coded by <a href="../resume-portfolio" target="_self">Autumn Bullard</a></footer>
      </div>
    );
  }
}
