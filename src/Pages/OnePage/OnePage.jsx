import React from 'react';
import './OnePage.scss';
// import Navbar from '../../Components/Navbar';
import TopMenu from '../../Components/TopMenu';
import ToTop from '../../Components/ToTop';
import Clouds from '../../Components/Clouds';
import About from '../../Sections/About';
import Contact from '../../Sections/Contact';
import Projects from '../../Sections/Projects';
import Skills from '../../Sections/Skills';

const OnePage = () => {
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
      <ToTop />
    </>
  )
};

export default OnePage;