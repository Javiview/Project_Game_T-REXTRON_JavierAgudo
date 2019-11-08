class EnemiesDeath {
  constructor(ctx, enemyPosX, enemyPosY, enemyWidth, enemyHeight) {
    this.ctx = ctx;

    this.posX = enemyPosX;
    this.posY = enemyPosY;
    this.width = enemyWidth;
    this.height = enemyHeight;

    this.frames = 3;
    this.framesIndex = 0;

    this.image = new Image();
    this.image.src = "IMAGES/Enemy_death_sprite.png";

    this.sound = new Audio();
    this.sound.src = "SOUNDS/enemyDead.wav"
    this.sound.play();
   
  }

  draw(framesCounter) {
    this.ctx.drawImage(
      this.image,
      this.framesIndex * Math.floor(this.image.width / this.frames),
      0,
      Math.floor(this.image.width / this.frames),
      this.image.height - 1,
      this.posX,
      this.posY,
      this.width,
      this.height
    );
    this.ctx.beginPath();
    this.ctx.fillStyle = "rgb(98, 252, 3)";
    this.ctx.font = "25px 'Press Start 2P'";
    this.ctx.fillText( "+10", this.posX, this.posY);
    this.ctx.closePath();
    this.animate(framesCounter)
    
  }
  animate(framesCounter) {
    if (framesCounter % 10 === 0) {
      this.framesIndex++;

      if (this.framesIndex > 2) this.framesIndex = 0;
    }
  }
}
