const { Router } = require('express');
const controller = require('../controllers/q&a-controller');

const routes = Router();

routes.get('/questions', controller.getQuestions);
routes.post('/questions', controller.addQuestion);
routes.delete('/question/:id', controller.deleteQuestion);
routes.put('/question/:id', controller.editQuestion);

module.exports = routes;