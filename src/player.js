import * as p5 from 'p5'
import Game from './game'

export default class Player {

  constructor(game, size) {
    this.game = game
    this.windowWidth = game.windowWidth
    this.windowHeight = game.windowHeight
    this.x = this.windowWidth / 5
    this.y = this.windowHeight / 2
    this.size = 50
    this.velY = 0
    this.velx = Game.panVel
  }

  render() {
    this.game.ellipse(this.x, this.y, this.size)
    this.y += this.windowHeight / 100
  }
}
