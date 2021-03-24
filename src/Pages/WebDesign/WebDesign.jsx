import React from 'react';
import './WebDesign.scss';
import Project from '../../Components/Project';
import Colab from '../../images/projects/CoLab.png';

const WebDesign = () => {
  const webProjects = [
    {
      image: Colab,
      title: "CoLab",
      info: "The brand new way to connect like-minded individuals who are looking to collaborate with others in their profession. The application currently focuses on musicians, but could be expanded to encompass professions such as filmmaking, photography, and programming.",
      media: ['ReactJS', 'Express.js', 'Node.js', 'MongoDB'],
      site: 'https://afternoon-eyrie-78094.herokuapp.com/',
      repo: 'https://github.com/Rxjas/CoLab',
    },
    
  ];

  return (
    <>
      {/* <header>
        <h3>Web Apps</h3>
      </header> */}
      <section>
        {webProjects.map((project, index) => {
          return (
            <Project 
              key={project.title}
              image={project.image}
              title={project.title}
              info={project.info}
              media={project.media}
              site={project.site}
              repo={project.repo}
            />
          )
        })}
      </section>
      {/* <Header />
      <Footer /> */}
    </>
  )
}

export default WebDesign;