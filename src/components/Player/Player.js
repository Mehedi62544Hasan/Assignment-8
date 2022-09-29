import React from 'react';
import './Player.css'

const Player = (props) => {
    console.log(props)
     const {img, name, price, ratings} = props.player;
    return (
        <div className='player'>
            <img src= {img} alt="" />
            <div>
            <h4>{name}</h4>
            <p> {ratings}</p>
            <p>For Age: {}</p>
            <p>Time required: {price}m</p>
            </div>
            <button onClick={() => props.handleClick(props.player)}>Add to list</button>
         </div>
    );
};

export default Player;