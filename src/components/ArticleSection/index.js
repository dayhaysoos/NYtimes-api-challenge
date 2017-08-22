import React, { Component } from 'react';

const ArticleSection = ({article}) => (
    <div className="article-section-container row large-12">
        <div className="large-3">
            <div className="placeholder-square"></div>
        </div>
        <div className="article-section-content large-9">
            <h3 className="article-section-title">{article.headline.main}</h3>
            <p className="article-section-body">{article.snippet}</p>
            <p className="article-section-author">{article.byline.original}</p>
        </div>
    </div>
)

export default ArticleSection;