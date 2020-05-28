import React from 'react';
import ReactDOM from 'react-dom';

import Tweet from './Tweet/Tweet';

import { tweets } from 'tweets';

class App extends React.Component {


    render() {

        const allTweets = tweets.map(tweet => {
            return (
                <Tweet text={tweet.text}/>
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