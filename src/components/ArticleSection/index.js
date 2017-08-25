import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const ArticleSection = ({article}) => (
    <div className="article-section-container row large-12">
        <div className="large-3">
            <div className="placeholder-square"></div>
        </div>
        <div className="article-section-content large-9">
            <Link replace={true} to={`/article/${article._id}`}>
                <h3 className="article-section-title">{article.headline.main}</h3>
            </Link>
            <p className="article-section-body">{article.snippet}</p>
            <p className="article-section-author">{!article.byline ? 'unknown' : article.byline.original}</p>
        </div>
    </div>
)

export default ArticleSection;