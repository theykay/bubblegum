import React from 'react';
import './Modal.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';


const Modal = ({ handleClose, props }) => {
  return (
    <div className='modal'>

      <section className="modal-main">
        <FontAwesomeIcon className="modal-close" icon={faTimes} onClick={handleClose} />
        <header className="modal-header"><h3>{props.title}</h3></header>
        <section className="modal-content">
          <p>{props.info}</p>
          <ul className="modal-media-list">languages/tools:
            {props.media.map((medium, index) => {
              return <li key={medium}>{medium}</li>
            })}
          </ul>
          <div className="modal-links">
            {props.repo && <a className="modal-link" href={props.repo} target="_blank" rel="noreferrer">Repository</a>}
            {props.site && <a className="modal-link" href={props.site} target="_blank" rel="noreferrer">Live Site</a>}
          </div>
          {/* <button className="modal-close" onClick={handleClose}>close</button> */}
        </section>
      </section>
    </div>
  )
}

export default Modal;