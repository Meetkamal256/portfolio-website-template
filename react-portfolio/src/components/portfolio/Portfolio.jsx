import React from "react";
import "./portfolio.css";

import img1 from "../../assets/fithub4.png";
import img2 from "../../assets/smarthome4.png";
import img3 from "../../assets/clipboard4.png";
import img4 from "../../assets/backroads-website-1.png";
import img5 from "../../assets/bookmark-website.png";
import img6 from "../../assets/fylo-website.png";
import img7 from "../../assets/travelia-screenshot.jpg";
import img8 from "../../assets/admin-dashboard.png"
import img9 from "../../assets/landingPage-3.png"

const data = [
  {
    id: 1,
    image: img9,
    title: "Grow Kinesis Landing Page",
    github: "https://gitlab.com/grow-kinesis1/kinesis",
    demo: "https://growkinesis.com/",
  },
  {
    id: 2,
    image: img8,
    title: "GrowKinesis SuperAdmin Dashboard",
    github: "",
    demo: "https://grow-kinesis.vercel.app/dashboard",
  },

  {
    id: 3,
    image: img2,
    title: "Responsive Smart Home landing page",
    github: "https://github.com/Meetkamal256/smartHome-websiteV2",
    demo: "https://smarthome-website-react.vercel.app/",
  },
  {
    id: 4,
    image: img1,
    title: "Responsive Fitness Center landing page",
    github: "https://github.com/Meetkamal256/Responsive-Fitness-website",
    demo: "https://responsive-fitness-website-seven.vercel.app/",
  },
  
  {
    id: 5,
    image: img7,
    title: "Responsive Travel Website UI",
    github: "https://github.com/Meetkamal256/travelia-website-react-typescript",
    demo: "https://travelia-website-react-typescript.vercel.app/",
  },
  
  {
    id: 6,
    image: img4,
    title: "Backroads-website",
    github: "https://github.com/Meetkamal256/Backroads-websiteV2",
    demo: "https://backroads-website-v2-9z8z.vercel.app/#",
  },
  {
    id: 7,
    image: img3,
    title: "clipboard-website",
    github: "https://github.com/Meetkamal256/clipboard-website",
    demo: "https://clipboard-website-omega.vercel.app/",
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
                <a href={github} className="btn" target="__blank">
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
