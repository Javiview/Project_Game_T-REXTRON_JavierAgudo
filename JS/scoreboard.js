class ScoreBoard {
  constructor(ctx, score, width, lifes) {
    this.ctx = ctx;
    this.score = score;
    this.width = width;
    this.lifes = lifes;

    this.image = new Image();
    this.image2 = new Image();
    this.image.src = "IMAGES/vidasBuenas.png";
    this.image2.src = "IMAGES/ultimaVida.png";
    this.image3 = new Image();
    this.image3.src = "IMAGES/icon_death_trex.png"
  }

  draw(score, lifes) {
    this.ctx.beginPath();
    this.ctx.fillStyle = "white";
    this.ctx.font = "17px 'Press Start 2P'";
    this.ctx.fillText(`Scr:${score}`, 50, 35);
    this.ctx.fillText(`Lifes: `, this.width / 2, 35);
    this.ctx.closePath();

    switch (lifes) {
      case 3:
        this.ctx.drawImage(this.image, this.width - 100, 10, 15, 35);
        this.ctx.drawImage(this.image, this.width - 80, 10, 15, 35);
        this.ctx.drawImage(this.image, this.width - 60, 10, 15, 35);
        break;
      case 2:
        this.ctx.fillStyle = "white";
        this.ctx.drawImage(this.image, this.width - 100, 10, 15, 35);
        this.ctx.drawImage(this.image, this.width - 80, 10, 15, 35);
        break;
      case 1:
        this.ctx.drawImage(this.image2, this.width - 100, 10, 15, 35);
        break;
      case 0:
        this.ctx.drawImage(this.image3, this.width - 100, 10, 35, 35);
        break;
    }
  }
}
