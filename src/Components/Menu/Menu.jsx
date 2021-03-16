import React from 'react';
import './menu.scss';

const Menu = () => {
  return (
    <>
      <nav>
          <button class="dd-trigger">menu</button>
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