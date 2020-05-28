import React from 'react';
import ReactDOM from 'react-dom';

const user = (props) => {

    return (
        <div className="tweet-user__container">
            <p className="tweet-user__header">{props.name}</p>
        </div>
    );
}

export default user;