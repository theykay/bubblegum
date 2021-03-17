import React from 'react';
import './header.scss';
import Menu from '../Menu';

const Header = () => {
  return (
    <>
      <header id="pageHead">
        {/* placeholder for logo */}
        <section id="meTitle">
          <div id="logo"></div>
          Kay
        </section>
        <Menu />
      </header>
    </>
  )
}

export default Header;