import React from 'react';
import ReactDOM from 'react-dom';

import Tweet from './Tweet/Tweet';
import User from './User/User';
import UrlEntity from './UrlEntity/UrlEntity';

import { tweets } from 'tweets';

class App extends React.Component {


    render() {

        const allTweets = tweets.map(tweet => {
            return (
                <div className="tweets__container">
                    <ul className="tweets__list">
                        <User name={tweet.user.screen_name}/>
                        <Tweet text={tweet.text}/>
                    </ul>
                </div>
            )
        })

        return (
            <div>
                {allTweets}
            </div>
        );
    }
}

console.log(tweets[0].text);

export default App