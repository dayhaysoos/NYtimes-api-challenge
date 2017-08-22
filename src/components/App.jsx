import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getArticles, getNextArticles, getPreviousArticles } from '../redux/actions/articles';
import Header from './Header';

import TopStories from './TopStories';
import MainArticleCard from './MainArticleCard';
import SideArticles from './TopStories/SideArticles';
import ArticleSection from './ArticleSection';
import NextButton from './NextButton';
import PreviousButton from './PreviousButton';


const LoadingComponent = () => (
    <h1>Loading</h1>
)


class App extends Component {
    constructor() {
        super();
        this.state = {
            page: 0,
        }
    }
    componentDidMount() {
        this.props.fetchData(this.props.page);
    }

    renderMain(articles) {
        const mainArticle = articles[0];
       return <MainArticleCard mainArticle={mainArticle} />
    }

    renderSide(articles) {
        const sideArticles = [articles[1], articles[2]];
        return <SideArticles sideArticles={sideArticles}/>
    }

    renderArticleSections(articles) {
        return articles.slice(3).map((article, k) => {
           return <ArticleSection article={article} key={article._id}/>
        });
    }
    render() {
        return (
            <div>
                {
                    this.props.isLoading
                    ? <LoadingComponent />
                    : 
                    <div className="container">
                        <Header />
                        <div className="top-stories-container">
                            <h2 className="top-stories-title">Top Stories</h2>
                            <div className="content-container">
                                {this.renderMain(this.props.articles)}
                                {this.renderSide(this.props.articles)}
                            </div>
                        </div>
                        {this.renderArticleSections(this.props.articles)}
                        <PreviousButton prevFunction={(page) => this.props.prevData(this.props.page)} />
                        <NextButton nextFunction={(page) => this.props.nextData(this.props.page)} />
                    </div>
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log('state stuff', state.articles.page);
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