import React, { Components } from 'react';

const ArticleCard = ({article}) => (
    <div className="article-card-container">
        <div className="side-article-title">
            <h2>{article.headline.main}</h2>
        </div> 
        <div className="article-card-author">
            {article.byline.original}
        </div>
    </div>
);

export default ArticleCard;