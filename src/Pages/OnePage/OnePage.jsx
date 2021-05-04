import React, { useState } from 'react';
import './OnePage.scss';
// import Navbar from '../../Components/Navbar';
import TopMenu from '../../Components/TopMenu';
import Clouds from '../../Components/Clouds';
import Modal from '../../Components/Modal';
import About from '../../Sections/About';
import Contact from '../../Sections/Contact';
import Projects from '../../Sections/Projects';
import Skills from '../../Sections/Skills';
// import ToTop from '../../images/toTop.svg';

const OnePage = () => {
  const [show, setShow] = useState(false);
  const showModal = () => {
    setShow(true);
  }
  const hideModal = () => {
    setShow(false);
  }

  return (
    <>
      {/* <Navbar /> */}
      <TopMenu />
      <Clouds />
      <section id="onepage-content">
        <About />
        <Skills />
        <Projects />
        <Contact />
      </section>
      <div id="to-top">
        {/* <ToTop /> */}
      </div>
    </>
  )
};

export default OnePage;