import { useEffect, useState } from "react";
import AnimatedLetters from "../AnimatedLetters/AnimatedLetters";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCss3, faGitAlt, faHtml5, faJsSquare, faNode, faReact, faJava } from "@fortawesome/free-brands-svg-icons";
import "./Skills.scss";
// icon
import spring from "../../assets/images/icons/springIcon.png";
import maria from "../../assets/images/icons/mariadbIcon.png";
import mongo from "../../assets/images/icons/mongo.png";
import oracle from "../../assets/images/icons/oracle.png";
import mysql from "../../assets/images/icons/mysql.png";
import jquery from "../../assets/images/icons/jquery.png";
import socket from "../../assets/images/icons/socket.png";
import vscode from "../../assets/images/icons/vscode.png";
import Back_skills from "./background/Back_skills";

const Skills = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3000);
  }, []);

  return (
    <>
      <div className="container skills_page">
        <div className="text_zone">
          <h1 className="TEST">
            <AnimatedLetters letterClass={letterClass} strArray={["Skills", " ", "&", " ", "Experience"]} idx={15} />
          </h1>
          <p>자기소개 자기소개</p>
          <p align="LEFT">자기소개 자기소개</p>
          <p>자기소개 자기소개 (나중에 수정) &lt; 한글 폰트 찾기</p>
        </div>
        <div className="skill_list">
          <ul>
            <li className="list">
              <span className="icon">
                <FontAwesomeIcon icon={faReact} width="70px" height="70px" />
              </span>
              <span className="text">React</span>
            </li>
            <li className="list">
              <span className="icon">
                <FontAwesomeIcon icon={faNode} />
              </span>
              <span className="text">Node.js</span>
            </li>
            <li className="list">
              <span className="icon">
                <FontAwesomeIcon icon={faJsSquare} />
              </span>
              <span className="text">Java Script</span>
            </li>
            <li className="list">
              <span className="icon">
                <FontAwesomeIcon icon={faJava} />
              </span>
              <span className="text">Java</span>
            </li>
            <li className="list">
              <span className="icon">
                <img src={spring} />
              </span>
              <span className="text">Spring</span>
            </li>
            <li className="list">
              <span className="icon">
                <img src={maria} />
              </span>
              <span className="text">MariaDB</span>
            </li>
            <li className="list">
              <span className="icon">
                <img src={mongo} />
              </span>
              <span className="text">MongoDB</span>
            </li>
            <li className="list">
              <span className="icon">
                <img src={oracle} />
              </span>
              <span className="text">Oracle</span>
            </li>
            <li className="list">
              <span className="icon">
                <img src={mysql} />
              </span>
              <span className="text">MySQL</span>
            </li>
            <li className="list">
              <span className="icon">
                <img src={jquery} />
              </span>
              <span className="text">Jquery</span>
            </li>
            <li className="list">
              <span className="icon">
                <img src={socket} />
              </span>
              <span className="text">Socket.io</span>
            </li>
            <li className="list">
              <span className="icon">
                <FontAwesomeIcon icon={faCss3} />
              </span>
              <span className="text">CSS3</span>
            </li>
            <li className="list git">
              <span className="icon">
                <FontAwesomeIcon icon={faGitAlt} />
              </span>
              <span className="text">Git</span>
            </li>
            <li className="list html">
              <span className="icon">
                <FontAwesomeIcon icon={faHtml5} />
              </span>
              <span className="text">HTML5</span>
            </li>
            <li className="list">
              <span className="icon">
                <img src={vscode} alt="visual studio code" />
              </span>
              <span className="text">VS Code</span>
            </li>
          </ul>
        </div>
        <Back_skills />
      </div>
    </>
  );
};

export default Skills;
