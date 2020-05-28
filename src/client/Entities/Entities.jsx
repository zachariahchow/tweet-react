import React from 'react';
import ReactDOM from 'react-dom';

import tweets from 'tweets';

import UrlEntity from '../UrlEntity/UrlEntity';


const entities = (props) => {

    const allUrlEntities = props.urls.map(link =>
        <UrlEntity url={link.url}/>
    )

    return (
        <div className="tweet-entities__container">
            {allUrlEntities}
        </div>
    );
}

export default entities;