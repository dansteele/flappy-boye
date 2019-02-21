import * as p5 from 'p5'

export default class Player {

  constructor(windowWidth, windowHeight) {
    this.windowWidth = windowWidth
    this.windowHeight = windowHeight
    this.x = windowWidth / 5
    this.y = windowHeight / 2
    this.size = 50
    this.velY = 1
    this.velx = 20
    this.gravity = this.windowHeight / 100 * 0.1
  }

  // Mostly a hard-reset of momentum, but take some momentum in to account
  flap() {
    this.velY = (-20 * this.gravity) + 0.3 * this.velY
  }

  accellerate() {
    this.y += this.velY
    this.velY += this.gravity
  }
}
