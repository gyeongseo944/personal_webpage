import "./Portfolio.scss";
import React, { useEffect, useRef, useState } from "react";
import Card from "./Card/Card";
import { Work } from "./Data/WorkData";
import Back_port from "./Background/Back_port";
import AnimatedLetters from "../AnimatedLetters/AnimatedLetters";

const Portfolio = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3000);
  }, []);
  const scrollRef = useRef(null);
  const ref = useRef(null);
  const [isDrag, setIsDrag] = useState(false);
  const [StartX, setStartX] = useState();
  const [TransX, setTransX] = useState(0);
  const onDragStart = (e) => {
    e.preventDefault();
    setIsDrag(true);
    setStartX(e.pageX);
  };
  const onDragEnd = () => {
    setIsDrag(false);
  };
  const onDragMove = (e) => {
    var regex = /[^-?0-9]/g;
    let element = ref.current;
    let limit = element.style.transform.replace(regex, "");
    if (StartX > e.pageX) {
      if (limit > -1240) {
        setTransX(TransX + 70);
        element.style.transform = `translateX(${-TransX}px)`;
      }
    } else if (StartX < e.pageX) {
      if (limit < 0) {
        setTransX(TransX - 70);
        element.style.transform = `translateX(${-TransX}px)`;
      }
    }
  };

  return (
    <div
      className="container portfolio_page"
      onMouseDown={onDragStart}
      onMouseMove={isDrag ? onDragMove : null}
      onMouseUp={onDragEnd}
      onMouseLeave={onDragEnd}
      ref={scrollRef}
    >
      <Back_port />
      <div className="title">
        <h1>
          <AnimatedLetters letterClass={letterClass} strArray={["P", "O", "R", "T", "F", "O", "L", "I", "O"]} idx={15} />
        </h1>
        <span className="instruction">Please, Drag your mouse left or right !</span>
      </div>
      <div className="work">
        <ul ref={ref}>
          {Work.map((d) => (
            <Card key={d.id} data={d} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Portfolio;
