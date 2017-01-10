// jshint esversion:6

console.log('Directory name:', __dirname);

const bodyParser = require('body-parser');
const express = require('express');
const router = express.Router();
let app = express();
let buzzwords = [];

app.use(bodyParser.json());

// GET /
app.get('/', (req, res) =>
  res.sendFile(__dirname + '/index.html'));

// GET /buzzwords
app.get('/buzzwords', (req, res) =>
  res.json(buzzwords));

// POST /buzzword
app.post('/buzzword', (req, res) => {
  buzzwords.push(req.body);
  res.json(buzzwords);
  console.log(buzzwords);
});

let server = app.listen(3000, () => {
  let host = server.address().address;
  let port = server.address().port;

  console.log('App listening at http://%s:%s', host, port);
});