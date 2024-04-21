import React from "react";
import "./portfolio.css";
import img1 from "../../assets/portfolio1.jpg";
import img2 from "../../assets/portfolio2.jpg";
import img3 from "../../assets/portfolio3.jpg";
import img4 from "../../assets/portfolio4.jpg";
import img5 from "../../assets/portfolio5.png";
import img6 from "../../assets/portfolio6.jpg";

const data = [
  {
    id: 1,
    image: img1,
    title: "cryptocurrency dashboard & financial visualization",
    github: "https://github.com",
    demo: "https://dribbble.com/shots/24017705-Anxious-and-Tired-lettering-t-shirt-print",
  },
  {
    id: 2,
    image: img2,
    title: "charts templates and Infographic in Figma",
    github: "https://github.com",
    demo: "https://dribbble.com/shots/24017705-Anxious-and-Tired-lettering-t-shirt-print",
  },
  {
    id: 3,
    image: img3,
    title: "Figma Dashboard UI kot for data design web apps",
    github: "https://github.com",
    demo: "https://dribbble.com/shots/24017705-Anxious-and-Tired-lettering-t-shirt-print",
  },
  {
    id: 4,
    image: img4,
    title: "Maintaining tasks and tracking progress",
    github: "https://github.com",
    demo: "https://dribbble.com/shots/24017705-Anxious-and-Tired-lettering-t-shirt-print",
  },
  {
    id: 5,
    image: img5,
    title: "cryptocurrency dashboard & financial visualization",
    github: "https://github.com",
    demo: "https://dribbble.com/shots/24017705-Anxious-and-Tired-lettering-t-shirt-print",
  },
  {
    id: 6,
    image: img6,
    title: "Figma Dashboard UI kot for data design web apps",
    github: "https://github.com",
    demo: "https://dribbble.com/shots/24017705-Anxious-and-Tired-lettering-t-shirt-print",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Works</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt="" />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn">
                  Github
                </a>
                <a href={demo} className="btn btn-primary" target="__blank">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
