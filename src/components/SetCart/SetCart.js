import React, { useState } from 'react';
import user from '../../DSC_0009~2.JPG';
import { addToDb } from '../../utilities/fakedb';
import './SetCart.css'
 
const SetCart = (props) => {
    const [breaks, setBreaks] = useState(0)
    console.log(props)
    const breakTime =  (props) =>{
        setBreaks(props)
        addToDb(props)
    }
    return (
        <div className='container'>
            <div className='user'>
                 <img src={user} alt="" />
                <h3>Mehedi Hasan</h3>
                <p>Junior Web Developer</p>
                <p>Rangamati Govt Collage</p>
            </div>
            <div className='break'>
                <h4>Add a Break</h4>
                <div>
                    <p onClick={() =>breakTime(10)}>10m</p>
                    <p onClick={() =>breakTime(20)}>20m</p>
                    <p onClick={() =>breakTime(30)}>30m</p>
                    <p onClick={() =>breakTime(40)}>40m</p>
                </div>
            </div>
            <div className='timeShow'>
                <h4 className='details'>Exercise Details</h4>
                <h4 className='showTime'>Exercise time: {props.times} minit</h4>
                <h4 className='showTime'>Break time: {breaks} minit</h4>
                <button className='activity'>Activity Completed</button>
             </div>
         </div>
    );
};

export default SetCart;