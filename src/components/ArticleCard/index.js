import React, { Components } from 'react';
import { Link } from 'react-router-dom';

const ArticleCard = ({article}) => (
    <div className="article-card-container">
        <div className="side-article-title">
            <Link to={`article/${article._id}`}>
               <h2>{article.headline.main}</h2>
            </Link>
        </div> 
        <div className="article-card-author">
            {article.byline.original}
        </div>
    </div>
);

export default ArticleCard;