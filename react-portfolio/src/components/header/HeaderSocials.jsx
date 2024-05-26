import React from "react";
import { FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://github.com/Meetkamal256" target="__blank">
        <FaGithub />
      </a>
      <a
        href="linkedin.com/in/kamaluddeen-muhammad-981935165
"
        target="__blank"
      >
        <FaLinkedin />
      </a>
      
      <a href="https://wa.me/2348164682518" target="_blank">
        <FaWhatsapp />
      </a>
    </div>
  );
};

export default HeaderSocials;
