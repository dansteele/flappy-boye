import * as p5 from 'p5'
// import Game from './game'
import Player from './player'
import Coordinator from './coordinator'


new p5(function( game ) {

  game.setup = function() {
    const player = new Player(game.windowWidth, game.windowHeight)
    game.coordinator = new Coordinator(player, game)
    game.createCanvas(game.windowWidth, game.windowHeight)
    game.frameRate(60);
    console.log('Setup done');
  };

  game.draw = function() {
    game.coordinator.tick()
  };

  game.mouseClicked = () => { game.coordinator.mouseClicked() }

  game.setFillColor = function(r, g, b) {
    game.fill(game.color(r, g, b))
  }
})
