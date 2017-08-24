import React from 'react';
import ArticleSection from '../ArticleSection';
import SideArticles from '../SideArticles';
import MainArticleCard from '../MainArticleCard';

const renderMain = (articles) => {
    const mainArticle = articles[0];
    return <MainArticleCard mainArticle={mainArticle} />
}

const renderSide = (articles)  => {
    const sideArticles = [articles[1], articles[2]];
    return <SideArticles sideArticles={sideArticles} />
}

const renderArticleSections =(articles) => {
    return articles.slice(3).map((article, k) => {
        return <ArticleSection article={article} key={article._id} />
    });
}

const Home = ({data}) => (
    <div className="container">
        <div className="top-stories-container">
            <h2 className="top-stories-title">Top Stories</h2>
            <div className="content-container">
                {renderMain(data)}
                {renderSide(data)}
            </div>
        </div>
        {renderArticleSections(data)}
    </div>
);

export default Home;