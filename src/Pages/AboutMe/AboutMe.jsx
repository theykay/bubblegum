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
      <section id="aboutMe">
        <section>
          <img id="profPic" src={ProfilePic} alt="me artistically draped around an overturned chair" />
          <h3 id="location"><FontAwesomeIcon icon={faMapMarkerAlt} /> Utah</h3>
        </section>
        <section>
          <article id="metails">
            <p>My background is in soft goods (making and designing), education in industrial and web design, and I'm interested in accessibility design.</p>
            <Link id="resumeLink" className="profLink" to={Resume} title="opens in new tab" target="_blank">resume</Link>
          </article>
          <section id="meLinks">
            <h3>Find me at <span id="username">theykay</span> on</h3>
            <Link id="githubLink" className="profLink" to="https://github.com/theykay" title=""><FontAwesomeIcon icon={faGithubSquare} /></Link>
            <Link id="linkedLink" className="profLink" to="https://www.linked.com/in/theykay"><FontAwesomeIcon icon={faLinkedin} /></Link>
            <Link id="discordLink" className="profLink" to="https://discord.gg/sKc5mWq"><FontAwesomeIcon icon={faDiscord} /></Link>
            <Link id="emailLink" className="profLink" to="mailto:murraykyleb@gmail.com"><FontAwesomeIcon icon={faEnvelopeSquare} /> murraykyleb@gmail.com</Link>
          </section>
        </section>
        <article id="plsContinue">
          {/* random stuff about me */}
        </article>
      </section>
    </>
  )
};

export default AboutMe;