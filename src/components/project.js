import React from 'react';
import Framework from './Framework';

const Project = ({ project }) => {

  return (
    <div className="card">
      <h3>{project.title}</h3>
      <div className="project-icon">
        <span className={`${project.icon} fa-fw`} aria-hidden="true"></span>
      </div>
      <p>{project.description}</p>
      <hr/>
      <div className="project-links">{project.frameworks.map(framework => <Framework key={framework._id} framework={framework} numOfFrameworks={project.frameworks.length} />)}</div>
    </div>
  );
}

export default Project;
