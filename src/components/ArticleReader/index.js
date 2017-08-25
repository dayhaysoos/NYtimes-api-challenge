import React from 'react';

const ArticleReader = (props) => {
    console.log('Article Reader', props);
    const { articles, id } = props;
    const clickedArticle = articles.filter((article) => {
       return article._id == id
    });
    return (
        <div className="article-reader-container">
            <h2 className="article-reader-title">{clickedArticle[0].headline.main ? clickedArticle[0].headline.main : 'some headline'}</h2>
            <div className="article-reader-author">{clickedArticle[0].byline.original}</div>
            <div className="article-reader-content large-12 row">
                <div className="article-reader-image large-2">
                    <div className="placeholder-square"></div>
                </div>
                <div className="article-reader-body large-10">{clickedArticle[0].snippet}</div>
            </div>
        </div>
    )
}

export default ArticleReader;