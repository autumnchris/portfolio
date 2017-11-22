import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

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
      </div>
    );
  }
}
