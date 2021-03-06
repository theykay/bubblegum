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
    setModalRoot(document.getElementById('modal-root'));
    // const hideables = document.getElementsByClassName('hideable');
    // for (let item of hideables) {
    //   if (window.innerWidth>575) {
    //     item.classList.toggle('reveal');
    //   }
    // }
  }, [])

  const hideModal = () => {
    // setShow(false);
    // render(<></>, modalRoot);
    unmountComponentAtNode(modalRoot);
  }

  const showModal = () => {
    // setShow(true);
    window.innerWidth < 576 && render(<Modal handleClose={hideModal} props={{ ...props }} />, modalRoot);
  }


  return (
    <>
      {/* <Modal handleClose={hideModal} props={props} /> */}
      <article className="project-card" onClick={showModal}>
        <header className="project-card-header hideable">
          <h3>{props.title}</h3>
        </header>
        <div className="card-image-div">
          <img className="card-image" src={props.image} alt={props.title} />
        </div>
        <section className='card-text hideable'>
          <p>{props.info}</p>
          <ul className="card-media-list">languages/tools:
            {props.media.map((medium, index) => {
            return <li key={medium}>{medium}</li>
          })}
          </ul>
          <section className="card-links">
            {props.repo && <a className="card-link" href={props.repo} target="_blank" rel="noreferrer">Repository</a>}
            {props.site && <a className="card-link" href={props.site} target="_blank" rel="noreferrer">Live Site</a>}
          </section>
        </section>
      </article>
    </>
  )
};

export default Project;