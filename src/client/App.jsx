import React from 'react';
import ReactDOM from 'react-dom';

import AllTweets from './Tweet/allTweets';

import { tweets } from 'tweets';

class App extends React.Component {

    render() {

        return (
            <div className="tweets__container">
                <ul className="tweets__list">
                <AllTweets tweets={tweets}/>
                </ul>
            </div>
        );
    }
}

console.log(tweets[0].text);

export default App