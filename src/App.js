import React, {useState} from 'react';
import animalShow from "./AnimalShow";



const getRandomAnimal = () => {
    const animals = ['cow', 'horse', 'dog', 'cat', 'bird', 'gator'];

  return animals[Math.floor(Math.random() * animals.length)];
}

console.log(getRandomAnimal());


const App = () => {

    const [animals, setAnimals] = useState([]);

    const handleClick = () => {
      setAnimals([...animals, getRandomAnimal()]);
    }

    
    return (
        <div>
            <button onClick={handleClick}>Add Animal</button>
            <div>Animals to show: {animals}</div>
        </div>
    );
};

export default App;