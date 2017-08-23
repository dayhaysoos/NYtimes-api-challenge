const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 8080;

// Priority serve any static files.
app.use(express.static(path.join(__dirname, '../dist')));

app.use(cors());

app.get('/', function (req, res) {
    console.log('wtf');
    // res.set({
    //     'Content-Type': 'application/json',
    //     'Cross-Origin-Accept-Origin': '*',
    //     'Access-Control-Allow-Origin': 'no-cors'
    // })
    res.json({"message":"Hi!"});
});


// All remaining requests return the React app, so it can handle routing.
// app.use(function (request, response) {
//     response.sendFile(path.resolve(__dirname, '../dist', 'index.html'));
// });

app.listen(PORT, function () {
    console.log(`Listening on port ${PORT}`);
});