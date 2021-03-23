import React from 'react';
import './Project.scss';

// props:
// class -> handProject || appProject
// image -> import in parent
// info -> blurb about project
// site -> link to live app (only relevant for apps)
// repo -> link to repository (only relevant for apps)
// medium -> array containing languages or materials used

const Project = (props) => {
  return (
    <>
      <section className={props.class + ' projectCard'}>

      </section>
    </>
  )
};

export default Project;