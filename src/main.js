import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { Board } from './board.js';
import { Ship } from './ships.js';

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
    let x = Math.abs(parseInt(this.dataset.x));
    let y = Math.abs(parseInt(this.dataset.y));
    let occupied = parseInt(this.dataset.state);
    ship.placeShip(x,y, occupied);
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
  let ship = shipyard[0];
  attachListeners();
});
