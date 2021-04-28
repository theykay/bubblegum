import React from 'react';
import './About.scss';
import myPic from '../../images/profile.jpeg';

const About = () => {
  return (
    <section id="about" className="glass-card">
      <img id="profilePic" src={myPic} alt="me artfully draped around an overturned chair"/>
      <header className="glass-card-head">about me</header>
    </section>
  )
}

export default About;