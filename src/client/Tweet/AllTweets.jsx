import React from 'react';
import ReactDOM from 'react-dom';

import Tweet from './Tweet';

const allTweets = (props) => {

    const allTweetEls = props.tweets.map(tweet => {
        return (
            <Tweet name={tweet.user.screen_name} text={tweet.text} urls={tweet.entities.urls}/>
        )
    })

    return allTweetEls;
}


export default allTweets;