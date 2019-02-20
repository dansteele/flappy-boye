import * as p5 from 'p5'
// import Game from './game'
import Player from './player'


new p5(function( game ) {

  game.setup = function() {
    game.ticks = 0
    game.createCanvas(game.windowWidth, game.windowHeight)
    game.player = new Player(game, game.windowWidth, game.windowHeight)
    game.frameRate(60);
    console.log('Setup done');
  };

  game.draw = function() {
    game.ticks += 1
    game.drawBackground()
    game.player.render()
    game.setScore()
    game.detectFailure()
  };

  game.mouseClicked = function() {
    game.player.flap()
  }

  game.drawBackground = function() {
    game.background(232, 250, 255)
    game.setFillColor(117, 71, 55)
    game.rect(
      0,
      game.windowHeight - 40,
      game.windowWidth,
      40
    )
  }

  game.setFillColor = function(r, g, b) {
    game.fill(game.color(r, g, b))
  }

  game.setScore = function() {
    game.score = (game.ticks / 6).toFixed(1)
    console.log(game.score)
  }

})
