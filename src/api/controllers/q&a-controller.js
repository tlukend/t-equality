const model = require("../models/questions");

class QAController{

    getQuestions(req,res){

        res.send(model.getQuestions());
    }
}