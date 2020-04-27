import React from 'react';
import Skill from './skill';

const SkillGroup = ({ skillGroup }) => {

  const SkillList = skillGroup.skillList.map((skill, index) => {
    return <Skill key={index} skill={skill} />;
  });

  return (
    <div className="skill-group">
      <h4>{skillGroup.skillTypeName}</h4>
      <ul>{SkillList}</ul>
    </div>
  );
}

export default SkillGroup;
