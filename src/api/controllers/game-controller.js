const model = require("../models/game-model");

class GameController {
  getGames(req,res){
    const response = model.getGames();
    console.log(response);
    res.send(response);
  }

  deleteGame(req,res){
    res.send(model.deleteGame(parseInt(req.params.id)));    
  }

  createGame(req,res){
    /*
    const gamevideo= req.body.gamevideo;
    const name = req.body.name;
    console.log(name);
*/
    const game = req.body;
    model.addGame(game);
    res.send(game);
  }

  updateGame(req, res) {    
    const id = parseInt(req.params.id);
    if (!model.getGame(id)){
        res.status(404).send (`No game with id ${id} exists. Update not possible.`);
        }else {
          const game = req.body;
          
              model.updateGame(id, game);
              res.sendStatus(200);
        }        
  }

  getGame(req, res) {    
    res.send(model.getGame(parseInt(req.params.id)));
  }
}
 module.exports = new  GameController();