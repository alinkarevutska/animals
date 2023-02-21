import './App.css';
import {useState} from 'react';
import AnimalShow from "./AnimalShow";

function getRandomAnimal() {
  const animals = ['bird', 'cat', 'cow', 'dog', 'gator', 'horse'];
  return animals[Math.floor(Math.random() * animals.length)] // === get random number between 0 and 5
};

function App() {
  const [animals, setAnimals] = useState([]);
  const handleClick = () => {
    setAnimals([...animals, getRandomAnimal()]);

    //modifies a piece of state!!
    // animals.push(getRandomAnimal())
  };

  const renderedAnimals = animals.map((animal, index) => {
    return <AnimalShow type={animal} key={index}/>
  })

  return (
    <div className="App">
      <button onClick={handleClick}>Add Animal</button>
      <div className="animal-list">{renderedAnimals}</div>
    </div>
  );
}

export default App;
