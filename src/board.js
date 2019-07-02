
export class Board {
  constructor(playerCount, gameMode){
    this.size = 20;
    this.islands = 5;
    this.victoryPoint = playerCount+1;
    this.gameSize = gameMode; //will be used as a modifier for pool and board size
    this.costPool = 400;
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
        block.innerHTML = x +" : " + y;
        row.appendChild(block);
        counter++;
      }
      board.appendChild(row);
    }
  }

  makeIslandList(x,y) { //creates an array of various island options based on location s
    this.shapes = [];
    let t = [[x,y], [x,y+1], [x,y+2], [x+1,y+1]];
    let line = [[x,y], [x,y+1]];
    let l = [[x,y],[x+1,y],[x,y+1]];
    let diag = [[x,y], [x+1,y+1], [x+2,y+2]];
    let s = [[x,y], [x,y+1], [x+1,y+1], [x+1,y+2]];
    let box = [[x,y], [x+1,y], [x,y+1], [x+1,y+1]];
    let diag2 = [[x,y], [x+1,y-1], [x+2,y-2]];
    let u = [[x,y],[x-1,y-1],[x+1,y-1],[x-1,y],[x+1,y]];
    this.shapes.push(line);
    this.shapes.push(t);
    this.shapes.push(l);
    this.shapes.push(box);
    this.shapes.push(diag);
    this.shapes.push(s);
    this.shapes.push(diag2);
    this.shapes.push(u);
  }

  placeIslands () {
    let location1 = [parseInt(Math.random()*(7-3)+3),parseInt(Math.random()*(7-3)+3)];
    let location2 = [parseInt(Math.random()*(18-14)+14),parseInt(Math.random()*(7-3)+3)];
    let location3 = [parseInt(Math.random()*(7-3)+3),parseInt(Math.random()*(18-14)+14)];
    let location4 = [parseInt(Math.random()*(18-14)+14),parseInt(Math.random()*(18-14)+14)];
    let location5 = [parseInt(Math.random()*(13-6)+7),parseInt(Math.random()*(13-6)+7)];
    console.log("location 5 : "+location5);
    let layout = [];
    layout.push(location1);
    layout.push(location2);
    layout.push(location3);
    layout.push(location4);
    layout.push(location5);
    let currentIslands = [];
    let x;
    let y;
    for (let i=0; i < layout.length; i++) {
      x = layout[i][0];
      y = layout[i][1];
      this.makeIslandList(x,y);
      let randomIsland = this.shapes[Math.floor(Math.random()*this.shapes.length)];
      randomIsland.forEach(function(coords){
        let block = document.querySelector('[data-x="'+coords[0]+'"][data-y="'+coords[1]+'"]');
        block.classList.add('island');
        block.dataset.state = 5;
      })
    }
    this.makeIslandList(x,y);
    console.log(this.shapes);

    // let block = document.querySelector('[data-x="'+x+'"][data-y="'+y+'"]');
    // block.classList.add('island');


  }





}



























// for (let i = 0; i < this.islands; i++) {
//   --create island of randomSize--
//   i+randomSize
// }
