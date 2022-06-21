const { Router } = require('express');
const routes = Router();
const gameAPI = require('../controllers/game-controller');


routes.get('/getgames', gameAPI.getGames);
routes.get('/getgame/:id', gameAPI.getGame);
routes.post('/game', gameAPI.createGame);
routes.delete('/game/:id', gameAPI.deleteGame);
routes.put('/game/:id', gameAPI.updateGame);

module.exports = routes;

