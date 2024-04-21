import React from "react";
import "./experience.css";
import { HiCheckBadge } from "react-icons/hi2";

const Experience = () => {
  return (
    <section id="experience">
      <h5>Skills I have</h5>
      <h2>My experience</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <HiCheckBadge />
              <h4>HTML</h4>
              <small>Experienced</small>
            </article>
            <article className="experience__details">
              <HiCheckBadge />
              <h4>CSS</h4>
              <small>Intermediate</small>
            </article>
            <article className="experience__details">
              <HiCheckBadge />
              <h4>Javascript</h4>
              <small>Experienced</small>
            </article>
            <article className="experience__details">
              <HiCheckBadge />
              <h4>Tailwind css</h4>
              <small>Experienced</small>
            </article>
            <article className="experience__details">
              <HiCheckBadge />
              <h4>Bootstrap</h4>
              <small>Experienced</small>
            </article>
            <article className="experience__details">
              <HiCheckBadge />
              <h4>React js</h4>
              <small>Experienced</small>
            </article>
          </div>
        </div>

        <div className="experience__backend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <HiCheckBadge />
              <h4>Node js</h4>
              <small>Intermediate</small>
            </article>
            <article className="experience__details">
              <HiCheckBadge />
              <h4>MongoDB</h4>
              <small>Intermediate</small>
            </article>
            <article className="experience__details">
              <HiCheckBadge />
              <h4>PHP</h4>
              <small>Intermediate</small>
            </article>
            <article className="experience__details">
              <HiCheckBadge />
              <h4>MYSQL</h4>
              <small>Basic</small>
            </article>
            <article className="experience__details">
              <HiCheckBadge />
              <h4>Python</h4>
              <small>Experienced</small>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
