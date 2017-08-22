import React, { Component } from 'react';

const TopStories = () => (
    <div className="top-stories-container">
        <h2 className="top-stories-title">Top Stories</h2>
        <div className="content-container">
            <MainArticleCard />
            <SideArticles />
        </div>
    </div>
);

export default TopStories;