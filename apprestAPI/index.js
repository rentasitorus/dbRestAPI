const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const port = 8080;

app.use(bodyParser.json());

app.post('/articles', (req, res) => {
    res.send({
        message: 'Create new article: POST /articles',
        body: req.body
    });
});

app.get('/articles', (req, res) => {
    res.send('Get Articles : GET /articles');
});

app.get('/articles/:author', (req, res) =>{
    res.send('Get Article: GET /articles/' + req.params.author);
});

app.listen(port, () =>{
    console.log('listening at http://localhost:${port')
});

