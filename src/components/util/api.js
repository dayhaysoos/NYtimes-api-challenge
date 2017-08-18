import queryString from 'query-string';

let key = {
    data: 'a8457610b68381085a3fff38d6a36337: 6:74255139'
}
//get articles
export const getArticles = () => {
    fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=a8457610b68381085a3fff38d6a36337:6:74255139`, {
        method: 'GET',
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
        },
    }).then(response => {
        console.log('get article response', response);
        return response.json();
    }).then(json => {
        console.log(json);
        return json;
    }).catch(err => {
        console.log('something went wrong :(', err);
    });
}


