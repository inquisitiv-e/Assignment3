const express = require('express');
const bodyParser  = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;


// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));
app.use(express.urlencoded());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// create a GET route
let list = ["https://www.youtube.com/watch?v=MBdVXkSdhwU", "item2", "item3"];


app.get('/questions', (req, res) => {
    res.send({express: list});
});

app.post('/post', (req, res) => {
    const username = req.body.body;
    list = list.concat(username);
    res.send({response: username});
});

app.delete('/questions/:id', (req, res) => {
    list.slice();
    list.splice(req.params.id, 1);
    res.send( {response: list });
});