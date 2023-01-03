import React from 'react';
import ErrorMessage from './ErrorMessage';
import Skill from './Skill';

const AboutContent = ({ aboutContent }) => {

  if (!aboutContent) {
    return <ErrorMessage errorMessage="Unable to load About content for Autumn Bullard at this time." />;
  }
  else {
    return (
      <React.Fragment>
        <div className="bio" dangerouslySetInnerHTML={{__html: aboutContent.bio}}></div>
        <hr/>
        <div className="skills">
          <h3>Skills</h3>
          <div className="skill-group">
            <h4>Technologies</h4>
            <ul>{aboutContent.skills.filter(skill => skill.skillType === 'Technologies').sort((a, b) => a.listOrder - b.listOrder).map(techSkill => <Skill key={techSkill._id} skill={techSkill} />)}</ul>
          </div>
          <div className="skill-group">
            <h4>Development</h4>
            <ul>{aboutContent.skills.filter(skill => skill.skillType === 'Development').sort((a, b) => a.listOrder - b.listOrder).map(devSkill => <Skill key={devSkill._id} skill={devSkill} />)}</ul>
          </div>
          <div className="skill-group">
            <h4>Soft Skills</h4>
            <ul>{aboutContent.skills.filter(skill => skill.skillType === 'Soft Skills').sort((a, b) => a.listOrder - b.listOrder).map(softSkill => <Skill key={softSkill._id} skill={softSkill} />)}</ul>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default AboutContent;
