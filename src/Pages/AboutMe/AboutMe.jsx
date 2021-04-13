import React from 'react';
import { Link } from 'react-router-dom';
import './AboutMe.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopeSquare, faMapMarkerAlt, faDownload } from '@fortawesome/free-solid-svg-icons';
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faCode, faDatabase, faExternalLinkAlt, faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { faHtml5, faCss3Alt, faSass, faJsSquare, faReact, faBootstrap, faNodeJs, faNpm, faGithub } from '@fortawesome/free-brands-svg-icons';
import ProfilePic from '../../images/profile.jpeg';
import Resume from '../../images/KayMurray.pdf';

const AboutMe = () => {
  return (
    <>
      <section id="aboutMe">
        <article id="graphic">
          <img id="profPic" src={ProfilePic} alt="me artistically draped around an overturned chair" />
          <h3 id="location"><FontAwesomeIcon icon={faMapMarkerAlt} /> Utah</h3>
        </article>
        <article id="metails">
          {/* A bio that demonstrates experience in and passion for your desired role */}
          {/* a ‘bio’’ section that discusses your background and how it relates to the role you are currently going for */}
          {/* Keep in mind in your bio section, we want to include 5 skills and technologies as a visual impact */}
          <p className="introP">I'm Kay, a web developer working to make accessible applications. I have a BFA in Industrial Design, and a Full Stack Web Development certificate. I'm excited about continuing to learn and implement principles of accessibility and universal design to build applications with a more diverse range of users in mind. Mainly I'm interested in making things, using anything from code to textiles</p>
          {/* <p className="introP">web developer utilizing a background in industrial design to make more accessible applications</p>
          <p className="introP"><FontAwesomeIcon icon={faCertificate} /> Full Stack Web Development, University of Utah</p>
          <p className="introP">Working to make products and experiences comfortable and easy to use, involving the end user as much as possible in the design process</p>
          <p className="introP">Excited about continuing to learn and implement principles of accessibility and universal design to build applications with a more diverse range of users in mind</p>
          <p className="introP">Motivated to learn new technologies and become better acquainted with familiar ones</p> */}
          <p id="experience"></p>
        </article>

        <section id="plsContinue">
          {/* random stuff about me */}
          {/* <p>Bad at video games but still enjoy playing</p> */}
        </section>
        <section id="skills">
          <h3 id="skillsHeader"><FontAwesomeIcon icon={faAngleLeft} /><FontAwesomeIcon icon={faAngleRight} /> Skills and Techs <FontAwesomeIcon icon={faCode} /></h3>
          <ul id="technologies">
            <li className="techItem">
              <FontAwesomeIcon className="techIcon" icon={faHtml5} />
              <p>HTML5</p>
            </li>
            <li className="techItem">
              <FontAwesomeIcon className="techIcon" icon={faCss3Alt} />
              <p>CSS3</p>
            </li>
            <li className="techItem">
              <FontAwesomeIcon className="techIcon" icon={faSass} />
              <p>SCSS</p>
            </li>
            <li className="techItem">
              <FontAwesomeIcon className="techIcon" icon={faJsSquare} />
              <p>JavaScript/jQuery</p>
            </li>
            <li className="techItem">
              <FontAwesomeIcon className="techIcon" icon={faNodeJs} />
              <p>Node.js/Express</p>
            </li>
            <li className="techItem">
              <FontAwesomeIcon className="techIcon" icon={faNpm} />
              <p>npm.js</p>
            </li>
            <li className="techItem">
              <FontAwesomeIcon className="techIcon" icon={faReact} />
              <p>React.js</p>
            </li>
            <li className="techItem">
              <FontAwesomeIcon className="techIcon" icon={faBootstrap} />
              <p>Bootstrap</p>
            </li>
            <li className="techItem">
              <FontAwesomeIcon className="techIcon" icon={faGithub} />
              <p>git/github</p>
            </li>
            <li className="techItem">
              <FontAwesomeIcon className="techIcon" icon={faDatabase} />
              <p>SQL, MongoDB</p>
            </li>
          </ul>
        </section>
        <section id="whereFind">
          <h3 id="linkHead"><FontAwesomeIcon icon={faExternalLinkAlt} /> Links</h3>
          <ul className="meLinks">
            <li className="meLinksItem">
              <Link className="profLink" to={Resume} title="opens in new tab" target="_blank"><FontAwesomeIcon id="download" className="icon" icon={faDownload} />resume</Link>
            </li>
            <li className="meLinksItem">
              <a className="profLink" href="mailto:murraykyleb@gmail.com" title="gmail/murraykyleb" target="_blank" rel="noreferrer">
                <FontAwesomeIcon className="icon" icon={faEnvelopeSquare} />
                email
              </a>
            </li>
            <li className="meLinksItem">
              <a className="profLink" href="https://github.com/theykay" title="github/theykay" target="_blank" rel="noreferrer">
                <FontAwesomeIcon className="icon" icon={faGithubSquare} />
                github
              </a>
            </li>
            <li className="meLinksItem">
              <a className="profLink" href="https://www.linkedin.com/in/theykay" title="linked/theykay" target="_blank" rel="noreferrer">
                <FontAwesomeIcon className="icon" icon={faLinkedin} />
                linkedin
              </a>
            </li>
          </ul>
        </section>
      </section>
    </>
  )
};

export default AboutMe;