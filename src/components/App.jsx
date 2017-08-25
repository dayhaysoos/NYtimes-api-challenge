import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    BrowserRouter as Router,
    Route,
    Link,
    withRouter,
} from 'react-router-dom'

import { getArticles, getNextArticles, getPreviousArticles, searchArticles } from '../redux/actions/articles';
import Header from './Header';

import MainArticleCard from './MainArticleCard';
import ArticleSection from './ArticleSection';
import NextButton from './NextButton';
import PreviousButton from './PreviousButton';
import Home from './Home';
import ArticleReader from './ArticleReader';
import SearchPage from './SearchPage';


const LoadingComponent = () => (
    <h1>Loading</h1>
)

class App extends Component {

    componentDidMount() {
        this.props.fetchData(this.props.page, this.props.search);
    }

    handleSearch(e, history) {
        e.preventDefault();
        const { searchInput } = e.target;
        delete history.location.pathname;
        history.push(`/search/${searchInput.value}`)
        this.props.searchData(searchInput.value);
    }

render() {
    console.log(this.props);
    return (
    <div>
        {
            this.props.isLoading
            ? <LoadingComponent />
            :
            <Router history={history}>
                <div>
                    <Route exact path={'/'} render={(props) => (
                        <div>
                            <Header searchFunc={e => this.handleSearch(e, props.history)} />
                            <Home data={this.props.articles}/>   
                        </div>
                        
                        )} />
                        <Route path={'/article/:_id'} render={(props) => (
                            <ArticleReader articles={this.props.articles} id={props.match.params._id} />
                        )} />
                        <Route path ={'/search/:input'} render={props => (
                            <div>
                                <Header searchFunc={e => this.handleSearch(e, props.history)} />
                                <SearchPage data={this.props.articles}/>
                            </div>
                        )} />
                        <Route path={'/search/article/:_id'} render={(props) => (
                            <ArticleReader articles={this.props.articles} id={props.match.params._id} />
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
        page: state.articles.page,
        search: state.articles.search
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (page, search) => dispatch(getArticles(page, search)),
        nextData: (page, search) => dispatch(getNextArticles(page, search)),
        prevData: (page, search) => dispatch(getPreviousArticles(page, search)),
        searchData: (search) => dispatch(searchArticles(search)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);