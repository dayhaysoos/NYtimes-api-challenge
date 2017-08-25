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
import SearchPage from './SearchPage';
import Paginate from './paginate';


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
    
    handlePaginate(e) {
        e.preventDefault();
        const clickedPage = e.target.innerHTML;
        this.props.nextData(clickedPage);
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
                        <Route path={'/nothing'} render={(props) => (
                                <Link to={'/'}><h1>This leads to nothing. Click here to go back.</h1></Link>
                        )} />
                        <h2>
                            <Paginate onClick={this.test} data={this.props.articles} pageState={this.props.page} pageFunc={(e) => this.handlePaginate(e)} />
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