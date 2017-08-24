const express = require('express');
const path = require('path');
const cors = require('cors');
const rp = require('request-promise');

const app = express();
const PORT = process.env.PORT || 8080;

// Priority serve any static files.
app.use(express.static(path.join(__dirname, '../dist')));

app.use(cors());

app.get('/nytimes/:page', (req, res) => {
    const options = {
        url: `http://api.nytimes.com/svc/search/v2/articlesearch.json`,
        qs: {
            'api-key': `a8457610b68381085a3fff38d6a36337:6:74255139`,
            'page': `${req.params.page}`,
        },
        headers: {
            'Access-Control-Allow-Origin': 'CORS'
        },
        json: true,
    };

    return rp(options)
    .then((data) => {
        res.status(200).json(data.response.docs);
    })
    .catch((err) => {
        console.log('err', err);
        res.status(400).json({error: err})
    })
})


app.listen(PORT, function () {
    console.log(`Listening on port ${PORT}`);
});