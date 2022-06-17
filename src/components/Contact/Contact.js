import "./Contact.scss";
import React, { useEffect, useRef, useState } from "react";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters/AnimatedLetters";
import emailjs from "@emailjs/browser";
import Card from "./Card/Card";

const Contact = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const form = useRef();
  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3000);
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_9s3vd07", "template_bl467eg", form.current, "jrEi1U-MUg67Rj-yt").then(
      () => {
        alert("Message successfully sent!");
        window.location.reload(false);
      },
      () => {
        alert("Failed to send the message, please try again");
      }
    );
  };
  return (
    <>
      <div className="container contact_page">
        <div className="text_zone">
          <h1>
            <AnimatedLetters letterClass={letterClass} strArray={["C", "o", "n", "t", "a", "c", "t", " ", "M", "e"]} idx={15} />
          </h1>
          <p>자기소개 자기소개</p>
          <div className="contact_form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input placeholder="Name" type="text" name="name" required />
                </li>
                <li className="half">
                  <input placeholder="Email" type="email" name="email" required />
                </li>
                <li>
                  <input placeholder="Subject" type="text" name="subject" required />
                </li>
                <li>
                  <textarea placeholder="Message" name="message" required></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <Card />
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default Contact;
