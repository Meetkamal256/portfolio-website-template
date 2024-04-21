import React from "react";
import "./contact.css";
import { MdOutlineMail } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";
import { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_2ogmm1b",
        "template_josz0cx",
        form.current,
        "POu4bDbuzeJysOrsS"
      )
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get in touch</h5>
      <h2>Contact me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineMail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>meetkamal256@gmail.com</h5>
            <a href="mailto:kamaluddeenmuhamad585@gmail.com" target="__blank">
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <FaFacebook className="contact__option-icon" />
            <h4>Messenger</h4>
            <h5>Facebook</h5>
            <a href="https://m.me/kamal.muhammad.50552338" target="__blank">
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <FaWhatsapp className="contact__option-icon" />
            <h4>+2348164682518</h4>
            <h5>Whatsapp</h5>
            <a href="https://wa.me/2348164682518" target="_blank">
              Send a message
            </a>
          </article>
        </div>
        {/* END OF CONTACT OPTION */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="subject" placeholder="Subject" required />
          <input
            type="text"
            name="to_name"
            placeholder="Your Full Name"
            required
          />
          <input
            type="email"
            name="from_name"
            placeholder="Your email"
            required
          />
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
