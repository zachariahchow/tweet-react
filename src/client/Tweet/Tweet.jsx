import React from 'react';
import ReactDOM from 'react-dom';

import tweets from 'tweets';


const tweet = (props) => {

    return (
        <div className="tweet-text__container">
            <p className="tweet-text__content">{props.text}</p>
        </div>
    );
}

export default tweet;