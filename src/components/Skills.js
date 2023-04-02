import React from 'react';
import Skill from './Skill';
import skills from '../data/skills';

const Skills = () => {
  return (
    <div className="skills">
      <h3>Skills</h3>
      <div className="skill-group">
        <h4>Technologies</h4>
        <ul>{skills.filter(skill => skill.type === 'Technologies').map(techSkill => <Skill key={techSkill.id} skill={techSkill} />)}</ul>
      </div>
      <div className="skill-group">
        <h4>Development</h4>
        <ul>{skills.filter(skill => skill.type === 'Development').map(devSkill => <Skill key={devSkill.id} skill={devSkill} />)}</ul>
      </div>
      <div className="skill-group">
        <h4>Soft Skills</h4>
        <ul>{skills.filter(skill => skill.type === 'Soft Skills').map(softSkill => <Skill key={softSkill.id} skill={softSkill} />)}</ul>
      </div>
    </div>
  );
}

export default Skills;