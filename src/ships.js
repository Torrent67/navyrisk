// let block = document.querySelector('[data-x="'+coords[0]+'"][data-y="'+coords[1]+'"]');
// block.classList.add('island');

export class Ship {

  constructor (cost, atk, def, ms, range, img, team){
    this.cost = cost;
    this.attack = atk;
    this.defense = def;
    this.move = ms;
    this.range = range;
    this.image = 'url("'+img+'")';
    this.team = team;
  }

  placeShip (x,y,occupied) {
    this.newPosition = [x,y,occupied];
    // console.log(this.newPosition);

    if (this.newPosition[2] !== 0) {

    }


  }
}
