import React from 'react';
import ReactDOM from 'react-dom';

const user = (props) => {

    return (
        <div className="tweet-user__container">
            <img className="user__img" src="https://media1.popsugar-assets.com/files/thumbor/3V8qh1kIlOKjZCnfQq-2vhQbQnM/249x163:2149x2063/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2020/02/24/905/n/1922398/d9c250fc5e5435738e0e78.04534326_/i/Kanye-West.jpg"/>
            <p className="tweet-user__name">KANYE WEST</p>
            <p className="tweet-user__screen-name">@{props.name}</p>
        </div>
    );
}

export default user;