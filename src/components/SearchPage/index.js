import React from 'react';
import { Link } from 'react-router-dom';
import ArticleSection from '../ArticleSection';

const renderArticleSections = (articles) => {
    return articles.map((article, k) => {
        return <ArticleSection article={article} key={article._id} />
    });
}

const SearchPage = ({data}) => (
    <div className="search-page-container">
        {renderArticleSections(data)}
    </div>
)

export default SearchPage;