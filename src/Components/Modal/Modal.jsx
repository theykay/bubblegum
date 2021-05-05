import React from 'react';
import './Modal.scss';

const Modal = ({ handleClose, props }) => {
  return (
    <div className='modal'>
      <section className="modal-main">
        <h3 className="modal-header">{props.title}</h3>
        <p>{props.info}</p>
        <ul className="mediaList">languages/tools:
        {props.media.map((medium, index) => {
          return <li key={medium}>{medium}</li>
        })}
        </ul>
        <div className="cardLinks">
          {props.repo && <a className="cardLink" href={props.repo} target="_blank" rel="noreferrer">Repository</a>}
          {props.site && <a className="cardLink" href={props.site} target="_blank" rel="noreferrer">Live Site</a>}
        </div>
        <button onClick={handleClose}>close</button>
      </section>
    </div>
  )
}

export default Modal;