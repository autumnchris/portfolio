import React from 'react';
import SkillGroup from './skill-group';

const Skills = ({ skills }) => {

  const SkillGroups = skills.map((skillGroup, index) => {
    return <SkillGroup key={index} skillGroup={skillGroup} />;
  });

  return (
    <div className="skills-container">{SkillGroups}</div>
  );
}

export default Skills;
