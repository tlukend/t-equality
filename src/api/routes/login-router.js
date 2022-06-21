const { Router } = require('express');
const controller = require('../controllers/login-controller');
const newsAPI=require('../controllers/news-controller');
const ticketAPI = require('../controllers/ticket-controller');

const routes = Router();

//wird /logout angefragt wird controller.logout aufgerufen
routes.get('/logout', controller.logout);
routes.get('/userdata', controller.getUserData);

//wird /login angefragt wird controller.login aufgerufen
routes.post('/login', controller.login);

routes.post('/signup', controller.signUp);

routes.get('/api/topheadlines',newsAPI.topHeadlines);

routes.get('/api/gettickets', ticketAPI.getTickets);
routes.get('/api/getticket/:id', ticketAPI.getTicket);
routes.post('/api/ticket', ticketAPI.createTicket);
routes.delete('/api/ticket/:id', ticketAPI.deleteTicket);
routes.put('/api/ticket/:id', ticketAPI.updateTicket);

module.exports = routes;