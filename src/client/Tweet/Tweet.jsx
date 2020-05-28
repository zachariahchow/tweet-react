import React from 'react';
import ReactDOM from 'react-dom';

import User from '../User/User';
import Entities from '../Entities/Entities';


const tweet = (props) => {

    return (
        <div className="single-tweet__container">
            <User name={props.name}/>
            <div className="tweet-text__container">
                <p className="tweet-text__content">{props.text}</p>
            </div>
            <Entities urls={props.urls}/>
        </div>
    );
}


export default tweet;