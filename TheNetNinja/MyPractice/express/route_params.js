const express = require('express');

const app = express();

// Dynamic routing
app.get('/profile/:id', function(req, res) {
  res.send(`You requested a profile ${req.params.id}`);
})

app.listen(3000);
