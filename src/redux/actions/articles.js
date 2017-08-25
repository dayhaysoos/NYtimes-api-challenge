import debounce from 'lodash/debounce';
import TYPES from '../actionTypes';
import { mockdata0 } from '../../components/util/mockdata0';
import { mockdata1 } from '../../components/util/mockdata1';

import { schema, normalize } from 'normalizr';

const mockArray =[mockdata0, mockdata1];

const url = '/nytimes';

export const getArticles = (page, search) => (dispatch) => {
    //set up query string for the url
    let urlqs = `${url}/${page}`;
    //if there's not search tearm, return urlqs, if there is, add that term to the query string
    search ? urlqs = `${urlqs}/${search}` : urlqs ;
    fetch(urlqs, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    })
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        dispatch(getArticlesSuccess(data))
        return data;
    })
    .catch(err => {
        //if there's an error for whatever reason, use this mock data
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

//when searching, reset the page state back to 0 and pass the search term to getArticles
export const searchArticles = (searchTerm) => (dispatch) => {
    dispatch({
        type: 'SEARCH_ARTICLES',
        searchTerm
    })
    dispatch(getArticles(0, searchTerm));
}