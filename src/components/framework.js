import React from 'react';

const Framework = ({ framework, numOfFrameworks }) => {

  return (
    <div className="framework">
      <div className="project-link source-code"><span className="fas fa-code fa-fw"></span> <a href={framework.sourceCode} target="_blank">source code{numOfFrameworks > 1 ? ` (${framework.name} version)` : ''}</a></div>
      <div className="project-link demo"><span className="fas fa-desktop fa-fw"></span> <a href={framework.demo} target="_blank">demo{numOfFrameworks > 1 ? ` (${framework.name} version)` : ''}</a></div>
    </div>
  );
}

export default Framework;
