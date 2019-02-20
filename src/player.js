import * as p5 from 'p5'

export default class Player {

  constructor(game, size) {
    this.game = game
    this.windowWidth = game.windowWidth
    this.windowHeight = game.windowHeight
    this.x = this.windowWidth / 5
    this.y = this.windowHeight / 2
    this.size = 50
    this.velY = 1
    this.velx = 20
    this.gravity = this.windowHeight / 100 * 0.1
  }

  render() {
    this.game.ellipse(this.x, this.y, this.size)
    this.y += this.velY
    this.velY += this.gravity
  }

  flap() {
    this.velY = -20 * this.gravity
  }
}
