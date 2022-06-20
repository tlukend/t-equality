const { Router } = require('express');
const controller = require('../controllers/login-controller');

const routes = Router();

//wird /logout angefragt wird controller.logout aufgerufen
routes.get('/logout', controller.logout);

//wird /login angefragt wird controller.login aufgerufen
routes.post('/login', controller.login);
module.exports = routes;