import debounce from 'lodash/debounce';
import TYPES from '../actionTypes';
import { mockdata0 } from '../../components/util/mockdata0';
import { mockdata1 } from '../../components/util/mockdata1';

import { schema, normalize } from 'normalizr';

const mockArray =[mockdata0, mockdata1];

const url = '/nytimes';

export const getArticles = (page) => (dispatch) => {
    fetch(`${url}/${page}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    })
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log('new data?', data);
        dispatch(getArticlesSuccess(data))
        return data;
    })
    .catch(err => {
        console.log('USING MOCK DATA', err);
        dispatch(getArticlesSuccess(mockArray[page].response.docs));
    });
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