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

// Render the template
app.get('/profile/:id', function(req, res) {
  const data = {name: 'Zilola', age: 29, job: 'developer'};
  res.render('profile', {id: req.params.id, data: data});
});

app.listen(3000);
