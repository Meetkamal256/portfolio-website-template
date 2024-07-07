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
            Hey there! As a frontend developer, I'm dedicated to crafting
            exceptional web experiences. Outside of coding, you'll find me
            playing video games, football or listening to
            audio books, Collaboration is key for me, and I love
            working with teams to bring projects to life. Let's connect and
            create something amazing together!
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
