import React, { Component } from 'react';

const MainArticleCard = () => (
    <div className="main-article-container large-9">
        <div className="main-article-title-container row">
            <div className="main-article-text large-10">
                <h3 className="main-article-title">Article 3 lines</h3>
                <div className="main-article-author">By Nick DeJesus</div>
            </div>
            <div className="main-article-image large-2">
                <div className="placeholder-square"></div>
            </div>
        </div>
        <div className="main-article-body-container row">
            <div className="main-article-text large-6">
                <h3 className="main-article-body">Body Text 5 lines</h3>
            </div>
        </div>
    </div>
);

export default MainArticleCard;