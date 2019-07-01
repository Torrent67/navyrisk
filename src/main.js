import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { Board } from './board.js';

$(function() {
  let board = new Board(2, 1);
  console.log(board);
  board.makeBoard();
  board.makeIslandList();
  let islands = board.createIslands();
  console.log("main Islands: " + islands);
  board.placeIslands();

});
