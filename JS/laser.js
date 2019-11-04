class Laser {
  constructor(ctx, playerX, playerY, playerWidth, playerHeight) {
    this.ctx = ctx;

    this.posX = playerX + playerWidth/2 +3;
    this.posY = playerY -5;
    this.playerHeight = playerHeight;

    this.vy = 1;

    this.image = new Image();
    this.image.src = "IMAGES/laser.png";
  }

  draw(){
    this.ctx.drawImage(this.image,this.posX, this.posY,)
  }

  move(){
    this.posY -= this.vy;
  }
}
