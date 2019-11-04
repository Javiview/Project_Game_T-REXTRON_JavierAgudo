class Obstacle {
  constructor(ctx, width, height, gameWidth, gameHeight,velY) {
    this.ctx = ctx;
    this.width = width;
    this.height = height/2;
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;

    this.posX_Random = this.randomInt(1, 3);

    this.posX = this.randomPosX();
    this.posY = this.gameHeight - this.gameHeight - this.height;
    
    this.velY = velY;
    this.image = new Image();
    this.image.src = "IMAGES/Obstacle_Prueba.png";
    
  }
  randomPosX (){
      if(this.posX_Random === 1)return this.posX =  this.gameWidth - this.gameWidth + this.width / 2;
      if(this.posX_Random === 2)return this.posX = this.gameWidth / 2 - this.width / 2;
      if(this.posX_Random === 3)return this.posX = (this.gameWidth / 3) * 2 + this.width / 2;
  }
  draw() {
    this.ctx.drawImage(
      this.image,
      this.posX,
      this.posY,
      this.width,
      this.height
    );
  }

  move() {
    this.posY += this.velY * 2; // velY * 2 por defecto
  }

  randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
}
