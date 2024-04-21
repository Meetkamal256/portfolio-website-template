import React from "react";
import "./contact.css";
import { MdOutlineMail } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact">
      <h5>Get in touch</h5>
      <h2>Contact me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineMail />
            <h4>Email</h4>
            <h5>kamaluddeenmuhamad585@gmail.com</h5>
            <a href="mailto:kamaluddeenmuhamad585@gmail.com" target="__blank">
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <FaFacebook />
            <h4>Messenger</h4>
            <h5>Facebook</h5>
            <a href="https://m.me/kamal.muhammad.50552338" target="__blank">
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <FaWhatsapp />
            <h4>+2348164682518</h4>
            <h5>Whatsapp</h5>
            <a href="https://wa.me/2348164682518" target="_blank">
              Send a message
            </a>
          </article>
        </div>
        {/* END OF CONTACT OPTION */}
        <form action="">
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
