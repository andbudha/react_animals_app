import React from 'react';

import bird from'./svg/bird.svg'
import cat from'./svg/cat.svg'
import dog from'./svg/dog.svg'
import horse from'./svg/horse.svg'
import gator from'./svg/gator.svg'
import heart from'./svg/heart.svg'
import cow from'./svg/cow.svg'

const AnimalShow = ({type}) => {

    const svgMap = {bird, cat, dog, horse, gator, cow, heart};
    return(
        <div>
            <img src={svgMap[type]} alt=""/>
        </div>
    );
};

export default AnimalShow;