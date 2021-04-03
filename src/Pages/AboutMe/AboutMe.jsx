import React from 'react';
import { Link } from 'react-router-dom';
import './AboutMe.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopeSquare, faMapMarkerAlt, faFile } from '@fortawesome/free-solid-svg-icons';
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faCode, faDatabase } from '@fortawesome/free-solid-svg-icons';
import { faHtml5, faCss3Alt, faSass, faJsSquare, faReact, faBootstrap, faNodeJs, faNpm, faGithub } from '@fortawesome/free-brands-svg-icons';
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
            <ul>
              <li>Experience: making/designing soft goods</li>
              <li>Education: industrial design / full stack web development</li>
              <li>Interested in: accessibility design</li>
            </ul>
            <p>Primary experience is making and designing soft goods, education in industrial and web design, and I'm interested in accessibility design.</p>
            <Link id="resumeLink" className="profLink" to={Resume} title="opens in new tab" target="_blank"><FontAwesomeIcon icon={faFile} /> resume</Link>
          </article>
        </section>
        <section id="plsContinue">
          {/* random stuff about me */}
          {/* <p>Bad at video games but still enjoy playing</p> */}
        </section>
        <section id="skills">
          <ul id="technologies"><FontAwesomeIcon icon={faCode} /> technologies
            <li className="techItem">
              <FontAwesomeIcon className="techIcon" icon={faHtml5} />HTML5
            </li>
            <li className="techItem">
              <FontAwesomeIcon className="techIcon" icon={faCss3Alt} />CSS3
            </li>
            <li className="techItem">
              <FontAwesomeIcon className="techIcon" icon={faSass} />SCSS
            </li>
            <li className="techItem">
              <FontAwesomeIcon className="techIcon" icon={faJsSquare} />JavaScript/jQuery
            </li>
            <li className="techItem">
              <FontAwesomeIcon className="techIcon" icon={faReact} />React.js
            </li>
            <li className="techItem">
              <FontAwesomeIcon className="techIcon" icon={faBootstrap} />Bootstrap
            </li>
            <li className="techItem">
              <FontAwesomeIcon className="techIcon" icon={faNodeJs} />Node.js /Express
            </li>
            <li className="techItem">
              <FontAwesomeIcon className="techIcon" icon={faNpm} />npm.js
            </li>
            <li className="techItem">
              <FontAwesomeIcon className="techIcon" icon={faGithub} />git/github
            </li>
          </ul>
        </section>
        <ul className="meLinks">
          <li className="meLinksItem">
            <Link id="resumeLink" className="profLink" to={Resume} title="opens in new tab" target="_blank"><FontAwesomeIcon id="fileIcon" className="icon" icon={faFile} />resume</Link>
          </li>
          <li className="meLinksItem">
            <a className="profLink" href="https://github.com/theykay" title="github/theykay" target="_blank" rel="noreferrer">
              <FontAwesomeIcon className="icon" icon={faGithubSquare} />
                github/theykay
              </a>
          </li>
          <li className="meLinksItem">
            <a className="profLink" href="https://www.linkedin.com/in/theykay" title="linked/theykay" target="_blank" rel="noreferrer">
              <FontAwesomeIcon className="icon" icon={faLinkedin} />
                linkedin/theykay
              </a>
          </li>
          <li className="meLinksItem">
            <a className="profLink" href="mailto:murraykyleb@gmail.com" title="gmail/murraykyleb" target="_blank" rel="noreferrer">
              <FontAwesomeIcon className="icon" icon={faEnvelopeSquare} />
                email
              </a>
          </li>
        </ul>
      </section>
    </>
  )
};

export default AboutMe;