import React from "react";
import "./portfolio.css";
import img1 from "../../assets/portfolio1.jpg";
import img2 from "../../assets/portfolio2.jpg";
import img3 from "../../assets/portfolio3.jpg";
import img4 from "../../assets/portfolio4.jpg";
import img5 from "../../assets/portfolio5.png";
import img6 from "../../assets/portfolio6.jpg";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Works</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={img1} alt="" />
            <h3>This is a portfolio project item</h3>
            <a href="https://github/" className="btn">
              Github
            </a>
            <a
              href="https://dribbble.com/shots/24017705-Anxious-and-Tired-lettering-t-shirt-print"
              className="btn btn-primary"
              target="__blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={img1} alt="" />
            <h3>This is a portfolio project item</h3>
            <a href="https://github/" className="btn">
              Github
            </a>
            <a
              href="https://dribbble.com/shots/24017705-Anxious-and-Tired-lettering-t-shirt-print"
              className="btn btn-primary"
              target="__blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        
       <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={img1} alt="" />
            <h3>This is a portfolio project item</h3>
            <a href="https://github/" className="btn">
              Github
            </a>
            <a
              href="https://dribbble.com/shots/24017705-Anxious-and-Tired-lettering-t-shirt-print"
              className="btn  btn-primary"
              target="__blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={img1} alt="" />
            <h3>This is a portfolio project item</h3>
            <a href="https://github/" className="btn">
              Github
            </a>
            <a
              href="https://dribbble.com/shots/24017705-Anxious-and-Tired-lettering-t-shirt-print"
              className="btn  btn-primary"
              target="__blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={img1} alt="" />
            <h3>This is a portfolio project item</h3>
            <a href="https://github/" className="btn">
              Github
            </a>
            <a
              href="https://dribbble.com/shots/24017705-Anxious-and-Tired-lettering-t-shirt-print"
              className="btn btn-primary"
              target="__blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={img1} alt="" />
            <h3>This is a portfolio project item</h3>
            <a href="https://github/" className="btn">
              Github
            </a>
            <a
              href="https://dribbble.com/shots/24017705-Anxious-and-Tired-lettering-t-shirt-print"
              className="btn btn-primary"
              target="__blank"
            >
              Live Demo
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
