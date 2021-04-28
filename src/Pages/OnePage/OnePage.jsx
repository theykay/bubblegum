import React from 'react';
import './OnePage.scss';
import Navbar from '../../Components/Navbar';
import Clouds from '../../Components/Clouds';
import About from '../../Sections/About';
import Contact from '../../Sections/Contact';
import Projects from '../../Sections/Projects';
import Skills from '../../Sections/Skills';
// import ToTop from '../../images/toTop.svg';

const OnePage = () => {
  return (
    <>
      <Navbar />
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