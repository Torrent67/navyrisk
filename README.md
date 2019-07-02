# Risky Navy

#### _Risky Navy, a game loosely based on Battleship and Risk- July 1, 2019_

#### _By **Trevor Teigen & Marqis Ramos**_

## Description

Combination of Risk and Battleship.

### Specs
| Spec | Input | Output |
| :-------------     | :------------- | :------------- |
| **Create game pieces** | board size: 20x20, ships objects | new Board, new Destroyer, new Battleship, etc |
| **Form Navy from User input** | User: "2 destroyers, 2 cruisers, 1 carrier" | Navy Cost= 300, 2 Destroyers = -10 NC, 2 Cruisers = -20 NC, 1 Carrier = -50 NC|
| **Calculate Movement** | User Click ship and new space | Check if valid move, then move to space |
| **Calculate attacks** | User clicks own ship and then enemy ship | Check if valid attack, proceed to 'attack phase' |
| **Attack Phase** | Users roll dice, highest numbers win | User 1 rolls: 5,4,1 vs User2 rolls: 6,2,2: User 1 loses 2 hitpoints on current ship |
| **Cards** | Players draw a card once every 4 turns | Players draw on 4, 8, 12, 16, etc |
| **Card Activation** | Player uses MS buff card | Ship of choice gets +1 to movement |
| **Victory Points** | Player 'owns' a victory square'| Every 4 turns Player earns 10 Victory Points |



## Setup/Installation Requirements

* Clone this repository and open the .html file.
* OR go directly to the [Web page](http://schoinh.github.io/pizza)

## Known Bugs
* No known bugs at this time.

## Technologies Used
* JavaScript
* jQuery
* Bootstrap
* Webpack
* Jasmine/Karma



## Support and contact details

_Please contact us with questions and comments._

### License

*GNU GPLv3*

Copyright (c) 2019 **_Trevor Teigen & Marqis Ramos_**





300 points

ocean sectors 20x20





(roll to decide number of moves you get)
movement
1 sector per turn:
carrier
battleship
2 sector:
battlecruiser
3:
destroyer
cruiser


cards - 80
MS buff - 15
radar (range buff) - 15
AA buff - 15
Torpedo (+dice) - 7
maneuver buff (+1 defense die) - 10
repair (remove 1 counter) - 8
reload (attack twice) - 6
reinforcement ('build' new ship) - 4

Victory Points:
10 point every 4 turns, win at 50 points.
