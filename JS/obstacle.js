class Obstacle {
  constructor(ctx, width, height, gameWidth, gameHeight) {
    this.ctx = ctx;
    this.width = width;
    this.height = height;
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;

    this.posX = this.gameWidth - this.gameWidth + this.width / 2;
    this.posX_2 = this.gameWidth / 2 - this.width / 2;
    this.posX_3 = (this.gameWidth / 3) * 2 + this.width / 2;
    this.posX_Random = this.randomInt(1, 3);

    this.posY = this.gameHeight - this.gameHeight - this.height;
    
    this.velY = 2;
  }
  draw() {
    this.ctx.fillStyle = "rgba(160, 49, 49, 1.000)";
    switch (this.posX_Random) {
      case 1:
        this.ctx.fillRect(this.posX, this.posY, this.width, this.height);
        break;
      case 2:
        this.ctx.fillRect(this.posX_2, this.posY, this.width, this.height);
        break;
      case 3:
        this.ctx.fillRect(this.posX_3, this.posY, this.width, this.height);
        break;
    }
  }

  move() {
    this.posY += this.velY;
  }

  randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
}
