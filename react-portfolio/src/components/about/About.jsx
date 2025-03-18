import React from "react";
import "./about.css";

const About = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About me</h2>
      <div className="container about__container">
        <div className="about__content">
          <p>
            Web Developer proficient in modern web technologies, including
            ReactJS, NextJS, TypeScript, and CSS modules. Skilled in
            transforming designs into responsive, user-friendly websites while
            optimizing performance and engagement through scalable, efficient
            solutions. Collaborative, detail-oriented, and focused on delivering
            top-tier user experiences and customer satisfaction.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
