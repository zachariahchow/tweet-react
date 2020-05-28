import React from 'react';
import ReactDOM from 'react-dom';

import AllTweets from './Tweet/allTweets';
import Nav from './layout/nav';

import { tweets } from 'tweets';

class App extends React.Component {

    render() {

        return (
            <main>
                <Nav />

                <div className="tweets__container">
                    <ul className="tweets__list">
                    <AllTweets tweets={tweets}/>
                    </ul>
                </div>
            </main>
        );
    }
}

console.log(tweets[1].entities.media[0]);

export default App