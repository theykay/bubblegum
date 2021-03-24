import React from 'react';
import './Project.scss';

// props:
// image -> import in parent
// title -> name of project
// info -> blurb about project
// media -> array containing languages or materials used
// site -> link to live app (only relevant for apps)
// repo -> link to repository (only relevant for apps)

const Project = (props) => {
  return (
    <>
      <article className="projectCard">
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