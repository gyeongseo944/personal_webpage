import { useEffect, useState } from "react";
import { faCss3, faGitAlt, faHtml5, faJsSquare, faNode, faReact } from "@fortawesome/free-brands-svg-icons";
import Loader from "react-loaders";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./About.scss";
import AnimatedLetters from "../AnimatedLetters/AnimatedLetters";
import Background from "./background/Background";

const About = () => {
  const [letterClass, setLetterClass] = useState("text-animate");

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3000);
  }, []);

  return (
    <>
      <div className="container about_page">
        <div className="text_zone">
          <h1>
            <AnimatedLetters letterClass={letterClass} strArray={["A", "b", "o", "u", "t", " ", "m", "e"]} idx={15} />
          </h1>
          <p>자기소개 자기소개</p>
          <p align="LEFT">자기소개 자기소개</p>
          <p>자기소개 자기소개 (나중에 수정) &lt; 한글 폰트 찾기</p>
        </div>

        <div className="stage_cube_cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faNode} color="#88DE63" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Background />
      <Loader type="pacman" />
    </>
  );
};

export default About;
