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
          <ul className="mediaList">
            {props.media.map((medium, index) => {
              return <li>{medium}</li>
            })}
          </ul>
          {props.repo && <a href={props.repo} target="_blank" rel="noreferrer">Repository</a>}
          {props.site && <a href={props.site} target="_blank" rel="noreferrer">Live Site</a>}
        </section>
      </article>
    </>
  )
};

export default Project;