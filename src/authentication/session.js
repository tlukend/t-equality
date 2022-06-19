
const sessions = require('express-session');

// session id valid 24 hours
const oneDay = 1000 * 60 * 60 * 24;

//session middleware
module.exports = function (app){
    app.use(sessions({
        secret: "s32345esheh4kr337kesgdfhsy5636363",
        saveUninitialized:true,
        cookie: { maxAge: oneDay },
        resave: false
    }));

    //username and password
    const myusername = 'user1'
    const mypassword = 'mypassword'

// a variable to save a session
    var session;

}