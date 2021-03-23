import React from 'react';
import { Link } from 'react-router-dom';
import './AboutMe.scss';
// import Header from '../../Components/Header';
// import Footer from '../../Components/Footer';
import ProfilePic from '../../images/profile.jpeg'

const AboutMe = () => {
  return (
    <>
      <article id="aboutMe">
        <img id="profPic" src={ProfilePic} alt="me artistically draped around an overturned chair" />
        <section id="metails">

        </section>
        <section id="meLinks">

        </section>
      </article>
    </>
  )
};

export default AboutMe;