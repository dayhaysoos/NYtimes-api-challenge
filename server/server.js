const express = require('express');
const path = require('path');
const cors = require('cors');
const rp = require('request-promise');

const app = express();
const PORT = process.env.PORT || 8080;

// Priority serve any static files.
app.use(express.static(path.join(__dirname, '../dist')));

app.use(cors());

const fetchArticles = (page, search, req, res) => {
    const options = {
        url: `http://api.nytimes.com/svc/search/v2/articlesearch.json`,
        qs: {
            'api-key': `a8457610b68381085a3fff38d6a36337:6:74255139`,
            q: search,
            page
        },
        headers: {
            'Access-Control-Allow-Origin': 'CORS'
        },
        json: true,
    };

    return rp(options);
}

app.route('/nytimes/:page/:search').get((req, res) => {
    console.log('with search', req.params);
    fetchArticles(req.params.page, req.params.search, req, res)
        .then(data => {
            console.log(data.response.docs[0].headline);
            res.status(200).json(data.response.docs)})
        .catch(err => res.status(400).json(err))
})



app.get('/nytimes/:page', (req, res) => {
    console.log('no search', req.params);
    fetchArticles(req.params.page, req.params.search, req, res)
        .then(data => {
            res.status(200).json(data.response.docs)
        })
        .catch(err => res.status(400).json(err))
})


app.listen(PORT, function () {
    console.log(`Listening on port ${PORT}`);
});