const express = require('express');
const app = express();

app.get('/', function(req, res){
    res.send('Hey');
})

app.listen(3000, function() {
  console.log('Listening on port 3000');
})

module.exports = app;
