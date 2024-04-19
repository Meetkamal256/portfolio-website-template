import React from "react";
import CV from "../../assets/cv.pdf";

const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} download>
        Download CV
      </a>
      <a href="#contact">Let's talk</a>
    </div>
  );
};

export default CTA;
