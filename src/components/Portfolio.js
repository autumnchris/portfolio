import React from 'react';
import Project from './Project';
import projects from '../data/projects';

const Portfolio = () => {
  return (
    <section className="portfolio" id="portfolio">
      <h2>Some of My Work</h2>
      <div className="content">
        <div className="projects">{projects.sort((a, b) => b.startDate - a.startDate).map(project => <Project key={project.id} project={project} />)}</div>
      </div>
    </section>
  );
}

export default Portfolio;