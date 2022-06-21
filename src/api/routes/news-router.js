const {Router} = require("express");
const controller = require("../controllers/news-controller");

const routes = Router();

routes.get('/topheadlines',controller.topHeadlines);

module.exports = routes;