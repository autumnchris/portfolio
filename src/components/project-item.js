import React from 'react';

const ProjectItem = ({ project }) => {

  return (
      <div className="col-sm-6 col-md-4">
        <div className="well">
          <h3 className="text-center">{project.title}</h3>
          <div className="text-center">
            <span className={`${project.icon} icon`}></span>
          </div>
          <p>{project.description}</p>
        </div>
      </div>
  );
}

export default ProjectItem;
