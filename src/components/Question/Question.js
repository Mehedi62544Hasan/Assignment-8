import React from 'react';
import './Question.css'

const Question = () => {
    return (
        <div className='question'>
            <div>
            <h4>How dose React work?</h4>
            <p>React is a JavaScript library developed by Facebook which, among other things, was used to build Instagram.com. Its aim is to allow developers to easily create fast user interfaces for websites and applications alike. The main concept of React.</p>
            </div>
            <div>
                <h4>Deficiency props and useState!!</h4>
                <p>
                Props allow you to pass data from one component to other components as an argument. State holds information about the components.
                </p>
            </div>
            <div>
                <h4>How work useEffect without data loader?</h4>
                <p>With useEffect , you invoke side effects from within functional components, which is an important concept to understand in the React Hooks era.</p>
            </div>
        </div>
    );
};

export default Question;