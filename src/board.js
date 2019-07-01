
export class Board {
  constructor(playerCount, gameMode){
    this.size = 20;
    this.islands = 5;
    this.victoryPoint = playerCount+1;
    this.gameSize = gameMode; //will be used as a modifier for pool and board size
    this.costPool = 400
  }

  makeBoard() { // makes the board
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

  makeIslandList() { //creates an array of various island options
    this.shapes = [];
    let other = [[0, 0], [0,1], [0,2],[1,1]];
    let line = [[0, 0], [0, 1]];
    let l = [[0,0],[1,0],[0,1]];
    // let z = [[0,1], [1,1], [1,0], [2,0]];
    let diag = [[0,0], [1,1], [2,2]];
    let s = [[0,0], [0,1], [1,1], [1,2]]
    this.shapes.push(line);
    this.shapes.push(other);
    this.shapes.push(l);
    // shapes.push(z);
    this.shapes.push(diag);
    this.shapes.push(s)
  }
  createIslands(){ //chooses island type and specifies its location on board
    let currentIslands = [];
    for (let i = 0; i < 5; i++) {
      let randomIsland = this.shapes[Math.floor(Math.random()*this.shapes.length)];
      currentIslands.push(randomIsland);
    }
    console.log("in function: " +currentIslands);
    console.log("in function: "+currentIslands[1]);
    return currentIslands;
  }
  placeIslands (currentIslands) {
    let location1 = [5,5];
    let location2 =[15,5];
    let location3 = [5,15];
    let location4 = [15,15];
    let location5 = [Math.random()*(14-6),Math.random()*(14-6)];

    for (let i=1; i < 5; i++) {
      let island = currentIslands[i];
      let spot = document.querySelector('[data-x="'+location+i[0]'"][data-y="'+location+i[1]+'"]')
    }




  }





}



























// for (let i = 0; i < this.islands; i++) {
//   --create island of randomSize--
//   i+randomSize
// }
