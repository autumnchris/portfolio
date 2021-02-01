import React from 'react';
import Skill from './skill';

const AboutContent = ({ bio, skills }) => {

  return (
    <React.Fragment>
      <div className="bio" dangerouslySetInnerHTML={{__html: bio}}></div>
      <hr/>
      <div className="skills">
        <h3>Skills</h3>
        <div className="skill-group">
          <h4>Technologies</h4>
          <ul>{skills.filter(skill => skill.skillType === 'Technologies').map(techSkill => <Skill key={techSkill._id} skill={techSkill} />)}</ul>
        </div>
        <div className="skill-group">
          <h4>Development</h4>
          <ul>{skills.filter(skill => skill.skillType === 'Development').map(devSkill => <Skill key={devSkill._id} skill={devSkill} />)}</ul>
        </div>
        <div className="skill-group">
          <h4>Soft Skills</h4>
          <ul>{skills.filter(skill => skill.skillType === 'Soft Skills').map(softSkill => <Skill key={softSkill._id} skill={softSkill} />)}</ul>
        </div>
      </div>
    </React.Fragment>
  );
}

export default AboutContent;
