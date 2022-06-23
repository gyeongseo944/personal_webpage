import "./Card.scss";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import img from "../../../assets/images/profile.png";
import resume from "../../Portfolio/Data/PDF/GyeongseoPark.pdf";

const Card = () => {
  return (
    <div className="card_container">
      <div className="info_card">
        <div className="center_icon">
          <div className="icon_border">
            <div className="icon_content">
              <img src={img} alt="my image" />
              <h2>
                Gyeongseo Park <br />
                <span>Web Developer</span>
              </h2>
              <span className="more_info">
                <a href={resume} target="_blank">
                  More Info
                </a>
              </span>
            </div>
          </div>
        </div>
        <div className="contact_info">
          <h2>Contact Info</h2>
          <p className="info_icon">
            <FontAwesomeIcon icon={faPhone} />
          </p>
          <p className="info_content">+82 010 - 5800 - 7433</p>
          <p className="info_icon">
            <FontAwesomeIcon icon={faEnvelope} />
          </p>
          <p className="info_content">gyeongseo944@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
