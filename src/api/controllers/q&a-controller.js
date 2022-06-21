const model = require("../models/questions");
const {doc} = require("firebase/firestore");

class QAController {
    getQuestions(req,res){
        model.getQuestions().then(result => {
          res.send(result);
        });
    }

    deleteQuestion(req, res) {
        if(!req.session.userid) {
            res.status(403).send();
            return;
        }

        model.getQuestion(req.params.id).then(question => {
            if(!question || question.userid !== req.session.userid) {
                return false;
            }
            return model.deleteQuestion(req.params.id)
        }).then(success => {
            if(success) {
                res.send({id:req.params.id});
            } else {
                res.status(404).send();
            }
        });;
    }

    addQuestion(req, res) {
        if(!req.session.userid) {
            res.status(403).send();
            return;
        }

        let question = {
            question: req.body.question,
            userid: req.session.userid
        };
        model.addQuestion(question).then(result => {
            res.send(result);
        }).catch(err => {
            res.status(500).send(err.message);
        });
    }

    editQuestion(req, res) {
        if(!req.session.userid) {
            res.status(403).send();
            return;
        }
        let question = {
            question: req.body.question,
            userid: req.session.userid
        };
        model.editQuestion(req.params.id, question).then(result => {
            if(result) {
                res.send(result);
            } else {
                res.status(500).send("Failed to update question!");
            }
        });
    }
}

module.exports = new QAController();