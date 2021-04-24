import React from 'react';
import { Link } from 'react-scroll';

const Header = () => {
  return (
    <nav id="header" className="navbar">
      <ul className="h-flex">
        <li>
          <Link activeClass="active" to="home" spy={true} smooth={true}>Home</Link>
        </li>
        <li>
          <Link to="about" spy={true} smooth={true}>About</Link>
        </li>
        <li>
          <Link to="skills" spy={true} smooth={true}>Skills</Link>
        </li>
        <li>
          <Link to="projects" spy={true} smooth={true}>Projects</Link>
        </li>
        <li>
          <Link to="links" spy={true} smooth={true}>Links</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Header;