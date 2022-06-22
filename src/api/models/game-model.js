class Game {
    constructor( name, beschreibung, link) {      
     
        this.name= name;
        this.beschreibung = beschreibung;
        this.link = link;
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
    console.log(id);
    return this.games.get(id);
  }

  deleteGame(id) {
    this.games.delete(id);    
    GameModel.Game_ID--;
    return 'deleted';
  }
}

const model = new GameModel();
model.addGame(new Game("Sudoko","Sudoku is a brain challenging number game, played on a 9x9 sudoku board. The sudoku board is broken down into nine 3x3 squares. The object of the sudoku game is simple. Every row, column, and 3x3 box in the sudoku board must contain the digits 1 through 9 only once! As the difficulty progresses, the sudoku game becomes harder, and you'll have to employ more advanced and strategic logic to solve the puzzles.", "https://www.247sudoku.com/"));
model.addGame(new Game("Tiktaktoe","Spiele mit deiner Maus und und setze den Kreis in ein Feld deiner Wahl. Schaffst du es, eine ganze Reihe (Waagerecht, Senkrecht oder Diagonal) mit 3 gleichen “Steinen” zu besetzen, dann hast du gewonnen.", "https://www.spiele-kostenlos-online.de/brettspiele/brett-spiele/tic-tac-toe-online/"));
model.addGame(new Game("Tetris","Tetris ist ein Computer-Spiel; es wird mit sieben verschiedenen Steinen gespielt, die wiederum aus vier gleichen Quadraten aufgebaut sind. Diese Steine senken sich nach dem Spielstart einzeln von oben nach unten durch das rechteckige Spielfeld, das 10 Quadrate breit und 20 Quadrate hoch ist.", "https://spiele.rtl.de/tetris/"));
module.exports = model;