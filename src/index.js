import * as p5 from 'p5'
// import Game from './game'
import Player from './player'


new p5(function( game ) {

  game.setup = function() {
    game.createCanvas(game.windowWidth, game.windowHeight)
    game.player = new Player(game, game.windowWidth, game.windowHeight)
    game.frameRate(60);
  };

  game.draw = function() {
    game.background(102)
    game.player.render()
  };


})
