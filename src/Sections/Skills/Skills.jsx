import React from 'react';
import './Skills.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import { faHtml5, faCss3Alt, faSass, faJsSquare, faReact, faBootstrap, faNodeJs, faNpm, faGithub } from '@fortawesome/free-brands-svg-icons';

const Skills = () => {
  return (
    <section id="skills-card" className="glass-card">
      <div id="skills"></div>
      <header className="glass-card-head"><h2>skills</h2></header>
      <article className="glass-card-content">
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
            <p>Git/GitHub</p>
          </li>
          <li className="techItem">
            <FontAwesomeIcon className="techIcon" icon={faDatabase} />
            <p>SQL,MongoDB</p>
          </li>
        </ul>
      </article>
    </section>
  )
}

export default Skills;