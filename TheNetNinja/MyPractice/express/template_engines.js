const express = require('express');

const app = express();

// Set the view engine
app.set('view engine', 'ejs');

// Sending files
app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});
app.get('/contact', function(req, res) {
  res.sendFile(__dirname + '/contact.html');
});

app.listen(3000);
