// jshint esversion:6

console.log('sometext', __dirname);

const express = require('express');
const router = express.Router();
var app = express();
let buzzwords = {
  'buzzwords': [],
};

app.get('/', (req, res) =>
  res.sendFile(__dirname + '/index.html'));

app.get('/buzzwords', (req, res) =>
  res.json(buzzwords));

app.post('/buzzword', (req, res) => {

  res.send('asdf');
});

var server = app.listen(3000, () => {
  var host = server.address().address;
  var port = server.address().port;

  console.log('App listening at http://%s:%s', host, port);
});