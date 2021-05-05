// import React, { useState, useEffect } from 'react';
import React from 'react';
import './TopMenu.scss';
import Dropdown from '../../Components/Dropdown';


const TopMenu = () => {
  // const [pullTag, setPullTag] = useState();
  // const [navbar, setNavbar] = useState();
  // const [navbarTop, setNavbarTop] = useState(-176);
  // const [startY, setStartY] = useState(0);
  // const [allowDown, setAllowDown] = useState(true);
  // const [allowUp, setAllowUp] = useState(true);
  // // const [direction, setDirection] = useState("");

  // useEffect(() => {
  //   setNavbar(document.getElementById('header'));
  //   setPullTag(document.getElementById('dd-tag'));
  //   window.addEventListener('touchmove', window.preventDefault, { passive: false });
  // }, []);

  // const dragTouch = (e) => {
  //   let temp = window.getComputedStyle(navbar).top;
  //   temp = parseInt(temp.replace("px", ""));
  //   if (temp > 0) {
  //     temp = 0;
  //     setAllowUp(true);
  //     setAllowDown(false);
  //   } else if (temp < -176) {
  //     temp = -176;
  //     setAllowUp(false);
  //     setAllowDown(true);
  //   } else if (temp === 0) {
  //     setAllowUp(true);
  //     setAllowDown(false);
  //   } else if (temp === -176) {
  //     setAllowDown(true);
  //     setAllowUp(false);
  //   } else {
  //     setAllowDown(true);
  //     setAllowUp(true);
  //   }
  //   const progressY = startY - e.touches[0].clientY;
  //   // setDirection(progressY > 0 )
  //   let translation = progressY > 0 ? parseInt(-Math.abs(progressY)) : parseInt(Math.abs(progressY));
  //   // 176px movement allowed

  //   // for use in endTouch
  //   // setDirection(translation > 0 ? "d" : "u");
  //   // console.log(direction);

  //   if (temp + translation > 0) {
  //     temp = 0;
  //     setAllowDown(false);
  //     setAllowUp(true);
  //   } else if (temp + translation < -176) {
  //     temp = -176;
  //     setAllowDown(true);
  //     setAllowUp(false);
  //   } else temp += translation;

  //   if ((allowDown && translation >= 0) || (allowUp && translation <= 0)) {
  //     setAllowDown(temp < 0);
  //     setAllowUp(temp > -176);
  //     navbar.setAttribute('style', `top: ${temp}px`);
  //   }
  // };

  // const endTouch = (e) => {
  //   e.preventDefault();
  //   let temp = window.getComputedStyle(navbar).top;
  //   temp = parseInt(temp.replace("px", ""));
  //   // const finishingTouch = e.changedTouches[0].clientY;

  //   // snaps to whichever position it's closest to
  //   if (temp >= -88 || temp <= 0) {
  //     navbar.setAttribute('style', 'top: 0px');
  //   } else if (temp >= -176 || temp < -88) {
  //     navbar.setAttribute('style', 'top: -176px');
  //   }
  //   // if (direction === "d") {
  //   //   // smooth animate open
  //   // } else if (direction === "u") {
  //   //   // smooth animate closed
  //   // }
  // };

  // const startTouch = (e) => {
  //   let temp = window.getComputedStyle(navbar).top;
  //   setNavbarTop(parseInt(temp.replace("px", "")));
  //   setAllowDown(navbarTop < 0);
  //   setAllowUp(navbarTop > -176);
  //   // console.log(navbarTop);
  //   const { touches } = e;
  //   if (touches && touches.length === 1) {
  //     const touch = touches[0];
  //     setStartY(touch.clientY);
  //     pullTag.addEventListener('touchmove', dragTouch);
  //     pullTag.addEventListener('touchend', endTouch);
  //   }
  // };
  
  const changeClass = (e) => {
    const all = document.getElementsByClassName('navbar-link');
    for (let i = 0; i < all.length; i++) {
      all[i].setAttribute('className', 'navbar-link')
    }
    const current = e.target;
    current.setAttribute('className', 'active-section navbar-link');
  };

  const toggleDropdown = () => {
    const headEl = document.getElementById('header');
    headEl.classList.toggle('show');
  }

  return (
    <div id="top-menu">
      <nav id="header" className="navbar">
        <ul id="dd-content" className="links-list">
          <li className="list-item">
            <a onClick={(e) => {changeClass(e); toggleDropdown(e)}} className="navbar-link" href="#about">about</a>
          </li>
          <li className="list-item">
            <a onClick={(e) => {changeClass(e); toggleDropdown(e)}} className="navbar-link" href="#skills">skills</a>
          </li>
          <li className="list-item">
            <a onClick={(e) => {changeClass(e); toggleDropdown(e)}} className="navbar-link" href="#projects">projects</a>
          </li>
          <li className="list-item">
            <a onClick={(e) => {changeClass(e); toggleDropdown(e)}} className="navbar-link" href="#contact">contact</a>
          </li>
        </ul>
        <div id="dd-tag" onClick={toggleDropdown} >
          <Dropdown />
        </div>
      </nav>
    </div>
  )
}

export default TopMenu;