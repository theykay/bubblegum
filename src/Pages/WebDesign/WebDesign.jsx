import React from 'react';
import './WebDesign.scss';
import Project from '../../Components/Project';
import Colab from '../../images/projects/CoLab.png';
import AmongUs from '../../images/projects/amongUs.png';
import bookVMovie from '../../images/projects/bookVsMovie.png';
import scheduler from '../../images/projects/scheduler.gif';
import weather from '../../images/projects/weather.png';

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
    {
      image: AmongUs,
      title: "The Smartest Among Us",
      info: "Web app to play quizzes. Play randomly-generated quizzes, play quizzes with global score leader-boards, signup and login to create your own quizzes to share with friends.",
      media: ["SQL", "sequelize", "Handlebars"],
      site: "https://the-smartest-amoung-us.herokuapp.com/",
      repo: "https://github.com/Diegopie/The-Smartest-Among-Us"
    },
    {
      image: bookVMovie,
      title: "Book vs Movie",
      info: "Compare ratings between a book and the movie based on it",
      media: ["goodreads API", "omdb API"],
      site: "https://uofu-project-1.github.io/Book-vs-Movie/",
      repo:"https://github.com/UofU-Project-1/Book-vs-Movie"
    },
    {
      image: scheduler,
      title: "Scheduler",
      info: "Generates a schedule that displays hour blocks based on user-defined start and end times. User can submit text in each hour slot that persists throughout the day. Entries only persist through end of day",
      media: ["Bootstrap", "jQuery"],
      site: "https://theykay.github.io/scheduler/",
      repo: "https://github.com/theykay/scheduler"
    },
    {
      image: weather,
      title: "Weather Forecast",
      info: "Weather app that shows current weather, 5-day forecast and saves most recent searches for easy access",
      media: ["Bootstrap", "ajax", "jQuery"],
      site: "https://theykay.github.io/weather-dashboard",
      repo: "https://github.com/theykay/weather-dashboard"
    },
  ];

  return (
    <>
      {/* <header>
        <h3>Web Apps</h3>
      </header> */}
      <section id="webProjects">
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