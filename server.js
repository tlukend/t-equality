const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// sendFile will go
/*
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '/t-equality.html'));
  //  app.use(express.static(path.join(__dirname, 'files')));

});

 */
app.use(express.static(path.join(__dirname, '.')));

app.listen(port);
console.log('Server started at http://localhost:' + port);
