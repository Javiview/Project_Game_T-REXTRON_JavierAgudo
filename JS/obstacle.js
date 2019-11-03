class Obstacle {
  constructor(ctx, width, height, gameWidth, gameHeight) {
    this.ctx = ctx;
    this.width = width;
    this.height = height;

    this.posX = gameWidth - gameWidth;
    this.posY = gameHeight - gameHeight;

    this.vx = 2;
  }
  draw() {
    this.ctx.fillStyle = "red";
    this.ctx.fillRect(this.posX, this.posY, this.width, this.height);
  }

  move() {
    this.posY += this.vx;
  }
}
