import React from 'react';
import { Link } from 'react-router-dom';
import './Project.scss';

// props:
// image -> import in parent
// title -> name of project
// info -> blurb about project
// site -> link to live app (only relevant for apps)
// repo -> link to repository (only relevant for apps)
// media -> array containing languages or materials used

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
          {props.repo && <Link to={props.repo}>Repository</Link>}
          {props.site && <Link to={props.site}>Live Site</Link>}
        </section>
      </article>
    </>
  )
};

export default Project;