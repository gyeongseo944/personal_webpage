import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LogoG from "../../assets/images/h1_logo.png";
import AnimatedLetters from "../AnimatedLetters/AnimatedLetters";
import "./Home.scss";
import Logo from "./Logo/Logo";

const Home = () => {
  const [LetterClass, setLetterClass] = useState("text-animate");
  const nameArray = ["y", "e", "o", "n", "g", "s", "e", "o"];
  const jobArray = ["w", "e", "b", " ", "d", "e", "v", "e", "l", "o", "p", "e", "r", "."];

  // useEffect(() => {
  //   return setTimeout(() => {
  //     setLetterClass("text-animate-hover");
  //   }, 4000);
  // }, []); //// useEffect 의 return으로 함수를 보내면 안된대~

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 4000);
  }, []);

  return (
    <div>
      <div className="container home">
        <div className="text_zone">
          <h1>
            <span className={LetterClass}>H</span>
            <span className={`${LetterClass} _12`}>i,</span>
            <br />
            <span className={`${LetterClass} _13`}>I</span>
            <span className={`${LetterClass} _14`}>'m</span>
            <img src={LogoG} alt="G logo" />
            <AnimatedLetters letterClass={LetterClass} strArray={nameArray} idx={15} />
            <br />
            <AnimatedLetters letterClass={LetterClass} strArray={jobArray} idx={23} />
          </h1>
          <h2> Frontend Developer / Backend Developer </h2>
          <Link to="/contact" className="flatBtn">
            CONTACT ME
          </Link>
        </div>
        <Logo />
      </div>
    </div>
  );
};

export default Home;
