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

  moveShip (x,y,occupied) {
    this.newPosition = [x,y,occupied];
    console.log(this.newPosition);
    console.log(this.position);

    if (this.newPosition[2] !== 0) {
      if (this.newPosition[2] === this.team) {
        //own ship
      } else if (this.newPosition[2] === 5) {
        alert("Island captain! She'll run aground!")
        return;
      } else {
        //attack ship
      }
    } else {
      if (!this.position) {
        this.position = this.newPosition;
        this.position[2]= this.team;
      } else if (Math.abs(y-this.position[1]) <= this.move && Math.abs(x-this.position[0]) <= this.move ){
        this.position = this.newPosition;
        this.position[2]= this.team;
      } else {
        alert("You Amatuer!")
      }
    }
  }
  placeShip() {
  let block = document.querySelector('[data-x="'+this.position[0]+'"][data-y="'+this.position[1]+'"]');
  block.dataset.state = 1;
  block.style.background = 'url("https://anticsonline.uk/Handlers/l.ashx?k=108389782")';
  block.style.backgroundSize = 'cover';
  }
}


//if it has a number override, if it doesn't then water
