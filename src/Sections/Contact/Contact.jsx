import React from 'react';
import './Contact.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopeSquare, faDownload } from '@fortawesome/free-solid-svg-icons';
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import Resume from '../../images/KayMurray.pdf';

const Contact = () => {
  return (
    <section id="contact" className="glass-card">
      <header className="glass-card-head"><h2 id="link-head"><FontAwesomeIcon id="link-icon" icon={faExternalLinkAlt} /> Links</h2></header>
        <ul className="me-links">
          <li className="me-links-item">
            <a className="prof-link" href={Resume} title="opens in new tab" target="_blank" rel="noreferrer">
              <FontAwesomeIcon id="download" className="icon" icon={faDownload} />
              resume
            </a>
          </li>
          <li className="me-links-item">
            <a className="prof-link" href="mailto:murraykyleb@gmail.com" title="gmail/murraykyleb" target="_blank" rel="noreferrer">
              <FontAwesomeIcon className="icon" icon={faEnvelopeSquare} />
              email
            </a>
          </li>
          <li className="me-links-item">
            <a className="prof-link" href="https://github.com/theykay" title="github/theykay" target="_blank" rel="noreferrer">
              <FontAwesomeIcon className="icon" icon={faGithubSquare} />
              github
            </a>
          </li>
          <li className="me-links-item">
            <a className="prof-link" href="https://www.linkedin.com/in/theykay" title="linked/theykay" target="_blank" rel="noreferrer">
              <FontAwesomeIcon className="icon" icon={faLinkedin} />
              linkedin
            </a>
          </li>
        </ul>
    </section>
  )
}

export default Contact;