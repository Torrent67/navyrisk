import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { Board } from './board.js';
import { Ship } from './ships.js';

function attachListeners(ship) {
  $('.block').on("click", function() {
    let x = this.dataset.x;
    let y = this.dataset.y;
    let occupied = this.dataset.state;
    ship.placeShip(x,y, occupied);
})
}

let shipyard=[];
function shipInit() {
  let carrier = new Ship (50, 2, 4, 1, 10,"" );
  let battleship = new Ship (40, 5, 4, 1, 6,"" );
  let battlecruiser = new Ship (20, 3, 3, 2, 4,"" );
  let cruiser = new Ship (10, 2, 2, 3, 2,"" );
  let destroyer = new Ship (5, 1, 1, 3, 1, "");
  shipyard.push(carrier, battleship, battlecruiser, cruiser, destroyer)
}

$(function() {
  let board = new Board(2, 1);
  shipInit();
  board.makeBoard();
  board.placeIslands();
  let ship = shipyard[0];
  attachListeners(ship);

});
