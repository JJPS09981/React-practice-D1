import { useState } from "react";
import AnimalShow from "./AnimalShow";
import "./css/App.css";
import "./css/AnimalShow.css";

function getRandomAnimal() {
  const animals = ["bird", "cat", "cow", "dog", "gator", "horse"];
  return animals[Math.floor(Math.random() * animals.length)];
}

function App() {
  const [animals, setAnimal] = useState([]);
  const [click, setClick] = useState(0);
  const handleClick = () => {
    setClick(click + 1);
    setAnimal([...animals, getRandomAnimal()]);
  };

  const renderedAnimal = animals.map((animal, index) => {
    return <AnimalShow type={animal} key={index} />;
  });

  return (
    <div className="app">
      <button onClick={handleClick}>新增動物</button>新增的動物：{click}
      <div className="animal-list">{renderedAnimal}</div>
    </div>
  );
}
export default App;
