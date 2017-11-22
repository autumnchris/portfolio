import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import ScrollableAnchor from 'react-scrollable-anchor';

export default class App extends Component {

  render() {
    return (
      <div>
        <Navbar fixedTop>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="/" target="_self"><h1>Autumn Bullard</h1></a>
            </Navbar.Brand>
            <Navbar.Toggle>
              <span className="fa fa-bars fa-2x"></span>
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
            </section>
          </ScrollableAnchor>
        </main>
      </div>
    );
  }
}
