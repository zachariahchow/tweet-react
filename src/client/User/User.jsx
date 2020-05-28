import React from 'react';
import ReactDOM from 'react-dom';

const user = (props) => {

    return (
        <div className="tweet-user__container">
            <p className="tweet-user__name">KANYE WEST</p>
            <p className="tweet-user__scree-name">@{props.name}</p>
        </div>
    );
}

export default user;