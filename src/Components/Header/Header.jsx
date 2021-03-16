import React from 'react';
import './header.scss';

const Header = () => {
  return (
    <>
      <header>
        {/* logo */}
        {/* <Menu /> */}
        {/*  */}
        <div class="dropdown">
          <ul class="dropdown-menu dropdown-menu--animated">
            <li class="dropdown-item-1">
              <a href="/">About Me</a>
            </li>
            <li class="dropdown-item-2">
              <a href="/digital">Web Projects</a>
            </li>
            <li class="dropdown-item-3">
              <a href="/handmade">Handmade Projects</a>
            </li>
          </ul>
        </div>
      </header>
    </>
  )
}

export default Header;