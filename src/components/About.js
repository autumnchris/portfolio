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
            <p>Hello, my name’s Autumn. I’m a self-taught JavaScript developer from Jacksonville Beach, Florida. I specialize in the front-end. Specifically, React.js and vanilla JS.</p>
            <p>While I’m a strong advocate for access to higher education, I was unable to attend a university. Obviously discouraged, not knowing what my future held for me, I retreated behind my laptop, continuing to learn on my own with my free time. That is where I eventually came across web development. I once had taken a web development course in high school and I also liked solving puzzles, so I decided to give it a try. It was admittedly hard at first. I had never learned a programming language before so this was a way of thinking that was new to me. But with time and persistence, I grew to love it.</p>
            <p>As I learned to program, I noticed I began to improve upon my critical thinking and problem solving skills as well. And my natural desire for organization became useful for keeping both my code and my folder structures nice and tidy. I think what I really love about web development though is that it utilizes both my creative side as well as my analytical side at the same time. And being that I’m self-taught, I have learned to become self-reliant on how to grow as a developer and how to get things done.</p>
            <p>I love to spend a lot of my spare time learning new technologies and improving on the stacks that I know. It’s essential that one desires to continue to learn in this industry after all. When I’m not doing that, I also love to spend my time reading, volunteering, and playing video games.</p>
          </article>
          <hr/>
          <Skills />
        </div>
      </div>
    </section>
  );
}

export default About;