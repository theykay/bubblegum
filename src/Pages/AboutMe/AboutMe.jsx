import React from 'react';
import { Link } from 'react-router-dom';
import './AboutMe.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopeSquare, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faGithubSquare, faLinkedin, faDiscord } from '@fortawesome/free-brands-svg-icons';
import ProfilePic from '../../images/profile.jpeg';
import Resume from '../../images/KayMurray.pdf';

const AboutMe = () => {
  return (
    <>
      <article id="aboutMe">
        <img id="profPic" src={ProfilePic} alt="me artistically draped around an overturned chair" />
        <section id="metails">
          <h3><FontAwesomeIcon icon={faMapMarkerAlt} />Utah</h3>
          <p>Background as a textile goods maker and designer, education in industrial and web design, interested in accessibility design.</p>
          <Link id="resumeLink" className="profLink" to={Resume} target="_blank">resume</Link>
        </section>
        <section id="meLinks">
          <Link id="githubLink" className="profLink" to="https://github.com/theykay"><FontAwesomeIcon icon={faGithubSquare} />theykay</Link>
          <Link id="emailLink" className="profLink" to="mailto:murraykyleb@gmail.com"><FontAwesomeIcon icon={faEnvelopeSquare} />murraykyleb@gmail.com</Link>
          <Link id="linkedLink" className="profLink" to="https://www.linked.com/in/theykay"><FontAwesomeIcon icon={faLinkedin} />theykay</Link>
          <Link id="discordLink" className="profLink" to="https://discord.gg/sKc5mWq"><FontAwesomeIcon icon={faDiscord} />theykay</Link>
        </section>
      </article>
    </>
  )
};

export default AboutMe;