const newsAPI=require('../controllers/news-controller');
const {Router} = require("express");
const controller = require("../controllers/news-controller");

const routes = Router();


routes.get('/api/topheadlines',controller.topHeadlines);

module.exports = routes;