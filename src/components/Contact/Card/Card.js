import "./Card.scss";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

const Card = () => {
  return (
    <div className="card_container">
      <div className="info_card">
        <div className="center_icon"></div>
        <div className="contact_info">
          <h2>Contact Info</h2>
          <p className="info_icon">
            <FontAwesomeIcon icon={faPhone} />
          </p>
          <p className="info_content">+82 10 - 5800 - 7433</p>
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
