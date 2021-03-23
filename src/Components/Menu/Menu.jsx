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
          <li className="menuItem" id="link1">
            <Link className="menuLink" to='/'>about</Link>
            {/* <a className="menuLink" href="/">about</a> */}
          </li>
          <li className="menuItem" id="link2">
            <Link className="menuLink" to='/digital'>apps</Link>
            {/* <a className="menuLink" href="/digital">apps</a> */}
          </li>
          <li className="menuItem" id="link3">
            <Link className="menuLink" to='/handmade'>handmade</Link>
            {/* <a className="menuLink" href="/handmade">handmade</a> */}
          </li>
        </ul>
      </section>
      {/* <nav>
        <button className="dd-trigger"><FontAwesomeIcon icon={faBars} /></button>
        <ul className="dd-menu">
          <li className="dd1"><a className="ddLink" href="/">about</a></li>
          <li className="dd2"><a className="ddLink" href="/digital">apps</a></li>
          <li className="dd2"><a className="ddLink" href="/handmade">handmade</a></li>
        </ul>
      </nav> */}
    </>
  )
}

export default Menu;