import React from 'react';

const Framework = ({ framework, numOfFrameworks, project }) => {

  return (
    <div className="framework">
      <div className="project-link source-code"><span className="fa-solid fa-code fa-fw project-link-icon" aria-hidden="true"></span> <a href={framework.sourceCode} target="_blank" id={`proj-link-source-code-${project.id}-${framework.id}`} aria-labelledby={`proj-title-${project.id} proj-link-source-code-${project.id}-${framework.id}` }>source code{numOfFrameworks > 1 ? ` (${framework.name} version)` : ''}</a></div>
      <div className="project-link demo"><span className="fa-solid fa-desktop fa-fw project-link-icon" aria-hidden="true"></span> <a href={framework.demo} target="_blank" id={`proj-link-demo-${project.id}-${framework.id}`} aria-labelledby={`proj-title-${project.id} proj-link-demo-${project.id}-${framework.id}`}>demo{numOfFrameworks > 1 ? ` (${framework.name} version)` : ''}</a></div>
    </div>
  );
}

export default Framework;
