export default class Coordinator {

  static get groundHeight() { return 40 }

  get topOfGround() { return this.windowHeight - Coordinator.groundHeight }

  constructor(player, game) {
    this.player = player
    this.game = game
    this.ticks = 0
    this.windowWidth = game.windowWidth
    this.windowHeight = game.windowHeight
  }

  tick() {
    this.ticks += 1
    this.drawBackground()
    this.renderPlayer()
    this.renderPylons()
    if (this.detectFailure()) { return this.end() }
    this.setScore()
    this.player.accellerate()
  }

  renderPlayer() {
    this.game.setFillColor(252, 247, 93)
    this.game.ellipse(this.player.x, this.player.y, this.player.size)
  }

  renderPylons() {
    this.game.setFillColor(57, 221, 95)
    this.game.rect(
      this.windowWidth - 5 * this.ticks, //  < --- -- > direction
      500, // ^ height
      100, // <> width
      500 // length
    )
  }

  drawBackground() {
    this.game.background(232, 250, 255)
    this.game.setFillColor(117, 71, 55)
    this.game.rect(
      0,
      this.windowHeight - Coordinator.groundHeight,
      this.windowWidth,
      Coordinator.groundHeight
    )
  }

  mouseClicked() {
    this.player.flap()
  }

  setScore() {
    this.score = (this.ticks / 6).toFixed(1)
    console.log(this.score);
  }

  detectFailure() {
    if (this.hasHitGround()) { return true }
    return false
  }

  hasHitGround() {
    return this.player.y + this.player.size / 2 > this.topOfGround
  }

  end() {
    console.log('Game over')
    return this.game.noLoop()
  }

}
