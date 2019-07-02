import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { Board } from './board.js';
import { Ship } from './ships.js';

// let preivousMove = [x,y] //remove the ship.name


let previousMove;

function clear() {

  let block = document.querySelector('[data-x="'+previousMove[0]+'"][data-y="'+ previousMove[1] +'"]');
  block.dataset.state = previousMove[2];
  if (previousMove[2] === 5) {
    //not empty
  } else {
    block.style.background = 'none';
  }
}



function attachListeners() {
  let ship;
  $('.ship').on("click", function() {
    if (this.id === "destroyer") {
      ship = shipyard[0];
    }
    if (this.id === "cruiser") {
      ship = shipyard[1];
    }
    if (this.id === "battlecruiser") {
      ship = shipyard[2];
    }
    if (this.id === "battleship") {
      ship = shipyard[3];
    }
    if (this.id === "carrier") {
      ship = shipyard[4];
    }
  })
  $('.block').on("click", function() {
    if (previousMove){
      clear();
    }
    let x = parseInt(this.dataset.x);
    let y = parseInt(this.dataset.y);
    let occupied = parseInt(this.dataset.state);
    previousMove = [x,y,occupied];
    console.log("previousMove: " +previousMove);

    ship.moveShip(x,y, occupied);
    ship.placeShip(x,y);


})
}


let shipyard=[];
function shipInit() {
  let destroyer = new Ship ("destroyer", 5, 1, 1, 3, 1);
  let cruiser = new Ship ("cruiser", 10, 2, 2, 3, 2);
  let battlecruiser = new Ship ("battlercruiser", 20, 3, 3, 2, 4);
  let battleship = new Ship ("battleship", 40, 5, 4, 1, 6);
  let carrier = new Ship ("carrier", 50, 2, 4, 1, 10);
  shipyard.push(destroyer, cruiser, battlecruiser, battleship, carrier)
}

$(function() {
  let board = new Board(2, 1);
  shipInit();
  board.makeBoard();
  board.placeIslands();
  attachListeners();
});


//end turn, if this.position is not filled reset datastate -> 0
