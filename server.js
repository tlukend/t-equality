const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const app = express();
const port = process.env.PORT || 3000;
const session = require('./src/authentication/session');
session(app);

// parsing the incoming data. This will help us parser an HTTP POST method request from an HTML document.
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//serving public file
app.use(express.static('./src'));
// cookie parser middleware
app.use(cookieParser());
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
