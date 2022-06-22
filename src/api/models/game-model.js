class Game {
    constructor( name, fsk) {      
     
        this.name= name;
        this.fsk = fsk;
    }
  }

class GameModel{
    static Game_ID = 1;

    constructor() {
      this.games= new Map();
    }

  addGame(game) {
    game.id =GameModel.Game_ID;
    this.games.set(game.id, game);
    GameModel.Game_ID++;  
    return game; 
  }

  updateGame(id, game) {    
    const target = this.getGame(id);
    if (!target) {
        throw new Error ('Game with $ {id}does not exist')

    }
    Object.assign(target, game);
    return target;
}


  getGames() {
    return Array.from(this.games.values());
  }

  getGame(id) {
    return this.games.get(id);
  }

  deleteGame(id) {
    this.games.delete(id);    
    GameModel.Game_ID--;
    return 'deleted';
  }
}

const model = new GameModel();
model.addGame(new Game("hallo",12));
model.addGame(new Game("schön",6));
model.addGame(new Game("bravo",16));

module.exports = model;