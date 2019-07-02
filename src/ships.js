// let block = document.querySelector('[data-x="'+coords[0]+'"][data-y="'+coords[1]+'"]');
// block.classList.add('island');

export class Ship {

  constructor (name, cost, atk, def, ms, range, team){
    this.name = name;
    this.cost = cost;
    this.attack = atk;
    this.defense = def;
    this.move = ms;
    this.range = range;
    this.team = 1;
  }

  placeShip (x,y,occupied) {
    this.newPosition = [x,y,occupied];
    console.log(this.newPosition);
    console.log(this.position);
    // console.log(this.newPosition);

    if (this.newPosition[2] !== 0) {
      if (this.newPosition[2] === this.team) {
        //own ship
      } else if (this.newPosition[2] === 5) {
        alert("Island captain! She'll run aground!")
      } else {
        //attack ship
      }
    }
    if (!this.position) {
      this.position = this.newPosition;
      this.position[2]= this.team;
    } else if (Math.abs(y-this.position[1]) <= this.move && Math.abs(x-this.position[0]) <= this.move ){
      this.position = this.newPosition;
      this.position[2]= this.team;
    } else {
      alert("TOO FAR")
    }
  }
}
