import React, { useState, useEffect } from 'react';
import './Navbar.scss';
import Dropdown from '../../Components/Dropdown';


const Navbar = () => {
  const [pullMenu, setPullMenu] = useState();
  const [pullTag, setPullTag] = useState();
  const [startY, setStartY] = useState(0);
  const [allowDown, setAllowDown] = useState(true);
  const [allowUp, setAllowUp] = useState(true);
  const [menuTop, setMenuTop] = useState(-224);
  const [direction, setDirection] = useState("");

  useEffect(() => {
    setPullMenu(document.getElementById('dd-content'));
    setPullTag(document.getElementById('dd-button'));
  }, []);

  const changeClass = (e) => {
    const all = document.getElementsByClassName('navbar-link');
    for (let i = 0; i < all.length; i++) {
      all[i].setAttribute('className', 'navbar-link')
    }
    const current = e.target;
    current.setAttribute('className', 'active-section navbar-link');
  };

  const dragTouch = (e) => {
    let temp = window.getComputedStyle(pullMenu).top;
    temp = parseInt(temp.replace("px", ""));
    if (temp > 0) {
      temp = 0;
      setAllowUp(true);
      setAllowDown(false);
    } else if (temp < -224) {
      temp = -224;
      setAllowUp(false);
      setAllowDown(true);
    } else if (temp === 0) {
      setAllowUp(true);
      setAllowDown(false);
    } else if (temp === -224) {
      setAllowDown(true);
      setAllowUp(false);
    } else {
      setAllowDown(true);
      setAllowUp(true);  
    }
    const progressY = startY - e.touches[0].clientY;
    setDirection(progressY > 0 )
    let translation = progressY > 0 ? parseInt(-Math.abs(progressY)) : parseInt(Math.abs(progressY));
    // 224px movement allowed
    
    // for use in endTouch
    setDirection(translation > 0 ? "d" : "u");
    // console.log(direction);

    if (temp + translation > 0) {
      temp = 0;
      setAllowDown(false);
      setAllowUp(true);
    } else if (temp + translation < -224) {
      temp = -224;
      setAllowDown(true);
      setAllowUp(false);
    } else temp += translation;

    if ((allowDown && translation >= 0) || (allowUp && translation <= 0)) {
      setAllowDown(temp < 0);
      setAllowUp(temp > -224);
      pullMenu.setAttribute('style', `top: ${temp}px`);
      pullTag.setAttribute('style', `top: ${temp+224}px`);
    }
  };
  
  const endTouch = (e) => {
    let temp = window.getComputedStyle(pullMenu).top;
    temp = parseInt(temp.replace("px",""));
    const finishingTouch = e.changedTouches[0].clientY;
    console.log(direction);
    if (direction === "d") {
      // smooth animate open
    } else if (direction === "u") {
      // smooth animate closed
    }
  };

  const startTouch = (e) => {
    let temp = window.getComputedStyle(pullMenu).top;
    setMenuTop(parseInt(temp.replace("px", "")));
    setAllowDown(menuTop < 0);
    setAllowUp(menuTop > -224);
    // console.log(menuTop);
    const { touches } = e;
    if (touches && touches.length === 1) {
      const touch = touches[0];
      setStartY(touch.clientY);
      pullTag.addEventListener('touchmove', dragTouch);
      pullTag.addEventListener('touchend', endTouch);
    }
  };

  return (
    <nav id="header" className="navbar">
      <ul id="dd-content" className="links-list">
        <li className="list-item">
          <a onClick={changeClass} className="navbar-link" href="#about">about</a>
        </li>
        <li className="list-item">
          <a onClick={changeClass} className="navbar-link" href="#skills">skills</a>
        </li>
        <li className="list-item">
          <a onClick={changeClass} className="navbar-link" href="#projects">projects</a>
        </li>
        <li className="list-item">
          <a onClick={changeClass} className="navbar-link" href="#contact">contact</a>
        </li>
      </ul>
      <div id="dd-button" onTouchStart={startTouch}>
        <Dropdown />
      </div>
    </nav>
  )
}

export default Navbar;