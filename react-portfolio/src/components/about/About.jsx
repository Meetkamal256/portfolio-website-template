import React from "react";
import "./about.css";
import ME from "../../assets/me-about.jpg";
import { FaAward, FaFolder } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";

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
            playing football, diving into a good book, or listening to
            audiobooks. I always strive to deliver my best work, paying careful
            attention to every detail. Collaboration is key for me, and I love
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
