const newsAPI=require('../controllers/news-controller');
const ticketAPI = require('../controllers/ticket-controller');

routes.get('/api/topheadlines',newsAPI.topHeadlines);

routes.get('/api/gettickets', ticketAPI.getTickets);
routes.get('/api/getticket/:id', ticketAPI.getTicket);
routes.post('/api/ticket', ticketAPI.createTicket);
routes.delete('/api/ticket/:id', ticketAPI.deleteTicket);
routes.put('/api/ticket/:id', ticketAPI.updateTicket);

module.exports = routes;

