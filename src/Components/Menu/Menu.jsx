import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import './menu.scss';

const usePathname = () => {
  const location = useLocation();
  return location.pathname;
};

const Menu = () => {
  return (
    <>
      <ul id="menuContent">
        <li className={(usePathname() === '/' && 'menuItem current') || 'menuItem'} id="link1">
          <FontAwesomeIcon className={(usePathname() === '/' && 'showIcon') || 'hideIcon'} icon={faMapMarkerAlt} />
          <Link className="menuLink" to='/'>about</Link>
        </li>
        <li className={(usePathname() === '/digital' && 'menuItem current') || 'menuItem'} id="link2">
          <FontAwesomeIcon className={(usePathname() === '/digital' && 'showIcon') || 'hideIcon'} icon={faMapMarkerAlt} />
          <Link className="menuLink" to='/digital'>projects</Link>
        </li>
        {/* <li className={(usePathname() === '/handmade' && 'menuItem current') || 'menuItem'} id="link3">
          <FontAwesomeIcon className={(usePathname() === '/handmade' && 'showIcon') || 'hideIcon'} icon={faMapMarkerAlt} />
          <Link className="menuLink" to='/handmade'>handmade</Link>
        </li> */}
      </ul>
    </>
  )
}

export default Menu;