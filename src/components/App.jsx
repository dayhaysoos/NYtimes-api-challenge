import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    BrowserRouter as Router,
    Route,
    Link,
    withRouter,
} from 'react-router-dom'

import { getArticles, getNextArticles, getPreviousArticles } from '../redux/actions/articles';
import Header from './Header';

import MainArticleCard from './MainArticleCard';
import ArticleSection from './ArticleSection';
import NextButton from './NextButton';
import PreviousButton from './PreviousButton';
import Home from './Home';
import ArticleReader from './ArticleReader';


const LoadingComponent = () => (
    <h1>Loading</h1>
)

const Testing = () => (
    <h1>Whatever</h1>
);

class App extends Component {
    constructor() {
        super();
        this.state = {
            page: 0,
        }
    }
    componentDidMount() {
        this.props.fetchData(this.props.page)
    }

render() {
    return (
    <div>
        {
            this.props.isLoading
            ? <LoadingComponent />
            :
            <Router>
                <div>
                    <Header />
                    <Route exact path={'/'} render={() => (
                        <Home data={this.props.articles}/>
                        )} />
                        <Route path={'/article/:_id'} render={(test) => (
                            <ArticleReader articles={this.props.articles} id={test.match.params._id} />
                        )} />
                        <h2>
                            <PreviousButton prevFunction={(page) => this.props.prevData(this.props.page)} />
                            <NextButton nextFunction={(page) => this.props.nextData(this.props.page)}/>
                        </h2>
                </div>
            </Router>
        }
    </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        articles: state.articles.articles,
        isLoading: state.articles.isLoading,
        page: state.articles.page
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (page) => dispatch(getArticles(page)),
        nextData: (page) => dispatch(getNextArticles(page)),
        prevData: (page) => dispatch(getPreviousArticles(page)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);