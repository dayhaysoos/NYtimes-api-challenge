import React, { Component } from 'react';
import Header from './Header';
import TopStories from './TopStories';
import {
    getArticles,
} from './util/api';

class App extends Component {
    render() {
        return(
            <div className="container">
                <Header />
                <TopStories />
            </div>
        )
    }
}

export default App;