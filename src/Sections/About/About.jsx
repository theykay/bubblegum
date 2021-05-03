import React from 'react';
import './About.scss';
import myPic from '../../images/profile.jpeg';

const About = () => {
  return (
    <section id="about" className="glass-card">
      <header className="glass-card-head"><h2>about me</h2></header>
      <img id="profilePic" src={myPic} alt="me artfully draped around an overturned chair" />
      <article className="glass-card-content">
        <p>I'm Kay, a web developer working to make accessible applications. I have a BFA in Industrial Design, and a Full Stack Web Development certificate. I'm excited about continuing to learn and implement principles of accessibility and universal design to build applications with a more diverse range of users in mind.</p>
        <p>Mainly I'm interested in making things, using anything from code to textiles.</p>
      </article>
    </section>
  )
}

export default About;