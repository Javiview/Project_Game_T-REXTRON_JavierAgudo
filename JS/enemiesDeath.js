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
    this.animate(framesCounter)
  }
  animate(framesCounter) {
    if (framesCounter % 10 === 0) {
      this.framesIndex++;

      if (this.framesIndex > 2) this.framesIndex = 0;
    }
  }
}
