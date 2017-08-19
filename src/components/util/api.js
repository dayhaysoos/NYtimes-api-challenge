//get articles
export const getArticles = () => {
    fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=7a0ec51a208c440fa61f004170780b16`, {
        method: 'GET',
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
            'request-no-cors': 'no-cors'
        },
    }).then(response => {
        return response.json();
    }).then(json => {
        console.log('json', json);
        return json;
    }).catch(err => {
        console.log('something went wrong :(', err);
    });
}


