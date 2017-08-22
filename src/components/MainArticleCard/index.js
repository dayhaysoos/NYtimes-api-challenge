import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const MainArticleCard = ({mainArticle}) => {
    return (
    <div className="main-article-container large-9">
        <div className="main-article-title-container row">
            <div className="main-article-text">
                    <h3 className="main-article-title">
                        <Link to={`article/${mainArticle._id}`}>
                            {mainArticle.headline.main}
                        </Link>
                    </h3>
                <div className="main-article-author">{mainArticle.byline.original}</div>
            </div>
            <div className="main-article-image large-2">
                <div className="placeholder-square"></div>
            </div>
        </div>
        <div className="main-article-body-container">
            <div className="main-article-text large-6">
                <h3 className="main-article-body">{mainArticle.snippet}</h3>
            </div>
        </div>
    </div>
    )
};

export default MainArticleCard;