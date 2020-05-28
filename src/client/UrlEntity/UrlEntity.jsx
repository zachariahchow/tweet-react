import React from 'react';
import ReactDOM from 'react-dom';

import tweets from 'tweets';


const urlEntity = (props) => {

    return (
        <div className="tweet-url-entity__container">
            <p className="tweet-url-entity__header">{props.url}</p>
        </div>
    );
}

export default urlEntity;