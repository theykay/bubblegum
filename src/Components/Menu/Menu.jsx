import React from 'react';
import { Link } from 'react-router-dom';
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
            <Link class="menuLink" to='/'>about</Link>
            {/* <a class="menuLink" href="/">about</a> */}
          </li>
          <li class="menuItem" id="link2">
            <Link class="menuLink" to='/digital'>apps</Link>
            {/* <a class="menuLink" href="/digital">apps</a> */}
          </li>
          <li class="menuItem" id="link3">
            <Link class="menuLink" to='/handmade'>handmade</Link>
            {/* <a class="menuLink" href="/handmade">handmade</a> */}
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