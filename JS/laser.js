class Laser {
  constructor(ctx, playerX, playerY, playerWidth, playerHeight) {
    this.ctx = ctx;

    this.posX = playerX + playerWidth / 2 + 5;
    this.posY = playerY-35;

    this.playerHeight = playerHeight;

    this.vy = 5;

    this.image = new Image();
    this.image.src = "IMAGES/laser.png";
  }

  draw() {
    this.ctx.drawImage(this.image, this.posX, this.posY, 5, 60);
  }

  move() {
    this.posY -= this.vy;
  }
}
