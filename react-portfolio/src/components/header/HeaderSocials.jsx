import React from "react";
import { FaLinkedin, FaGithub, FaDribbble } from "react-icons/fa";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://linkedin.com" target="__blank">
        <FaLinkedin />
      </a>
      <a href="https://github.com" target="__blank">
        <FaGithub />
      </a>
      <a href="https://dribble.com" target="__blank">
        <FaDribbble />
      </a>
    </div>
  );
};

export default HeaderSocials;
