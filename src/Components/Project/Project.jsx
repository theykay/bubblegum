import React, { useState, useEffect } from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import './Project.scss';
import Modal from '../../Components/Modal';

// props:
// image -> import in parent
// title -> name of project
// info -> blurb about project
// media -> array containing languages or materials used
// site -> link to live app (only relevant for apps)
// repo -> link to repository (only relevant for apps)

// Every project should include 
// the concepts and technologies used to build it

const Project = (props) => {
  const [modalRoot, setModalRoot] = useState();
  // const [show, setShow] = useState(false);

  useEffect(() => {
    setModalRoot(document.getElementById('modal-root'))
  }, [])

  const hideModal = () => {
    // setShow(false);
    // render(<></>, modalRoot);
    unmountComponentAtNode(modalRoot);
  }

  const showModal = () => {
    // setShow(true);
    window.innerWidth<768 && render(<Modal handleClose={hideModal} props={{...props}} />, modalRoot);
  }


  return (
    <>
      {/* <Modal handleClose={hideModal} props={props} /> */}
      <article className="projectCard" onClick={showModal}>
        <img className="cardImage" src={props.image} alt={props.title} />
        <section className='cardText'>
          <h3>{props.title}</h3>
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
        </section>
      </article>
    </>
  )
};

export default Project;