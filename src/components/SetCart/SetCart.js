import React, { useState } from 'react';
import './SetCart.css'
// import img '../../../public/DSC_0009~2.JPG'

const SetCart = (props) => {
    const [breaks, setBreaks] = useState(0)
    console.log(props)
    const breakTime =  (props) =>{
        setBreaks(props)
    }
    return (
        <div className='container'>
            <div className='user'>
                 <h1>img</h1>
                <h3>Mehedi Hasan</h3>
                <p>Junior Web Developer</p>
                <p>Rangamati Govt Collage</p>
            </div>
            <div>
                <div>
                    {/* <h1>55kg</h1>
                    <p>Weight</p> */}
                </div>
                <div></div>
                <div></div>
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
            <div>
                <h4>Exercise Details</h4>
                <h4>Exercise time: {props.times} minit</h4>
                <h4>Break time: {breaks} minit</h4>
             </div>
        </div>
    );
};

export default SetCart;