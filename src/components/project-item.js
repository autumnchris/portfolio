import React from 'react';
import Framework from './framework';

const ProjectItem = ({ project }) => {

  const Frameworks = project.frameworks.map((framework, index) => {
    return <Framework key={index} framework={framework} />;
  });

  return (
    <div className="card">
      <h3>{project.title}</h3>
      <div className="icon">
        <span className={project.icon}></span>
      </div>
      <p>{project.description}</p>
      <h4>Frameworks</h4>
      <table>
        <tbody>{Frameworks}</tbody>
      </table>
    </div>
  );
}

export default ProjectItem;
