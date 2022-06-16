import "./Card.scss";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Card = ({ data }) => {
  const { id, name, description, tags, demo, github, pdf } = data;
  return (
    <div key={id} className="work_card">
      <h2 className="name">{name}</h2>
      <h2 className="description">{description}</h2>
      <div className="skill_tags">
        {tags.map((t, id) => {
          return (
            <span className="skill_tag" key={id}>
              #{t}
            </span>
          );
        })}
      </div>
      <div className="buttons">
        {demo ? (
          <div className="demo_btn">
            <a href={demo} target="_blank">
              VISIT
            </a>
          </div>
        ) : (
          <div style={{ display: "none" }}></div>
        )}
        {github ? (
          <div className="git_btn">
            <a href={github} target="_blank">
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </div>
        ) : (
          <div style={{ display: "none" }}></div>
        )}
        {pdf ? (
          <div className="pdf_btn">
            <a href={pdf} target="_blank">
              <FontAwesomeIcon icon={faFilePdf} />
            </a>
          </div>
        ) : (
          <div style={{ display: "none" }}></div>
        )}
      </div>
    </div>
  );
};

export default Card;
