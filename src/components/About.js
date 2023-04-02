import React from 'react';
import avatar from '../assets/images/avatar.jpg';
import Skills from './Skills';

const About = () => {
  return (
    <section className="about" id="about">
      <h2>About the Developer</h2>
      <div className="content">
        <div className="col">
          <img src={avatar} className="avatar" alt="photo of Autumn Bullard" />
          <div className="button-group social-icons">
            <a href="https://www.linkedin.com/in/autumncbullard" target="_blank" className="button linkedin-icon" title="LinkedIn" aria-label="LinkedIn profile">
              <span className="fab fa-linkedin fa-3x fa-fw"></span>
            </a>
            <a href="https://github.com/autumnchris" target="_blank" className="button github-icon" title="GitHub" aria-label="GitHub profile">
              <span className="fab fa-github fa-3x fa-fw"></span>
            </a>
          </div>
        </div>
        <div className="col">
          <p>Hello, my name’s Autumn. I’m a self-taught JavaScript developer residing in Jacksonville Beach, Florida who specializes on the front-end. Specifically, React.js and vanilla JS. I’m also practiced in building custom WordPress themes.</p>
          <p>While I’m a strong advocate for access to higher education, I was unable to afford to attend a university. Obviously, discouraged, not knowing what my future held for me, I retreated behind my laptop, continuing to learn on my own with my free time. That is where I eventually came across web development. I had taken a web development course in high school once, and I also liked solving puzzles so I decided to give it a try.  It was admittedly hard at first. I had never learned a programming language before so this way of thinking was new to me. But with time and persistence I grew to love it.</p>
          <p>As I learned to program, I noticed I began to improve upon my critical thinking and problem solving skills as well. And my natural desire for organization became useful for keeping both my code and my folder structures nice and tidy. I think what I really love about web development though is that it utilizes both my creative side as well as my logical puzzle solving side at the same time. And being that I’m self-taught, I have learned to become self-reliant on how to grow as a developer and how to get things done.</p>
          <p>I love to spend a lot of my spare time learning new technologies and improving on the stacks that I know. It’s essential that one desires to continue to learn in this industry after all. When I’m not doing that, I also love to spend my time reading, doing a little yoga, or swimming and bodyboarding at the beach if the weather’s just right.</p>
          <hr/>
          <Skills />
        </div>
      </div>
    </section>
  );
}

export default About;