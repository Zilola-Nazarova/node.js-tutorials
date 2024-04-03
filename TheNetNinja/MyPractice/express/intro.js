const express = require('express');

const app = express();

// Sending strings
app.get('/', function(req, res) {
  res.send('this is the homepage');
});
app.get('/contact', function(req, res) {
  res.send('this is the contact page');
});

app.listen(3000);
