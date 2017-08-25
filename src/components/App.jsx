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
import Paginate from './paginate';


const LoadingComponent = () => (
    <h1>Loading</h1>
)

class App extends Component {
    // dispatch action to fetch data immediately
    componentDidMount() {
        this.props.fetchData(this.props.page, this.props.search);
    }

    //search call to NY Times API
    handleSearch(e, history) {
        e.preventDefault();
        const { searchInput } = e.target;
        //delete this object every time so that you can use the search bar over and over
        delete history.location.pathname;
        //push function that creates new location object
        history.push(`/search/${searchInput.value}`)
        this.props.searchData(searchInput.value);
    }

    handlePaginate(e) {
        e.preventDefault();
        const clickedPage = e.target.innerHTML;
        this.props.nextData(clickedPage);
    }

render() {
    return (
    <div>
        { // check loading state, if loading state is false render everything in <Router />
            this.props.isLoading
            ? <LoadingComponent />
            :
            <Router history={history}>
                <div>
                    <Route exact path={'/'} render={(props) => (
                        <div>
                            <Header searchFunc={e => this.handleSearch(e, props.history)} />
                            <Home data={this.props.articles}/>
                            <h2>
                                <Paginate onClick={this.test} data={this.props.articles} pageState={this.props.page} pageFunc={(e) => this.handlePaginate(e)} />
                                <PreviousButton prevFunction={(page) => this.props.prevData(this.props.page)} />
                                <NextButton nextFunction={(page) => this.props.nextData(this.props.page)} />
                            </h2>
                        </div>
                        
                        )} />

                        <Route path={'/article/:_id'} render={(props) => (
                            <div>
                                <Header searchFunc={e => this.handleSearch(e, props.history)} />
                                <ArticleReader articles={this.props.articles} id={props.match.params._id} />
                            </div>
                        )} />
                        <Route path ={'/search/:_id'} render={props => (
                            <div>
                                <Header searchFunc={e => this.handleSearch(e, props.history)} />
                                <SearchPage data={this.props.articles}/>
                            </div>
                        )} />
                        <Route path={'/search/:_id/article:/:_id'} render={props => (
                            <div>
                                {console.log('/search/:article/:_id')}
                                
                                <Header searchFunc={e => this.handleSearch(e, props.history)} />
                                <ArticleReader articles={this.props.articles} id={props.match.params._id} />
                            </div>
                        )} />
                        <Route path={'/nothing'} render={(props) => (
                                <Link to={'/'}><h1>This leads to nothing. Click here to go back.</h1></Link>
                        )} />
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