import "./Sidebar.scss";
import React from "react";
import logoG1 from "../../assets/images/logo_G1.png";
import logoSub1 from "../../assets/images/logo_sub1.png";
import logoG2 from "../../assets/images/logo_G2.png";
import logoSub2 from "../../assets/images/logo_sub2.png";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCubes, faEnvelope, faHome, faUser } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Sidebar = () => {
  return (
    <div className="navbar">
      <Link className="logo" to="/">
        <img src={logoG2} alt="logo" />
        <img className="sub_logo" src={logoSub2} alt="logoSub" />
      </Link>
      <nav>
        <NavLink exact="true" activeclassname="active" to="/">
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>
        <NavLink exact="true" activeclassname="active" className="about_link" to="/about">
          <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </NavLink>
        <NavLink exact="true" activeclassname="active" className="skills_link" to="/skills">
          <FontAwesomeIcon icon={faCubes} color="#4d4d4e" />
        </NavLink>
        <NavLink exact="true" activeclassname="active" className="contact_link" to="/contact">
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </NavLink>
      </nav>
      <ul>
        <li>
          <a target="_blank" rel="noreferrer" href="https://github.com/gyeongseo944">
            <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
