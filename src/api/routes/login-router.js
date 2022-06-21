const { Router } = require('express');
const controller = require('../controllers/login-controller');

const routes = Router();

//wird /logout angefragt wird controller.logout aufgerufen
routes.get('/logout', controller.logout);
routes.get('/userdata', controller.getUserData);

//wird /login angefragt wird controller.login aufgerufen
routes.post('/login', controller.login);

routes.post('/signup', controller.signUp);


module.exports = routes;