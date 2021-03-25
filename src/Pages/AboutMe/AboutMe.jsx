import React from 'react';
import { Link } from 'react-router-dom';
import './AboutMe.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopeSquare, faMapMarkerAlt, faFile } from '@fortawesome/free-solid-svg-icons';
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';
// import { faDiscord } from '@fortawesome/free-brands-svg-icons';
import ProfilePic from '../../images/profile.jpeg';
import Resume from '../../images/KayMurray.pdf';

const AboutMe = () => {
  return (
    <>
      <section id="aboutMe">
        <section>
          <img id="profPic" src={ProfilePic} alt="me artistically draped around an overturned chair" />
          <h3 id="location"><FontAwesomeIcon icon={faMapMarkerAlt} /> Utah</h3>
          <ul className="meLinks">
            <li>
              <a className="profLink" href="https://github.com/theykay" title="github/theykay" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faGithubSquare} />
              </a>
            </li>
            <li>
              <a className="profLink" href="https://www.linkedin.com/in/theykay" title="linked/theykay" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </li>
            {/* <li>
              <a className="profLink" href="https://discord.gg/sKc5mWq" title="discord/theykay" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faDiscord} />
              </a>
            </li> */}
            <li>
              <a className="profLink" href="mailto:murraykyleb@gmail.com" title="gmail/murraykyleb" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faEnvelopeSquare} />
              </a>
            </li>
          </ul>
        </section>
        <section>
          <article id="metails">
            <ul>
              <li>Experience: making/designing soft goods</li>
              <li>Education: industrial design / full stack web development</li>
              <li>Interested in: accessibility design</li>
            </ul>
            <p>Primary experience is making and designing soft goods, education in industrial and web design, and I'm interested in accessibility design.</p>
            <Link id="resumeLink" className="profLink" to={Resume} title="opens in new tab" target="_blank"><FontAwesomeIcon icon={faFile} /> resume</Link>
          </article>
        </section>
        <article id="plsContinue">
          {/* random stuff about me */}
          {/* <p>Bad at video games but still enjoy playing</p> */}
        </article>
      </section>
    </>
  )
};

export default AboutMe;