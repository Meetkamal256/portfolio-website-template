import React from "react";
import "./nav.css";
import { FaHome, FaRegUser } from "react-icons/fa";
import { IoBookOutline } from "react-icons/io5";
import { RiServiceLine } from "react-icons/ri";
import { MdMessage } from "react-icons/md";

const Nav = () => {
  return (
    <nav>
      <a href="/">
        <FaHome />
      </a>
      <a href="#about">
        <FaRegUser />
      </a>
      <a href="#experience">
        <IoBookOutline />
      </a>
      <a href="#services">
        <RiServiceLine />
      </a>
      <a href="#contact">
        <MdMessage />
      </a>
    </nav>
  );
};

export default Nav;
