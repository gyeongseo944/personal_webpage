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
          <p>안녕하세요. 프론트엔드 &amp; 풀스택 개발자를 희망하는 신입 개발자 박경서 라고 합니다.</p>
          <p align="LEFT">프론트엔드 개발과 관련한 경험이 적어, 이를 보완하기 위해 개인 프론트엔드 프로젝트를 제작 진행했으며,</p>
          <p>짧지만 node js 사용 경력과 java / spring 기반의 교육과정을 수료했습니다. 이를 기반으로 풀스택 개발자, </p>
          <p>프론트엔드 개발자로 성장 자리매김 하고 싶습니다. 부족한 실력이지만 긍정적인 검토 부탁드립니다 감사합니다</p>
        </div>

        <div className="stage_cube_cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faNode} color="#88DE63" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
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
