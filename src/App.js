import React, {useState} from 'react';
import AnimalShow from "./AnimalShow";



const getRandomAnimal = () => {
    const animals = ['cow', 'horse', 'dog', 'cat', 'bird', 'gator'];

  return animals[Math.floor(Math.random() * animals.length)];
}



const App = () => {

    const [animals, setAnimals] = useState([]);

    const handleClick = () => {
      setAnimals([...animals, getRandomAnimal()]);
    }

    const renderedAnimals = animals.map((animal, index)=>{
        return <AnimalShow type={animal} key={index}/>
    })


    return (
        <div>
            <button onClick={handleClick}>Add Animal</button>
            <div>{renderedAnimals}</div>
        </div>
    );
};

export default App;