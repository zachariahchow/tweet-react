import React from 'react';
import ReactDOM from 'react-dom';

const urlEntity = (props) => {

    return (
        <div className="tweet-url-entity__container">
            <a href={props.url} className="tweet-url-entity__link">{props.url}</a>
        </div>
    );
}

export default urlEntity;