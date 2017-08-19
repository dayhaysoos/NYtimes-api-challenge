import React, { Component } from 'react';
import MainArticleCard from './MainArticleCard';
import SideArticles from './SideArticles';

const TopStories = () => (
    <div className="top-stories-container">
        <h2>Top Stories</h2>
        <div className="content-container">
            <MainArticleCard />
            <SideArticles />
        </div>
    </div>
);

export default TopStories;