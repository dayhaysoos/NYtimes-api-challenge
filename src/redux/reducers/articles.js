const initialState = {
    articles: [],
    getArticlesError: false,
    isLoading: true,
    page: 0,
}

export const articles = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_ARTICLES_SUCCESS':
        return Object.assign({}, state, { articles: action.articles });

        case 'ARTICLES_LOADING':
        return Object.assign({}, state, { isLoading: action.isLoading });

        case 'GET_NEXT_ARTICLES':
        return Object.assign({}, state, { page: action.page });

        case 'GET_PREVIOUS_ARTICLES':
        return Object.assign({}, state, { page: action.page });
        default:
        return state;
    }
}
