
export class Board {
  constructor(playerCount, gameMode){
    this.size = 20;
    this.islands = 30;
    this.victoryPoint = playerCount+1;
    this.gameSize = gameMode; //will be used as a modifier for pool and board size
    this.costPool = 400
  }

  makeBoard() {
    let board = document.getElementsByClassName('gameBoard')[0];
    board.innerHTML = '';
    let counter = 0;
    for (let y = 0; y < this.size; y++)
    {
      let row = document.createElement('div');
      row.className = 'row';
      row.dataset.row = y;
      for (let x = 0; x < this.size; x++)
      {
        let block = document.createElement('div');
        block.className = 'block';
        block.dataset.x = x;
        block.dataset.y = y;
        block.dataset.index = counter;
        block.dataset.state = 0;
        block.innerHTML = "0 : " + counter;
        row.appendChild(block);
        counter++;
      }
      board.appendChild(row);
    }
  }

  makeIslands() {

  }
}


























// for (let i = 0; i < this.islands; i++) {
//   --create island of randomSize--
//   i+randomSize
// }
