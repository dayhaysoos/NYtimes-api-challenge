import React, { Component } from 'react';
import Header from './Header';
import TopStories from './TopStories';
import {
    getArticles,
} from './util/api';

class App extends Component {
    constructor() {
        super();
        this.state = {
            articles: null
        }
    }
    
    componentDidMount() {
    }

    render() {
        getArticles();
        console.log(this.state);
        return(
            <div className="container">
                <Header />
                <TopStories />
            </div>
        )
    }
}

export default App;