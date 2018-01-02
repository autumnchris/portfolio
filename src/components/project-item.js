import React from 'react';
import Framework from './framework';

const ProjectItem = ({ project }) => {

  const Frameworks = project.frameworks.map((framework, index) => {
    return <Framework key={index} framework={framework} />;
  });

  return (
      <div className="col-sm-6 col-md-4">
        <div className="well">
          <h3 className="text-center">{project.title}</h3>
          <div className="text-center">
            <span className={`${project.icon} icon`}></span>
          </div>
          <p>{project.description}</p>
          <h4>Frameworks</h4>
          <table className="table table-condensed">
            <tbody>{Frameworks}</tbody>
          </table>
        </div>
      </div>
  );
}

export default ProjectItem;
