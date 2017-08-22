import React from 'react';

const ArticleReader = (props) => {
    const { articles, id } = props;
   const clickedArticle = articles.filter((article) => {
       return article._id == id
    });
    console.log(clickedArticle);
    return (
        <div className="article-reader-container">
            <div className="article-reader-title">{clickedArticle[0].headline.main}</div>
            <div className="article-reader-author">{clickedArticle[0].byline.original}</div>
            <div className="article-reader-content">
                <div className="article-reader-image"></div>
                <div className="article-reader-body">{clickedArticle[0].snippet}</div>
            </div>
        </div>
    )
}

export default ArticleReader;