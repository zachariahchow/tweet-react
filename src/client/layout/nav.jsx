import React from 'react';
import ReactDOM from 'react-dom';

const nav = (props) => {

    return (
        <div className="navbar">
            <div className="navbar-link__container">
                <a href="" className="navbar-link">Tweets</a>
            </div>
            <div className="navbar-link__container">
                <a href="" className="navbar-link">Tweets & Replies</a>
            </div>
            <div className="navbar-link__container">
                <a href="" className="navbar-link">Media</a>
            </div>
            <div className="navbar-link__container">
                <a href="" className="navbar-link">Likes</a>
            </div>
        </div>
    );
}

export default nav;