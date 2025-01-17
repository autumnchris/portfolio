import React from 'react';

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <h2>Contact Me</h2>
      <div className="content">
        <h3>Email Me At...</h3>
        <div className="email"><span className="far fa-envelope fa-lg fa-fw" aria-hidden="true"></span> <address>
          <a href="mailto:autumncbullard@gmail.com" target="_self">autumncbullard@gmail.com</a>
        </address></div>
        <h3>Find Me On...</h3>
        <div className="social-links">
          <a className="social-link linkedin-profile" href="https://www.linkedin.com/in/autumncbullard" target="_blank"><span className="fab fa-linkedin fa-lg fa-fw" aria-hidden="true"></span> LinkedIn</a>
          <a className="social-link github-profile" href="https://github.com/autumnchris" target="_blank"><span className="fab fa-github fa-lg fa-fw" aria-hidden="true"></span> GitHub</a>
        </div>
      </div>
    </section>
  );
}

export default Contact;