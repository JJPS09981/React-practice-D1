import { useState } from "react";
import bird from "./img/bird.svg";
import cat from "./img/cat.svg";
import cow from "./img/cow.svg";
import dog from "./img/dog.svg";
import gator from "./img/gator.svg";
import heart from "./img/heart.svg";
import horse from "./img/horse.svg";

const svgMap = { bird, cat, cow, dog, gator, horse };
const heartSize = 20;
const heartMaxSize = 8;

function AnimalShow({ type }) {
  const [click, setClick] = useState(0);
  const handleClick = () => {
    if (click < heartMaxSize) setClick(click + 1);
  };
  return (
    <div className="animal-show" onClick={handleClick}>
      <img className="animal" alt={type} src={svgMap[type]} />
      <img
        className="heart"
        alt="heart"
        src={heart}
        style={{ width: heartSize + heartSize * click }}
      />
    </div>
  );
}
export default AnimalShow;
