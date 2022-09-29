import React, { useEffect, useState } from 'react';
import Player from '../Player/Player';
import SetCart from '../SetCart/SetCart';
import './Home.css'
 
const Home = () => {
const [players, setPlayers] = useState([])
const [times, setTimes] = useState(0)
useEffect( () =>{
    fetch('player.json')
    .then(res => res.json())
    .then(data => setPlayers(data))
}, [])

const handleClick = (props) =>{
    const total = times + props.price;
    setTimes(total)
 }

     return (
        <div className='home'>
            <div>
                <h1 className='h1'>BD-ACTIVE-BOYS</h1>
                <p>Choose to do it today</p>
                <div className='cart'>
                  {
                       players.map(player=><Player
                        player = {player}
                        handleClick = {handleClick}
                        key = {player.id}
                        ></Player>)
                  }
                </div>
            </div>
            <div className='cart-list'>
                <SetCart times = {times}></SetCart>
            </div>
        </div>
    );
};

export default Home;