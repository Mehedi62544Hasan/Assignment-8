import React from 'react';
import './SetCart.css'
// import img '../../../public/DSC_0009~2.JPG'

const SetCart = (props) => {
    return (
        <div>
            <div className='user'>
                <img src= "" alt="" />
                <h3>Mehedi Hasan</h3>
            </div>
            <div>
                <div>
                    {/* <h1>55kg</h1>
                    <p>Weight</p> */}
                </div>
                <div></div>
                <div></div>
            </div>
            <div>
                {/* ass a break */}
            </div>
            <div>
                <h4>Exercise Details</h4>
                <h4>Exercise time: {props.times}</h4>
                <h4>Break time: </h4>
             </div>
        </div>
    );
};

export default SetCart;