class Obstacle {
  constructor(ctx, width, height, gameWidth, gameHeight,velY) {
    this.ctx = ctx;
    this.width = width;
    this.height = height;
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;

    this.posX_Random = this.randomInt(1, 3);

    this.posX = this.randomPosX();
    this.posY = this.gameHeight - this.gameHeight - this.height;
    
    this.velY = velY;
    
  }
  randomPosX (){
      if(this.posX_Random === 1)return this.posX =  this.gameWidth - this.gameWidth + this.width / 2;
      if(this.posX_Random === 2)return this.posX = this.gameWidth / 2 - this.width / 2;
      if(this.posX_Random === 3)return this.posX = (this.gameWidth / 3) * 2 + this.width / 2;
  }
  draw() {
    this.ctx.fillStyle = "rgba(160, 49, 49, 1.000)";
    this.ctx.fillRect(this.posX, this.posY, this.width, this.height);
  }

  move() {
    this.posY += this.velY;
  }

  randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
}
