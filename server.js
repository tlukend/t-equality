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
app.use(express.static('./public'));
// cookie parser middleware
app.use(cookieParser());
// sendFile will go
/*
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '/index.html'));
  //  app.use(express.static(path.join(__dirname, 'files')));

});

 */
/*
Bei jeder Anfrage
app.get('/',(req,res) => {
    session=req.session;
    if(session.userid){
        res.send("Welcome User <a href=\'/logout'>click to logout</a>");
    }else
        res.sendFile('views/index.html',{root:__dirname})
});*/
app.listen(port);
console.log('Server started at http://localhost:' + port);
