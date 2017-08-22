import TYPES from '../actionTypes';
import { mockdata0 } from '../../components/util/mockdata0';
import { mockdata1 } from '../../components/util/mockdata1';

import { schema, normalize } from 'normalizr';

const mockArray =[mockdata0, mockdata1];

export const getArticles = (page) => (dispatch) => {
    fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=a8457610b68381085a3fff38d6a36337:6:74255139`, {
        method: 'GET',
        headers: {
            'Access-Control-Allow-Origin': 'Access-Control-Allow-Origin',
            'Content-Type': 'application/json',
            'request-no-cors': 'no-cors'
        },
        body: {
            page: page,
        },
    }).then((response) => { response.ok ? response.json() : console.log('error')
    }).then(data => {
        dispatch(getArticlesSuccess(data.response.docs))
    }).catch(err => {
        dispatch(getArticlesSuccess(mockArray[page].response.docs))});
}

export const articlesLoading = (bool) => {
    return {
        type: 'ARTICLES_LOADING',
        isLoading: bool
    }
}

export const getArticlesSuccess = (articles) => (dispatch) => {
    dispatch({
        type: 'GET_ARTICLES_SUCCESS',
        articles
    })
    dispatch(articlesLoading(false));
}

export const getNextArticles = (page) => (dispatch) => {
    page++
    console.log('next stuff', page)
    dispatch({
        type: 'GET_NEXT_ARTICLES',
        page
    })
    dispatch(getArticles(page));
}

export const getPreviousArticles = (page) => (dispatch) => {
    page--
    dispatch({
        type: 'GET_PREVIOUS_ARTICLES',
        page
    })
    dispatch(getArticles(page));
}