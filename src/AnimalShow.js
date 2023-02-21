import './AnimalShow.css';
import { useState } from 'react';

import bird from './svg/bird.svg';
import cat from './svg/cat.svg';
import cow from './svg/cow.svg';
import gator from './svg/gator.svg';
import dog from './svg/dog.svg';
import heart from './svg/heart.svg';
import horse from './svg/horse.svg';

const svgMap = {
    bird, // === bird: bird
    cat,
    cow,
    gator,
    dog,
    horse
} // when key is the same is value, we can create a key and assign a value at the same time

const AnimalShow = ({ type }) => {
    const [clicks, setClicks] = useState(0);

    const handleClick = () => {
        setClicks(clicks + 1);
    };


    return (
        <div className="animal-show" onClick={handleClick}>
            <img className="animal" 
            src={svgMap[type]} 
            alt='animal'>
            </img>

            <img className="heart"
            src={heart} 
            alt='heart'
            style = {{width: 20 + 10 * clicks + 'px'}}>
            </img>
        </div>
    );
};

export default AnimalShow;