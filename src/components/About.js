import React from 'react';
import avatar from '../assets/images/avatar.jpg';
import Skills from './Skills';

const About = () => {
  return (
    <section className="about" id="about">
      <h2>About the Developer</h2>
      <div className="content">
        <div className="col">
          <aside>
            <img src={avatar} className="avatar" alt="photo of Autumn Bullard" />
            <div className="button-group social-icons">
              <a href="https://www.linkedin.com/in/autumncbullard" target="_blank" className="button linkedin-icon" title="LinkedIn" aria-label="Autumn Bullard's LinkedIn profile">
                <span className="fa-brands fa-linkedin fa-3x fa-fw"></span>
              </a>
              <a href="https://github.com/autumnchris" target="_blank" className="button github-icon" title="GitHub" aria-label="Autumn Bullard's GitHub profile">
                <span className="fa-brands fa-github fa-3x fa-fw"></span>
              </a>
            </div>
          </aside>
        </div>
        <div className="col">
          <article>
            <p>Hi! My name’s Autumn. I’m a self-taught JavaScript developer from Jacksonville Beach, Florida. I mostly specialize in front-end development using React.js and vanilla JS.</p>
            <p>My journey into tech began through self-learning, where I discovered how much I enjoyed combining creativity with problem solving to build intuitive and accessible web applications. Being self-taught has also made me highly self-reliant and self-motivated. And my natural inclination towards organization has benefited my ability to write clean and efficient code.</p>
            <p>I'm always learning new technologies and improving my skills. And outside of tech, I enjoy reading, volunteering, and playing video games.</p>
          </article>
          <hr/>
          <Skills />
        </div>
      </div>
    </section>
  );
}

export default About;