import React from 'react';
import './menu.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'

const Menu = () => {
  return (
    <>
      <section id="menuSection">
        <FontAwesomeIcon id="burger" icon={faBars} />
        <ul id="menuContent">
          <li class="menuItem" id="link1">
            <a class="menuLink" href="/">about</a>
          </li>
          <li class="menuItem" id="link2">
            <a class="menuLink" href="/digital">apps</a>
          </li>
          <li class="menuItem" id="link3">
            <a class="menuLink" href="/handmade">handmade</a>
          </li>
        </ul>
      </section>
      {/* <nav>
        <button class="dd-trigger"><FontAwesomeIcon icon={faBars} /></button>
        <ul class="dd-menu">
          <li class="dd1"><a class="ddLink" href="/">about</a></li>
          <li class="dd2"><a class="ddLink" href="/digital">apps</a></li>
          <li class="dd2"><a class="ddLink" href="/handmade">handmade</a></li>
        </ul>
      </nav> */}
    </>
  )
}

export default Menu;