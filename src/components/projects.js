import React from 'react';
import ProjectItem from './project-item';

const Projects = ({ projects }) => {

  const ProjectItems = projects.map((project, index) => {
    return <ProjectItem key={index} project={project} />;
  });

  return (
    <div className="row center-block">{ProjectItems}</div>
  );
}

export default Projects;
