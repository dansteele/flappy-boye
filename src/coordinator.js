export default class Coordinator {

  static get groundHeight() { return 40 }

  constructor(player, game) {
    this.player = player
    this.game = game
    this.ticks = 0
  }

  tick() {
    this.ticks += 1
    this.drawBackground()
    this.renderPlayer()
    this.setScore()
    this.detectFailure()
  }

  renderPlayer() {
    this.game.setFillColor(252, 247, 93)
    this.game.ellipse(this.player.x, this.player.y, this.player.size)
    this.player.accellerate()
  }

  drawBackground() {
    this.game.background(232, 250, 255)
    this.game.setFillColor(117, 71, 55)
    this.game.rect(
      0,
      this.game.windowHeight - Coordinator.groundHeight,
      this.game.windowWidth,
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

  }

}
