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
  }

  draw(score, lifes) {
    this.ctx.beginPath();
    this.ctx.fillStyle = "rgba(131,131,131,.8)";
    this.ctx.fillRect(0, 0, this.width, 40);
    this.ctx.fillStyle = "white";
    this.ctx.font = "30px sans-serif";
    this.ctx.fillText(`SCORE: ${score}`, 15, 30);
    this.ctx.fillText(`VIDAS: `, this.width / 2, 30);
    this.ctx.closePath();

    switch (lifes) {
      case 3:
        this.ctx.drawImage(this.image, this.width - 20, 5, 15, 30);
        this.ctx.drawImage(this.image, this.width - 40, 5, 15, 30);
        this.ctx.drawImage(this.image, this.width - 60, 5, 15, 30);
        break;
      case 2:
        this.ctx.fillStyle = "white";
        this.ctx.drawImage(this.image, this.width - 20, 5, 15, 30);
        this.ctx.drawImage(this.image, this.width - 40, 5, 15, 30);
        break;
      case 1:
        this.ctx.drawImage(this.image2, this.width - 20, 5, 15, 30);
        break;
      case 0:
        tthis.ctx.fillText("", this.width / 2 + 20, 30);
        break;
    }
  }
}
