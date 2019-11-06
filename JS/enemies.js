class Enemies {
  constructor(ctx, width, height, gameWidth, gameHeight, velY, posX_Random_obstacle) {
    this.ctx = ctx;
    this.width = width;
    this.height = height - 20;
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;

    this.posX_Random_obs = posX_Random_obstacle;
    this.posX_Random = this.randomInt(1, 3);

    this.posX = this.randomPosX();
    this.posY = this.gameHeight - this.gameHeight - this.height;

    this.velY = velY;

    this.image = new Image();
    this.image.src = "IMAGES/Enemy_sprite.png";

    this.frames = 4;
    this.framesIndex = 0;
  }

  randomPosX() {
    if (this.posX_Random === 1 && this.posX_Random_obs != 1){
    return (this.posX = this.gameWidth - this.gameWidth + this.width / 2);
    }else if(this.posX_Random === 1){
      this.posX_Random = this.randomInt(2, 3);
    }
    if (this.posX_Random === 2 && this.posX_Random_obs != 2){
      return (this.posX = this.gameWidth / 2 - this.width / 2);
    }else if(this.posX_Random === 2){
      this.posX_Random = this.randomInt(2, 3);
      if (this.posX_Random === 2)this.posX_Random = 1;
    }
    if (this.posX_Random === 3 && this.posX_Random_obs != 3){
      return (this.posX = (this.gameWidth / 3) * 2 + this.width / 2);
    }else if(this.posX_Random === 3){
      this.posX_Random = this.randomInt(1, 2);
    }
      
  }

  draw(framesCounter) {
    this.ctx.drawImage(
      this.image,
      0,
      this.framesIndex * Math.floor(this.image.height / this.frames),
      this.image.width,
      Math.floor(this.image.height / this.frames),
      this.posX,
      this.posY,
      this.width,
      this.height
    );
    this.animate(framesCounter);
  }

    animate(framesCounter) {
      if (framesCounter % 30 === 0) {
        this.framesIndex++;

        if (this.framesIndex > 3) this.framesIndex = 0;
      }
    }

  move() {
    this.posY += this.velY * 3; // velY * 2 por defecto
  }

  randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
}
