import React, { useState } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';

const Navbar = (props) => {
  const [toggleClass, setToggleClass] = useState('menu');
  const [navLinksClass, setNavLinksClass] = useState('hidden');

  function toggleNavIcon() {

    if (toggleClass === 'menu') {
      setToggleClass('close');
      setNavLinksClass('visible');
    }
    else {
      setToggleClass('menu');
      setNavLinksClass('hidden');
    }
  }

  return (
    <header>
      <h1 className="header-item">
        <a onClick={scroll.scrollToTop} tabIndex="0">Autumn Bullard</a>
      </h1>
      <nav className="header-item nav-menu">
        <button type="button" className="button menu-toggle" onClick={() => toggleNavIcon()} aria-label="Dropdown toggle">
          <span className="material-icons menu-toggle-icon">{toggleClass}</span>
        </button>
        <div className={`nav-links ${navLinksClass}`}>
          <Link to="about" smooth duration={1000} tabIndex="0">About</Link>
          <Link to="portfolio" smooth duration={1000} tabIndex="0">Portfolio</Link>
          <Link to="contact" smooth duration={1000} tabIndex="0">Contact</Link>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
