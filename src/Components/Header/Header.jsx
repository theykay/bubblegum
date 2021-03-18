import React from 'react';
import './header.scss';
import Menu from '../Menu';
import icon from '../../images/icon_big.svg';

const Header = () => {
  return (
    <>
      <header id="pageHead">
        {/* placeholder for logo */}
        <section id="meTitle">
          <img id="icon" src={icon} alt="pink circle with white framed glasses in front" />
          <h1>Kay</h1>
        </section>
        <Menu />
      </header>
    </>
  )
}

export default Header;