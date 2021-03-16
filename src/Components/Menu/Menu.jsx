import React from 'react';
import './menu.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'

const Menu = () => {
  return (
    <>
      <nav>
          <button class="dd-trigger"><FontAwesomeIcon icon={faBars} /></button>
          <ul class="dd-menu">
            <li class="ddItem dd1"><a class="ddLink" href="/">about</a></li>
            <li class="ddItem dd2"><a class="ddLink" href="/digital">apps</a></li>
            <li class="ddItem dd2"><a class="ddLink" href="/handmade">handmade</a></li>
          </ul>
        </nav>
    </>
  )
}

export default Menu;