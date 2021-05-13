import React from 'react';
import './Projects.scss';
import Project from '../../Components/Project';
import Colab from '../../images/projects/CoLab.png';
import AmongUs from '../../images/projects/amongUs.png';
import bookVMovie from '../../images/projects/bookVsMovie.png';
import scheduler from '../../images/projects/scheduler.gif';
import weather from '../../images/projects/weather.png';

const Projects = () => {
  const webProjects = [
    {
      image: Colab,
      title: "CoLab",
      info: "Way to connect individuals looking to collaborate with others in their profession. Currently focused on musicians.",
      media: ['ReactJS', 'Express.js', 'Node.js', 'MongoDB'],
      site: 'https://protected-chamber-73286.herokuapp.com/',
      repo: 'https://github.com/theykay/CoLab',
    },
    {
      image: AmongUs,
      title: "The Smartest Among Us",
      info: "Web app to play quizzes. Play randomly-generated quizzes, play quizzes with global score leader-boards, signup and login to create your own quizzes to share with friends.",
      media: ["SQL", "sequelize", "Handlebars"],
      site: "https://glacial-inlet-88838.herokuapp.com/",
      repo: "https://github.com/theykay/The-Smartest-Among-Us"
    },
    {
      image: bookVMovie,
      title: "Book vs Movie",
      info: "Compare ratings between a book and the movie based on it",
      media: ["goodreads API", "omdb API"],
      site: "https://theykay.github.io/Book-vs-Movie/",
      repo:"https://github.com/theykay/Book-vs-Movie"
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
    <section id="projects-card" className="glass-card">
      <div id="projects"></div>
      <header className="glass-card-head"><h2>projects</h2></header>
      <section id="web-projects">
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
    </section>
  )
}

export default Projects;