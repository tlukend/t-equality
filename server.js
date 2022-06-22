const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const app = express();
const port = process.env.PORT || 3000;
const session = require('./src/authentication/session');
session(app);
const loginRouter = require('./src/api/routes/login-router');
const newsRouter = require('./src/api/routes/news-router');
const gameRouter = require('./src/api/routes/game-router');

const qaRouter = require('./src/api/routes/q&a-router');

// parsing the incoming data. This will help us parser an HTTP POST method request from an HTML document.
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//serving public file
app.use(express.static('./public'));
// cookie parser middleware
app.use(cookieParser());


// Include the login routes
app.use('/', loginRouter);
app.use('/api/news', newsRouter);
app.use('/api/games', gameRouter);

app.use('/', qaRouter);
app.listen(port);
console.log('Server started at http://localhost:' + port);
