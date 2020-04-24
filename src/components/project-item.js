import React from 'react';
import Framework from './framework';

const ProjectItem = ({ project }) => {

  const Frameworks = project.frameworks.map((framework, index) => {
    return <Framework key={index} framework={framework} numOfFrameworks={project.frameworks.length} />;
  });

  return (
    <div className="card">
      <h3>{project.title}</h3>
      <div className="project-icon">
        <span className={`${project.icon} fa-fw`}></span>
      </div>
      <p>{project.description}</p>
      <hr/>
      <div className="project-links">{Frameworks}</div>
    </div>
  );
}

export default ProjectItem;
