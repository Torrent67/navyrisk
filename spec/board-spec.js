import { Board } from "./../src/board.js"

describe('Board TEST', function() {

  it('should create a board object with specs outlined in constructor', function(){
    let board = new Board (2, 4);
    expect(board.size).toEqual(20);
    expect(board.islands).toEqual(75);
  })
  // it('should modify the board based on number of players', function (){
  //
  // })



})
