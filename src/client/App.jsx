import React from 'react';
import ReactDOM from 'react-dom';

import Tweet from './Tweet/Tweet';

import tweets from 'tweets';

class App extends React.Component {
    render() {
        return (
            <div>
                <Tweet />
            </div>
        );
    }
}

export default App