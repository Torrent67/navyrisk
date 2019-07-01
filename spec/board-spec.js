import { Board } from "./../src/board.js"

describe('Board TEST', function() {

let board = new Board (2, 1);

  it('should create a board object with specs outlined in constructor', function(){
    expect(board.size).toEqual(20);
    expect(board.islands).toEqual(5);
  })
  it('should generate an array of 5 random island shapes', function (){
    board.makeIslandList();
    console.log(this.shapes);
    let layout = board.createIslands();
    console.log(layout);
    expect(layout.length).toEqual(5);
  })


})
