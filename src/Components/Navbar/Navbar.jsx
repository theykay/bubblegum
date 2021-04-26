import React from 'react';
import './Navbar.scss';

const Navbar = () => {
  const changeClass = (e) => {
    const all = document.getElementsByClassName('navbar-link');
    for (let i = 0; i < all.length; i++) {
      all[i].setAttribute('className', 'navbar-link')
    }
    const current = e.target;
    current.setAttribute('className', 'active-section navbar-link');
  }

  return (
    <nav id="header" className="navbar">
      <ul className="links-list">
        <li className="list-item">
          <a onClick={changeClass} className="navbar-link" href="#about">about</a>
        </li>
        <li className="list-item">
          <a onClick={changeClass} className="navbar-link" href="#skills">skills</a>
        </li>
        <li className="list-item">
          <a onClick={changeClass} className="navbar-link" href="#projects">projects</a>
        </li>
        <li className="list-item">
          <a onClick={changeClass} className="navbar-link" href="#contact">contact</a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar;