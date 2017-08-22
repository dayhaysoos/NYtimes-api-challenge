import React from 'react';
import ArticleCard from '../ArticleCard';

const SideArticles = ({sideArticles}) => (
    <div className="side-article-container large-3">
        <ArticleCard article={sideArticles[0]} />
        <ArticleCard article={sideArticles[1]}/>
    </div>
);

export default SideArticles;