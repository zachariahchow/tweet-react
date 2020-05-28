import React from 'react';
import ReactDOM from 'react-dom';

import User from '../User/User';
import Entities from '../Entities/Entities';


const tweet = (props) => {
    let media;

    if (props.media) {
        media = <div className="media__container"><img className="tweet-media__img" src={props.media} /></div>
    } else {
        media = null;
    }

    return (
        <div className="single-tweet__container">
            <User name={props.name}/>
            <div className="tweet-text__container">
                <p className="tweet-text__content">{props.text}</p>
            </div>
            {media}
            <Entities urls={props.urls}/>
        </div>
    );
}


export default tweet;