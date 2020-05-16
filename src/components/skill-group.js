import React from 'react';
import Skill from './skill';

const SkillGroup = ({ skillGroup }) => {

  return (
    <div className="skill-group">
      <h4>{skillGroup.skillTypeName}</h4>
      <ul>{skillGroup.skillList.map((skill, index) => <Skill key={index} skill={skill} />)}</ul>
    </div>
  );
}

export default SkillGroup;
