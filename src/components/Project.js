import React from 'react';
import Framework from './Framework';

const Project = ({ project }) => {

  return (
    <div className="card">
      <h3 id={`proj-title-${project.id}`}>{project.title}</h3>
      <div className="project-icon">
        <span className={`${project.icon} fa-fw`} aria-hidden="true"></span>
      </div>
      <p>{project.description}</p>
      <hr/>
      <div className="project-links">{project.frameworks.map(framework => <Framework key={framework.id} framework={framework} numOfFrameworks={project.frameworks.length} project={project} />)}</div>
    </div>
  );
}

export default Project;
