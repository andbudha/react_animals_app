import React, {useState} from 'react';
import './AnimalShow.css'

import bird from'./svg/bird.svg'
import cat from'./svg/cat.svg'
import dog from'./svg/dog.svg'
import horse from'./svg/horse.svg'
import gator from'./svg/gator.svg'
import heart from'./svg/heart.svg'
import cow from'./svg/cow.svg'

const AnimalShow = ({type}) => {

    const[clicks, setClick]=useState(0);

    const clickHandler = () => {
        setClick(clicks + 1);
    }


    const svgMap = {bird, cat, dog, horse, gator, cow, heart};
    return(
        <div className={'animal-show'} onClick={clickHandler}>
            <img className={'animal'} src={svgMap[type]} alt="animal-img"/>
            <img
                className={'heart'}
                src={heart}
                alt="heart-img"
                style={{width: 10 + 30 * clicks +'px'}}
            />
        </div>
    );
};

export default AnimalShow;